import axios from "axios";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    //GET DATA FROM REQUEST BODY
    const res = await request.json();

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
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Demo request from www.spisum.cz ${
        res.firstName + " " + res.lastName
      }   - ${res.phone}`,
      text:
        "Jméno:" +
        res.firstName +
        " " +
        "\n\n" +
        "Příjmení:" +
        res.lastName +
        " " +
        "\n\n" +
        "Společnost:" +
        res.account +
        " " +
        "\n\n" +
        "Pozice:" +
        res.job +
        " " +
        "\n\n" +
        "Email:" +
        res.email +
        " " +
        "\n\n" +
        "Telefon:" +
        res.phone +
        " " +
        "\n\n" +
        "Zpráva:" +
        "Chce demo",
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

    //Create a new record in CRM api endpoint
    const endpoint = `${process.env.NEXTCRM_ENDPOINT}/api/crm/leads/create-lead-from-web`;
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
      lead_source: "web",
    };

    /*     console.log(endpoint, "endpoint");
    console.log(token, "token"); */

    try {
      const newLead = await axios.post(endpoint, responseData, {
        headers: headers,
      });

      console.log(newLead.status, "newLead");
      return NextResponse.json(
        { success: true, newLead: newLead.status },
        { status: 200 }
      );
    } catch (error: any) {
      console.log(error, "error");
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
