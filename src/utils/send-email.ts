import { contactFormData } from "@/app/_actions/action";
import ContactEmail from "@/components/email-template";
import { Resend } from "resend";
// import nodemailer from "nodemailer";

// export const sendEmailToAdmin = async (contactFormData: contactFormData) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: `"Client : ${contactFormData?.name}" <${contactFormData?.email}>`,
//       to: "muktadirhossainrabbi@gmail.com",
//       subject: `From Portfolio: ${contactFormData?.subject}`,
//       html: `
// <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
//     <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05); overflow: hidden;">
//     <div style="background-color: #111827; color: white; padding: 20px;">
//         <h2 style="margin: 0;">📩 New Message from Portfolio</h2>
//     </div>
//     <div style="padding: 20px; color: #333;">
//         <p><strong>Name:</strong> ${contactFormData?.name}</p>
//         <p><strong>Email:</strong> ${contactFormData?.email}</p>
//         <p><strong>Subject:</strong> ${contactFormData?.subject}</p>
//         <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
//         <p style="white-space: pre-line;"><strong>Message:</strong><br>${contactFormData?.message}</p>
//     </div>
//     <div style="background-color: #f3f4f6; text-align: center; padding: 12px; font-size: 12px; color: #666;">
//         This message was sent from your portfolio contact form.
//     </div>
//     </div>
// </div>
//             `,
//     };

//     await transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error("Error sending email:", error);
//       } else {
//         console.log("Email sent:", info.response);
//       }
//     });

//     return {
//       success: true,
//       message: "Email send successful!",
//     };
//   } catch (error) {
//     console.log("Failed to send email! ");
//     return null;
//   }
// };

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmailToAdmin = async (contactFormData: contactFormData) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Muktadir Portfolio <onboarding@resend.dev>",
      to: "muktadirhossainrabbi@gmail.com",
      subject: "New Contact Message",
      react: ContactEmail({
        name: contactFormData?.name,
        email: contactFormData?.email,
        subject: contactFormData?.subject,
        message: contactFormData?.message,
      }),
    });

    if (error) {
      console.log("Send Failed !");
      return null;
    }

    return {
      success: true,
      message: "Email send successful!",
    };
  } catch (error) {
    console.log("Failed to send email! ");
    return null;
  }
};
