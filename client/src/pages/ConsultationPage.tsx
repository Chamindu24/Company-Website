import { useState, useRef } from "react";
import {
  ArrowUpRight,
  Linkedin,
  Twitter,
  CheckCircle2,
  Instagram,
  Facebook,
  Mail,
  AlertCircle,
} from "lucide-react";
import Select from "react-select";
import {
  submitInquiry,
  validateEmail,
  validatePhone,
} from "../services/inquiryService";

type FormState = {
  fullName: string;
  email: string;
  budget: { value: string; label: string } | null;
  whatsapp: string;
  requirement: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const budgetOptions = [
  { value: "under-10k", label: "Under $10k" },
  { value: "10k-50k", label: "$10k – $50k" },
  { value: "50k-plus", label: "$50k+" },
];

const socials = [
  {
    href: "https://www.linkedin.com/company/lushware",
    icon: <Linkedin size={20} strokeWidth={1.5} />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/lushware",
    icon: <Twitter size={20} strokeWidth={1.5} />,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/lush_ware_org/",
    icon: <Instagram size={20} strokeWidth={1.5} />,
    label: "Instagram",
  },
  {
    href: "https://web.facebook.com/lushware/?_rdc=1&_rdr#",
    icon: <Facebook size={20} strokeWidth={1.5} />,
    label: "Facebook",
  },
];

const inputClass = (hasError?: boolean) =>
  `w-full border-b bg-transparent py-2 text-md sm:text-md  text-slate-900 outline-none transition-colors placeholder:text-slate-300 ${hasError
    ? "border-red-400 focus:border-red-500"
    : "border-slate-300 focus:border-emerald-600"
  }`;

const selectStyles = (hasError?: boolean) => ({
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
    borderRadius: 0,
    borderBottom: `1px solid ${hasError ? "#f87171" : state.isFocused ? "#059669" : "#cbd5e1"
      }`,
    boxShadow: "none",
    padding: "6px 2px",
  }),
  menu: (provided: any) => ({
    ...provided,
    zIndex: 50,
    borderRadius: "0.75rem",
    overflow: "hidden",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#10B981" : "white",
    color: state.isFocused ? "white" : "#0f172a",
    cursor: "pointer",
  }),
  singleValue: (provided: any) => ({ ...provided, color: "#0f172a" }),
  placeholder: (provided: any) => ({ ...provided, color: "#cbd5e1" }),
});

