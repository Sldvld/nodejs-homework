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
