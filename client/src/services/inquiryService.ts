/**
 * Unified Inquiry Service
 * Handles all inquiry form submissions across:
 * - Solutions Page (Industry-based)
 * - Project Base (Project-based)
 * - Free Tech Consultation
 */



export type InquiryType = 'solution' | 'project' | 'consultation';
const BACKEND_URL = import.meta.env.VITE_API_URL;

type EmailDeliveryStatus = 'sent' | 'failed' | 'processing';

interface SubmitInquiryApiResponse {
  message: string;
  id?: string;
  emailStatus?: {
    adminNotification?: EmailDeliveryStatus;
    userConfirmation?: EmailDeliveryStatus;
  };
}

export interface InquiryFormData {
  // Common fields
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email: string;
  country?: string;
  budget?: string;
  whatsapp?: string;
  inquiryType: InquiryType;
  
  // Solution-specific fields
  industry?: string;
  requirements?: string;
  
  // Project-specific fields
  project?: string;
  teamMembers?: string;
  message?: string;
  
  // Additional fields
  organization?: string;
}

/**
 * Submit an inquiry to the backend
 * Optimized for all form types with flexible field support
 */
export const submitInquiry = async (data: InquiryFormData): Promise<{ success: boolean; message: string; id?: string }> => {
  try {
    // Validate required fields
    if (!data.email || !data.inquiryType) {
      throw new Error("Missing required fields");
    }

    // Resolve name fields: support both firstName/lastName and fullName
    let firstName = (data.firstName || "").trim();
    let lastName = (data.lastName || "").trim();

    if (data.fullName && !firstName && !lastName) {
      const [first, ...rest] = data.fullName.trim().split(/\s+/);
      firstName = first || "";
      lastName = rest.join(" ");
    }

    if (!firstName) {
      throw new Error("First name or full name is required");
    }

    // Inquiry-type-specific validations on client side
    if (data.inquiryType === 'consultation') {
      if (!data.budget) {
        throw new Error("Budget is required for consultation");
      }
    } else {
      if (!data.country || !data.whatsapp) {
        throw new Error("Geography and WhatsApp number are required");
      }
    }

    // Build payload - only include relevant fields based on inquiry type
    const payload = {
      firstName,
      lastName,
      email: data.email.trim(),
      country: data.country?.trim() || null,
      budget: data.budget?.trim() || null,
      whatsapp: data.whatsapp?.trim() || null,
      inquiryType: data.inquiryType,
      organization: data.organization?.trim() || null,
      submittedAt: new Date().toISOString(),
      
      // Solution inquiry fields
      ...(data.inquiryType === 'solution' && {
        industry: data.industry?.trim() || null,
        requirements: data.requirements?.trim() || null,
      }),
      
      // Project inquiry fields
      ...(data.inquiryType === 'project' && {
        project: data.project?.trim() || null,
        teamMembers: data.teamMembers?.trim() || null,
        message: data.message?.trim() || null,
      }),
      
      // Consultation inquiry fields
      ...(data.inquiryType === 'consultation' && {
        message: data.message?.trim() || null,
      }),
    };

    const response = await fetch(`${BACKEND_URL}/api/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to submit inquiry");
    }

    const result: SubmitInquiryApiResponse = await response.json();

    const adminEmailStatus = result.emailStatus?.adminNotification;
    const userEmailStatus = result.emailStatus?.userConfirmation;

    console.log('[Inquiry] Submission successful:', {
      inquiryId: result.id,
      emailStatus: {
        adminNotification: adminEmailStatus ?? 'unknown',
        userConfirmation: userEmailStatus ?? 'unknown',
      },
      note: adminEmailStatus === 'processing' ? 'Emails are being sent in the background' : undefined,
    });

    if (adminEmailStatus === 'failed' || userEmailStatus === 'failed') {
      console.warn('[Inquiry] Email delivery failed. Check server logs for SMTP error details (auth, host, port, TLS, or provider response).');
    }
    
    return {
      success: true,
      message: "Inquiry submitted successfully",
      id: result.id,
    };
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    
    return {
      success: false,
      message: errorMessage,
    };
  }
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (basic validation)
 */
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9+\-\s()]{7,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};