function Field({
  label,
  numeral,
  optional,
  error,
  children,
}: {
  label: string;
  numeral: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative space-y-1.5 group">
      <label className="flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold uppercase tracking-widest text-slate-600 group-focus-within:text-emerald-600 transition-colors">
        <span className="consult-serif italic lowercase text-base opacity-70">
          {numeral}
        </span>
        {label}
        {optional && (
          <span className="text-[11px] font-medium normal-case tracking-normal text-slate-400">
            (Optional)
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-[12px] font-medium text-red-500 pt-1">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

export default function ConsultationPageV15() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    budget: null,
    whatsapp: "",
    requirement: "",
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Hard guard against concurrent submits (React state alone is not reliable
  // for preventing double-fires within the same event flush).
  const isSubmittingRef = useRef(false);

  const clearFieldError = (field: keyof FormState) => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    clearFieldError(id as keyof FormState);
  };

  const handleBudgetChange = (
    option: { value: string; label: string } | null,
  ) => {
    setFormData((prev) => ({ ...prev, budget: option }));
    clearFieldError("budget");
  };

  const validate = (): FieldErrors => {
    const errors: FieldErrors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    else if (!validateEmail(formData.email))
      errors.email = "Enter a valid email address.";
    if (!formData.budget) errors.budget = "Select a budget range.";
    if (formData.whatsapp.trim() && !validatePhone(formData.whatsapp)) {
      errors.whatsapp = "Enter a valid phone number.";
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent concurrent submissions (ref guard is synchronous — state is not)
    if (isSubmittingRef.current) return;

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setSubmitStatus("error");
      setStatusMessage("Please check the highlighted fields and try again.");
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const [firstName, ...rest] = formData.fullName.trim().split(/\s+/);
      const lastName = rest.join(" ");

      const result = await submitInquiry({
        firstName,
        lastName,
        email: formData.email,
        budget: formData.budget?.value,
        whatsapp: formData.whatsapp,
        message: formData.requirement,
        inquiryType: "consultation",
      });

      if (result.success) {
        // Reset form and unblock the button before showing success banner
        // so the UI feels snappy — the server has already saved the data.
        setIsSubmitting(false);
        isSubmittingRef.current = false;

        setFormData({
          fullName: "",
          email: "",
          budget: null,
          whatsapp: "",
          requirement: "",
        });
        setFieldErrors({});
        setSubmitStatus("success");
        setStatusMessage(
          "Thank you. Your request is in — we'll be in touch within one business day.",
        );

        setTimeout(() => setSubmitStatus("idle"), 5000);
        return; // skip the finally block's cleanup since we already did it
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Failed to submit. Please try again.",
      );
    } finally {
      // Ensures cleanup even when an exception is thrown
      setIsSubmitting(false);
      isSubmittingRef.current = false;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .consult-root * { font-family: 'DM Sans', sans-serif; }
        .consult-serif { font-family: 'DM Serif Display', serif; }

        .consult-fadeUp {
          animation: consultFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .consult-fadeUp:nth-child(2) { animation-delay: 0.08s; }
        .consult-fadeUp:nth-child(3) { animation-delay: 0.16s; }
        .consult-fadeUp:nth-child(4) { animation-delay: 0.24s; }

        @keyframes consultFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .consult-dotgrid {
          background-image: radial-gradient(circle, #d1fae5 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      <section
        id="consultation"
        className="consult-root relative scroll-mt-24 overflow-hidden px-6 md:px-8 lg:px-0 py-24 md:py-32 lg:py-40 bg-white selection:bg-emerald-50"
      >
        <div className="consult-dotgrid absolute inset-0 -z-10 opacity-40 pointer-events-none" />

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:gap-20 lg:grid-cols-12">
            {/* LEFT: The Proposition */}
            <div className="lg:col-span-5 px-4 md:px-8 lg:px-0">
              <div className="consult-fadeUp flex items-center gap-3 mb-7">
                <div className="h-px w-8 bg-emerald-600" />
                <div className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">
                  Free Consultation
                </div>
              </div>

              <h2 className="consult-fadeUp consult-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.05]">
                Book a free <br />
                <span className="text-emerald-600">consultancy.</span>
              </h2>

              <p className="consult-fadeUp mt-8 text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-md">
                Connect with our team and get the support you need. Start your
                journey with{" "}
                <span className="font-semibold text-slate-800">LushWare</span>{" "}
                today.
              </p>

              <div className="consult-fadeUp mt-10 space-y-4">
                {[
                  "Custom Software Development — end-to-end MVP and product builds for startups.",
                  "Advanced AI Integration — machine learning woven directly into your workflows.",
                  "Fractional CTO Services — senior technical strategy and dedicated engineering teams.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-emerald-600 mt-0.5 shrink-0"
                    />
                    <span className="text-[15px] font-medium text-slate-700 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact block */}
              <div className="consult-fadeUp mt-10 pt-10 border-t border-slate-200 space-y-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:info@lushware.net"
                    className="group inline-flex items-center gap-2 text-xl font-medium text-slate-900 hover:text-emerald-600 transition-colors"
                  >
                    <Mail size={18} className="text-emerald-600" />
                    info@lushware.net
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </a>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Global Contact
                  </p>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-sm overflow-hidden flex-shrink-0 ring-1 ring-slate-200">
                        <img
                          src="https://flagcdn.com/gb.svg"
                          alt="UK Flag"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                          United Kingdom
                        </span>
                        <a
                          href="tel:+447777667074"
                          className="text-[17px] font-medium text-slate-900 hover:text-emerald-600 transition-colors tracking-tight"
                        >
                          +44 7777 667074
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-sm overflow-hidden flex-shrink-0 ring-1 ring-slate-200">
                        <img
                          src="https://flagcdn.com/lk.svg"
                          alt="SL Flag"
                          className="w-full h-full object-cover scale-150"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                          Sri Lanka
                        </span>
                        <a
                          href="tel:+94716430053"
                          className="text-[17px] font-medium text-slate-900 hover:text-emerald-600 transition-colors tracking-tight"
                        >
                          +94 71 643 0053
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="group relative p-2.5 rounded-full transition-all duration-500 hover:bg-emerald-50"
                    >
                      <div className="relative z-10 text-slate-500 group-hover:text-emerald-600 transition-colors duration-300">
                        {social.icon}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-emerald-600/0 opacity-0 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 ease-out" />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-[10px] font-bold text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest whitespace-nowrap">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: The Form */}
            <div className="lg:col-span-7">
              <div className="relative  bg-white shadow-[0_2px_30px_rgba(15,23,42,0.07)] ring-1 ring-slate-200 overflow-hidden">
                <div className="h-0.25 w-full bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400" />

                <form
                  className="px-6 md:px-14 lg:px-16 py-10 lg:py-16"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-14">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700 mb-1">
                        Project Inquiry
                      </p>
                      <h3 className="consult-serif text-2xl text-slate-900">
                        Tell us about your project
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2">
                    <div className="">
                      <Field
                        label="Full Name"
                        numeral="i."
                        error={fieldErrors.fullName}
                      >
                        <input
                          id="fullName"
                          type="text"
                          placeholder="Alistair Reeve"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className={inputClass(!!fieldErrors.fullName)}
                        />
                      </Field>
                    </div>

                    <div className="">
                      <Field
                        label="Business Email"
                        numeral="ii."
                        error={fieldErrors.email}
                      >
                        <input
                          id="email"
                          type="email"
                          placeholder="director@firm.co.uk"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className={inputClass(!!fieldErrors.email)}
                        />
                      </Field>
                    </div>

                    <Field
                      label="Estimated Project Budget"
                      numeral="iii."
                      error={fieldErrors.budget}
                    >
                      <Select
                        options={budgetOptions}
                        value={formData.budget}
                        onChange={handleBudgetChange}
                        placeholder="Select budget range"
                        classNamePrefix="react-select"
                        isDisabled={isSubmitting}
                        styles={selectStyles(!!fieldErrors.budget)}
                      />
                    </Field>

                    <Field
                      label="Phone Number"
                      numeral="iv."
                      optional
                      error={fieldErrors.whatsapp}
                    >
                      <input
                        id="whatsapp"
                        type="tel"
                        placeholder="+94 71 643 0053"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={inputClass(!!fieldErrors.whatsapp)}
                      />
                    </Field>

                    <div className="sm:col-span-2">
                      <Field label="Requirement" numeral="v.">
                        <textarea
                          id="requirement"
                          rows={3}
                          maxLength={600}
                          placeholder="Briefly describe your project or technical roadblock"
                          value={formData.requirement}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className={`${inputClass(false)} resize-none`}
                        />
                        <div className="text-right text-[11px] text-slate-400">
                          {formData.requirement.length}/600
                        </div>
                      </Field>
                    </div>
                  </div>

                  <div className="mt-14">
                    {submitStatus !== "idle" && (
                      <div
                        className={`mb-6 flex items-start gap-3 rounded-2xl border px-5 py-4 text-sm font-semibold ${submitStatus === "success"
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border-red-200 bg-red-50 text-red-700"
                          }`}
                        role="status"
                      >
                        {submitStatus === "success" ? (
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                        ) : (
                          <AlertCircle size={18} className="mt-0.5 shrink-0" />
                        )}
                        <span>{statusMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full cursor-pointer py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-10 bg-slate-900 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.25)] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] lg:tracking-[0.3em] text-white text-center">
                          {isSubmitting
                            ? "Submitting..."
                            : "Start With LushWare"}
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px] text-white transition-transform group-hover:rotate-45"
                        />
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
