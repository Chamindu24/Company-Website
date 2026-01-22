import { useState } from "react";

type InquiryFormProps = {
  topic: string;
  industry: string;
  ctaLabel?: string;
  onSuccess?: () => void;
  onClose?: () => void;
  showCloseButton?: boolean;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  country: string;
  whatsappNumber: string;
  requirements: string;
};

export default function InquiryForm({ 
  topic, 
  industry, 
  ctaLabel = "Send Inquiry", 
  onSuccess, 
  onClose,
  showCloseButton = false 
}: InquiryFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    country: "",
    whatsappNumber: "",
    requirements: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          topic,
          industry,
          submittedAt: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setSubmitStatus("success");
      
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        country: "",
        whatsappNumber: "",
        requirements: ""
      });

      // Call onSuccess callback after a brief delay to show success message
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setSubmitStatus("error");
      setErrorMessage("Failed to submit your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  // Shared styles for inputs to keep code clean
  const inputStyles = "w-full bg-slate-50/50 border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <form onSubmit={handleSubmit} className="space-y-3 bg-white w-full">
      {/* Header with optional close button */}
      <div className="mb-6 relative">
        <h3 className="text-4xl font-bold text-slate-900 mb-2">Let's build.</h3>
        <p className="text-slate-500 mb-4 text-lg">Inquiry for {topic}</p>
        
        {showCloseButton && (
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-0 right-0 p-2 text-slate-400 hover:text-slate-900 transition-colors"
            aria-label="Close form"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Industry Display */}
      <div className="pb-2 border-b border-slate-200">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-0.5">Industry</p>
        <p className="text-sm text-slate-700 font-medium">{industry}</p>
      </div>

      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
          <div className="flex items-center gap-2 text-emerald-700">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="font-medium">Inquiry submitted successfully! We'll get back to you soon.</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center gap-2 text-red-700">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p className="font-medium">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          className={inputStyles}
          disabled={isSubmitting}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          className={inputStyles}
          disabled={isSubmitting}
          required
        />
      </div>

      {/* Email and Organization */}
      <div className="grid grid-cols-2 gap-3">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          className={inputStyles}
          disabled={isSubmitting}
          required
        />
        <input
          type="text"
          name="organization"
          placeholder="Organization"
          value={formData.organization}
          onChange={handleInputChange}
          className={inputStyles}
          disabled={isSubmitting}
        />
      </div>

      {/* Country and WhatsApp Number */}
      <div className="grid grid-cols-2 gap-3">
        <select 
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className={inputStyles} 
          disabled={isSubmitting}
          required
        >
          <option value="">Select Country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
          <option value="in">India</option>
          <option value="lk">Sri Lanka</option>
          <option value="sg">Singapore</option>
          <option value="ae">United Arab Emirates</option>
          <option value="other">Other</option>
        </select>
        <input
          type="tel"
          name="whatsappNumber"
          placeholder="WhatsApp Number"
          value={formData.whatsappNumber}
          onChange={handleInputChange}
          className={inputStyles}
          disabled={isSubmitting}
          required
        />
      </div>

      {/* Requirement / Project Details */}
      <div>
        <textarea
          name="requirements"
          placeholder={`Tell us about your requirements for ${topic}...`}
          rows={3}
          value={formData.requirements}
          onChange={handleInputChange}
          className={`${inputStyles} resize-none`}
          disabled={isSubmitting}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || submitStatus === "success"}
        className="group relative w-full overflow-hidden rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-slate-800 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-900 disabled:active:scale-100"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : submitStatus === "success" ? (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Submitted!
            </>
          ) : (
            <>
              {ctaLabel}
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </span>
        {!isSubmitting && submitStatus !== "success" && (
          <div className="absolute inset-0 z-0 translate-x-[-100%] bg-emerald-600 transition-transform duration-300 group-hover:translate-x-0" />
        )}
      </button>
    </form>
  );
}
