"use server";

import { InputType, ReturnType } from "./types";

import { createSafeAction } from "@/lib/create-safe-action";

import resendHelper from "@/lib/resend";
import axios from "axios";
import { SendFromDemoForm } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const resend = await resendHelper();

  const { email, name, surname, phone, company, message } = data;

  if (!email) {
    return {
      error: "Email and message are required.",
    };
  }

  const result = await resend.contacts.create({
    email: email,
    firstName: name,
    lastName: surname,
    unsubscribed: false,
    audienceId: process.env.RESEND_AUDIENCE_ID!,
  });
  //console.log(result, "result from Resend.com - create contact");

  //wait 1 second
  await new Promise((resolve) => setTimeout(resolve, 501));

  //console.log(email, phone, name, message, 'From send-contact-form action')
  try {
    await axios.post(
      `${process.env.NEXTCRM_BASE_URL}/api/crm/contacts/create-from-remote`,

      {
        email: email,
        name: name,
        surname: surname,
        phone: phone,
        company: company,
        message: message,
        tag: "demo-form-endorphin-web",
      },
      {
        headers: {
          "Content-Type": "application/json", // Example header
          NEXTCRM_TOKEN: `${process.env.NEXTCRM_TOKEN}`, // Example for authorization
        },
      }
    );
    //send via Resend.com
    resend.emails.send({
      from: "info@spisum.cz",
      to: email,
      subject: "Děkujeme zě jste se na nás obrátili!",
      html: "<p>Děkujeme za kontakt, obratem se Vám ozveme.</p>",
    });

    //wait 1 second
    await new Promise((resolve) => setTimeout(resolve, 501));

    resend.emails.send({
      from: "info@spisum.cz",
      to: "info@spisum.cz",
      subject: "Nová žádost o Demo",
      html: `<p>Email: ${email}</p><p>Jméno: ${name}</p><p>Příjmení: ${surname}</p><p>Telefon: ${phone}</p><p>Firma: ${company}</p><p>Zpráva: ${message}</p>`,
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to send mail to all users.",
    };
  }

  return { data: { email, name, message, surname, phone, company } };
};

export const sendFromDemoForm = createSafeAction(SendFromDemoForm, handler);
