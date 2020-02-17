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

    const mailOptions = {
      from: req.body.contact.email,
      replyTo: req.body.contact.email,
      to: gmailEmail,
      subject: `from my website ${req.body.contact.email}`,
      text: req.body.contact.message,
      html: `<p>${req.body.contact.message}`
    };
    mailTransport.sendMail(mailOptions);

    res.status(200).send({ isEmailSend: true });
    
  });
});

const rp = require("request-promise");

exports.checkRecaptcha = functions.https.onRequest((req, res) => {
  const response = req.query.response;
  console.log("recaptcha response", response);
  rp({
    uri: "https://recaptcha.google.com/recaptcha/api/siteverify",
    method: "POST",
    formData: {
      secret: "6Lc6fdkUAAAAAL0Qad6xzSxOSg4T0VGtASLSkqdj",
      response: response
    },
    json: true
  })
    .then(result => {
      console.log("recaptcha result", result);
      // eslint-disable-next-line promise/always-return
      if (result.success) {
        res.send("You're good to go, human.");
      } else {
        res.send("Recaptcha verification failed. Are you a robot?");
      }
    })
    .catch(reason => {
      console.log("Recaptcha request failure", reason);
      res.send("Recaptcha request failed.");
    });
});
