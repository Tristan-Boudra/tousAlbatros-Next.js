"use server";

import EmailLayout from "@/emails/emailLayout";
import { EMAIL_FROM } from "@/src/config";
import { resend } from "@/src/resend";

export const emailContact = async (
  emailTo: string,
  subject: string,
  message: string
) => {
  await resend.emails.send({
    to: emailTo ?? "",
    subject: subject,
    from: EMAIL_FROM,
    react: EmailLayout({
      message: message,
    }),
  });
};
