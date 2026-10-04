export interface SendEmailPayload {
  name: string;
  email: string;
  message: string;
}

export interface EmailServiceResult {
  ok: boolean;
  error?: string;
}

export interface EmailService {
  send(payload: SendEmailPayload): Promise<EmailServiceResult>;
}
