"use server";

import { sendEmailToAdmin } from "@/utils/send-email";

export interface contactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (formData: contactFormData) => {
  try {
    console.log("Server Action Hitted !", formData);
    const res = await sendEmailToAdmin(formData);

    console.log(res);
    return {
      success: true,
    };
  } catch (error) {
    console.error("Error");

    return {
      success: false,
    };
  }
};
