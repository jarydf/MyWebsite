"use strict";

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

exports.submit = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return;
    }
    let data=req.body.contact;
    console.log(data);
    const mailOptions = {
      from: data.email,
      replyTo: data.email,
      to: gmailEmail,
      subject: `${data.email} emailed you from your site`,
      text: data.message,
      html: `<p>${data.name} said ${data.message}`
    };
    mailTransport.sendMail(mailOptions);

    res.status(200).send({ isEmailSend: true });
    
  });
});
