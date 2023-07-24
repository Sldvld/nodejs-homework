const nodemailer = require("nodemailer");
const { META_PASSWORD } = process.env;

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "sldvld@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(config);

const sendMail = async (data) => {
  await transport.sendMail({ ...data, from: "sldvld@meta.ua" });
  return true;
};

module.exports = sendMail;

// const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

// const { SENDGRID_API_KEY } = process.env;
// sgMail.setApiKey(SENDGRID_API_KEY);
// const sendEmail = async (data) => {
//   const email = { ...data, from: "sldvld@meta.ua" };
//   await sgMail.send(email);
//   return true;
// };
// module.exports = sendEmail;
