"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
const nodemailer = require("nodemailer");

// const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
 
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'lorna.mclaughlin@ethereal.email',
        pass: 'hF2dn8cBNem2TFpPSw'
    }
});




  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    console.log(message,senderEmail);

    const info = await transporter.sendMail({
      from: `Response <${senderEmail}>`, // sender address
      to: "harshul.mca17.du@gmail.com", // list of receivers
      subject: "Contact Form", // Subject line
      text: message, // plain text body
      // html: "<b>Hello world?</b>", // html body
    });
    console.log(info)

    // let info = await transporter.sendEmail({
    //   from: "Contact Form <onboarding@resend.dev>",
    //   to: "bytegrad@gmail.com",
    //   subject: "Message from contact form",
    //   reply_to: senderEmail,
    //   react: React.createElement(ContactFormEmail, {
    //     me: message,
    //     senderEmail: senderEmail,
    //   }),
    // }});

    // data = await resend.emails.send({
    //   from: "Contact Form <onboarding@resend.dev>",
    //   to: "bytegrad@gmail.com",
    //   subject: "Message from contact form",
    //   reply_to: senderEmail,
    //   react: React.createElement(ContactFormEmail, {
    //     message: message,
    //     senderEmail: senderEmail,
    //   }),
    // });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
