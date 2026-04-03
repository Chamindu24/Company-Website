import { useState } from "react";
import { Link } from "react-router-dom";
import { getNames } from "country-list";
import Select from "react-select";
import PinnedScrollHeadlineSection from "../components/PinnedScrollHeadlineSection";
import type { InquiryFormData } from "../services/inquiryService";
import {
  submitInquiry,
  validateEmail,
  validatePhone,
} from "../services/inquiryService";

type CountryOption = {
  value: string;
  label: string;
};

type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  country: CountryOption | null;
  whatsappNumber: string;
  requirements: string;
};

const countries = getNames();
const countryOptions: CountryOption[] = countries.map((c) => ({
  value: c,
  label: c,
}));

function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>({
    firstName: "",
    lastName: "",
    email: "",
    country: null,
    whatsappNumber: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (option: CountryOption | null) => {
    setFormData((prev) => ({ ...prev, country: option }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitStatus("idle");
    setErrorMessage("");

    if (!formData.country) {
      setSubmitStatus("error");
      setErrorMessage("Please select a country.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(formData.whatsappNumber)) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid WhatsApp number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: InquiryFormData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        country: formData.country.value,
        whatsapp: formData.whatsappNumber,
        inquiryType: "consultation",
        message: formData.requirements,
      };

      const result = await submitInquiry(payload);

      if (!result.success) {
        throw new Error(result.message);
      }

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: null,
        whatsappNumber: "",
        requirements: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to submit your inquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "w-full rounded-3xl border border-outline-variant bg-surface/40 px-6 py-4 text-on-surface placeholder:text-on-surface-variant/70 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15 disabled:cursor-not-allowed disabled:opacity-60";
  const labelClass =
    "absolute -top-2.5 left-4 bg-surface px-2 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant transition-all group-focus-within:text-primary";

  return (
    <main className="bg-[#ffffff] pt-24 font-body text-on-surface">
      <PinnedScrollHeadlineSection
        badge="Partner with us"
        titlePrefix="Let's Scale Your"
        highlightText="Island Business"
        titleSuffix=""
        description="Transform your Maldivian hospitality experience with digital solutions designed for the horizon."
      >
        <div className="flex flex-col sm:flex-row mt-4 lg:mt-2 gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
          <a
            href="#contact-form"
            className="w-full sm:flex-1 text-center rounded-lg bg-gradient-to-br from-primary to-primary-container px-6 sm:px-10 lg:px-10 py-3 sm:py-4 font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Schedule a Demo
          </a>

          <Link
            to="/services"
            className="w-full sm:flex-1 text-center rounded-lg border-2 border-primary px-6 sm:px-10 lg:px-10 py-3 sm:py-4 font-bold text-primary transition-all hover:bg-primary/10 hover:scale-105 active:scale-95"
          >
            View Solutions
          </Link>
        </div>
      </PinnedScrollHeadlineSection>

      <section
        id="contact-form"
        className="mx-auto mb-24 max-w-8xl px-6  md:px-24"
      >
        <div className="grid  grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="rounded-3xl  border border-outline-variant/30 bg-[#ffffff] py-10 md:px-8 px-4 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] lg:col-span-8">
            <div className="mb-20 mt-12 ">
              <h2 className="font-headline text-4xl font-semibold tracking-tight text-on-surface">
                Start a project
              </h2>
              <p className="mt-2 font-medium text-on-surface-variant">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
            </div>

            {submitStatus === "success" && (
              <div className="mb-6 rounded-2xl border border-primary/35 bg-primary-container/25 px-4 py-3 text-sm font-medium text-on-surface">
                Inquiry submitted successfully. Our team will reach out shortly.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 rounded-2xl border border-error/40 bg-error-container/25 px-4 py-3 text-sm font-medium text-on-surface">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Row 1: Name Pair */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="relative group">
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    className={fieldClass}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div className="relative group">
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    className={fieldClass}
                    disabled={isSubmitting}
                    required
                  />
                </div>
              </div>

              {/* Row 2: Email & Country */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="relative group">
                  <label className={labelClass}>Business Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className={fieldClass}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div className="relative group">
                  <label className={labelClass}>Geography</label>
                  <div className="relative">
                    <Select
                      options={countryOptions}
                      value={formData.country}
                      onChange={handleCountryChange}
                      isDisabled={isSubmitting}
                      isClearable
                      isSearchable
                      className="react-select-container"
                      classNamePrefix="react-select"
                      styles={{
                        control: (base, state) => ({
                          ...base,
                          border: "1px solid",
                          borderColor: state.isFocused ? "#26AEBF" : "#cad5e2",
                          backgroundColor: "#ffffff",
                          borderRadius: "1rem",
                          minHeight: "56px",
                          padding: "0 8px",
                          fontSize: "15px",
                          cursor: "pointer",
                          boxShadow: state.isFocused
                            ? "0 0 0 2px rgba(38,174,191,0.15)"
                            : "none",
                          "&:hover": { borderColor: "#26AEBF" },
                        }),
                        option: (base, state) => ({
                          ...base,
                          backgroundColor: state.isFocused
                            ? "#26AEBF"
                            : "white",
                          color: state.isFocused ? "white" : "#1f2937",
                          cursor: "pointer",
                        }),
                        singleValue: (base) => ({
                          ...base,
                          color: "#111827",
                        }),
                        input: (base) => ({
                          ...base,
                          color: "#111827",
                        }),
                        placeholder: (base) => ({
                          ...base,
                          color: "#6b7280",
                        }),
                      }}
                      placeholder="Select Country"
                      required
                    />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      keyboard_arrow_down
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 3: WhatsApp */}
              <div className="relative group">
                <label className={labelClass}>WhatsApp Number</label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                  placeholder="+44 000 000 0000"
                  className={fieldClass}
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* Row 4: Requirement */}
              <div className="relative group">
                <label className={labelClass}>Requirement</label>
                <textarea
                  name="requirements"
                  rows={4}
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  className={`${fieldClass} resize-none`}
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group w-full  overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary-container px-12 py-5 text-sm font-bold tracking-widest text-on-primary uppercase transition-all hover:bg-primary/90 hover:shadow-[0_20px_40px_-10px_rgba(38,174,191,0.45)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
                >
                  <span className="flex items-center justify-center gap-3">
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                    <div className="h-px w-6 bg-on-primary/40 transition-all group-hover:w-8 group-hover:bg-on-primary" />
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8 lg:col-span-4">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-8 text-on-primary">
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />
              <h3 className="relative z-10 mb-6 font-headline text-2xl font-bold">
                Direct Contact
              </h3>
              <div className="relative z-10 space-y-6">
                <a
                  href="https://wa.me/94716430053"
                  className="group flex items-center rounded-lg bg-white/10 p-4 transition-colors hover:bg-white/20"
                >
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-container shadow-lg">
                    <span
                      className="material-symbols-outlined text-white"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      chat
                    </span>
                  </div>
                  <div>
                    <p className="font-label text-xs font-bold uppercase text-white/90">
                      WhatsApp
                    </p>
                    <p className="font-headline font-semibold">
                      +94 71 643 0053
                    </p>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-white/90 transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>

                <a
                  href="mailto:info@lushware.org"
                  className="group flex items-center rounded-lg bg-white/10 p-4 transition-colors hover:bg-white/20"
                >
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container shadow-lg">
                    <span
                      className="material-symbols-outlined text-white"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      alternate_email
                    </span>
                  </div>
                  <div>
                    <p className="font-label text-xs font-bold uppercase text-white/90">
                      Email Us
                    </p>
                    <p className="font-headline font-semibold">
                      info@lushware.org
                    </p>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-white/90 transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-surface-container rounded-xl overflow-hidden h-[340px] relative">
              <img
                className="w-full h-full object-cover opacity-80"
                data-alt="stylized map of maldives atolls with glowing turquoise ocean and dark land masses, high contrast editorial aesthetic"
                data-location="Maldives"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmo2fABHlQGgzC0A8gqLBqWNaQ1oX7FZSVU0aZoy-JWBqwyL3yhXaVuMTnPkbKnm2HsGpBHlRR_mTjAkuh4QY-8HwtCuBoq8y-7UcWmOyKnHLPGiUgH41rZuYe_G2oauqJ_9K0kp3pFwHAx7H0V_MxkWXj6jFCdiqZuB7arPpUJ_Iop7fzdC9ltEztcTTbNpliAqpqufPLXQY_A2d1noVM5SQxIOsjj39w1Zl-BrWuzE3PmjDKICkmXKreMZOVwFMNum5JgBqXhoCV"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                <div>
                  <h4 className="text-white font-headline font-bold text-xl">
                    Male', Maldives
                  </h4>
                  <p className="text-white/80 text-sm">
                    Hulhumale' Innovation Park, Phase II
                  </p>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-secondary-container animate-ping opacity-75"></div>
                  <div className="relative bg-secondary-container w-4 h-4 rounded-full border-4 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 sm:pb-32 md:px-8 md:pb-48">
        <div
          className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl shadow-2xl
                  h-auto min-h-[360px] sm:min-h-[400px] md:h-[450px]"
        >
          <img
            alt="Luxurious resort setting"
            className="absolute inset-0 h-full w-full object-cover"
            src="https://media.meer.com/attachments/dca4a6f93cbbbf4fc59cd8cdef0f79dae03cdc99/store/fill/860/645/4012c2f175391b2a3a52839b8cce91dac9b5a205f9b42c9a3392500cd0ad/Turquoise-waters-and-scattered-islands-define-the-breathtaking-beauty-of-the-Maldives.jpg"
          />

          <div className="absolute inset-0 bg-black/15" />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-6 text-center sm:p-10 md:p-12">
            <div className="relative z-10 w-full max-w-3xl">
              <h2 className="mb-4 font-headline text-2xl font-bold leading-tight tracking-tight text-white sm:mb-5 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl">
                Ready to start your digital journey?
              </h2>

              <p className="mx-auto mb-7 max-w-xl text-sm text-slate-100 sm:mb-8 sm:text-base md:mb-10 md:text-lg lg:text-xl">
                Join the leading resorts and businesses in the Maldives who
                trust Viduvaru for their digital transformation. Our solutions
                currently power operations for over 45 luxury island
                destinations.
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 md:gap-6">
                <a
                  href="#contact-form"
                  className="w-full rounded-full bg-white px-6 py-3 text-sm font-bold text-primary shadow-xl transition-all hover:scale-105 active:scale-95 sm:w-auto sm:px-8 sm:text-base"
                >
                  Schedule a Free Consultation
                </a>
                <Link
                  to="/our-work"
                  className="w-full rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto sm:px-8 sm:text-base"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl sm:-left-16 sm:-top-16 sm:h-52 sm:w-52 md:-left-24 md:-top-24 md:h-64 md:w-64" />
          <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-secondary/20 blur-3xl sm:-bottom-16 sm:-right-16 sm:h-52 sm:w-52 md:-bottom-24 md:-right-24 md:h-64 md:w-64" />
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
