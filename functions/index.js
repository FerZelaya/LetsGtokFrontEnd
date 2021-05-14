const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();
require("dotenv").config();

const {SENDER_EMAIL, SENDER_PASSWORD} = process.env;

exports.sendEmailNotification = functions.firestore
    .document("contacts/{docId}")
    .onCreate((snap, ctx) => {
      const data = snap.data();

      const authData = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: SENDER_EMAIL,
          pass: SENDER_PASSWORD,
        },
      });

      authData
          .sendMail({
            from: "info.letsgtok@gmail.com",
            to: `${data.email}`,
            subject: "Hello User",
            text: `Thank you for contacting Lets Gtok. 
            Our team will shortly respond to your
            request.`,
            html: `${data.email}`,
          })
          .then((res) => console.log("Email sent"))
          .catch((error) => console.log(error.message));
    });
