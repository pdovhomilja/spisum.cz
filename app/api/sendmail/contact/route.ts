import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    //GET DATA FROM REQUEST BODY
    const res = await request.json();

    console.log(res, "res");

    let nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      port: 465,
      host: process.env.EMAIL_HOST,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true,
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error: any, success: any) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    const mailData = {
      from: res.email,
      to: "pavel@dovhomilja.cz",
      subject: `Message From ${res.firstName + " " + res.lastName}   - ${
        res.phone
      }`,
      text:
        "Jméno: " +
        res.firstName +
        " " +
        "\n\n" +
        "Příjmení: " +
        res.lastName +
        " " +
        "\n\n" +
        "Email: " +
        res.email +
        " " +
        "\n\n" +
        "Telefon: " +
        res.phone +
        " " +
        "\n\n" +
        "Zpráva: " +
        res.message,
      // html: `<div>${res.message}</div><p>Sent from: ${res.email}</p><br />`,
    };

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err: any, info: any) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(info);
        }
      });
    });

    /*  //Create a new record in CRM api endpoint
    const endpoint = `${process.env.NEXTCRM_ENDPOINT}/api/crm/leads/createLeadFromWeb`;
    const token = process.env.NEXTCRM_TOKEN;

    const headers = {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    };

    const responseData = {
      firstName: res.firstName,
      lastName: res.lastName,
      account: res.account,
      job: res.job,
      email: res.email,
      phone: res.phone,
    };

    console.log(endpoint, "endpoint");
    console.log(token, "token");

    try {
      const newLead = await fetch(endpoint, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(responseData),
      });

      console.log(newLead, "newLead");
      return NextResponse.json(
        { success: true, newLead: newLead },
        { status: 200 }
      );
    } catch (error: any) {
      console.log(error, "error");
      return NextResponse.json({ error: error.message }, { status: 500 });
    } */
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
