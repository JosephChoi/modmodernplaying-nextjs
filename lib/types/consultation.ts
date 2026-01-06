export interface ConsultationFormData {
  name: string;
  phone: string;
  email: string;
  program: string;
  message?: string;
  privacyAgreed: boolean;
}

export interface ConsultationResponse {
  success: boolean;
  message?: string;
  error?: string;
}

