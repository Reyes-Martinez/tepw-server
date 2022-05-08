const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL, // generated ethereal user
    pass: process.env.EMAILPASSWORD, // generte ethereal password
  },
});
const sendEmail = async (email, message, subject) => {
  await transporter.sendMail({
    from: `${subject} ${process.env.EMAIL} `, // sender address
    to: email, // list of receivers
    subject: subject, // subjectSubject line
    text: message, // plain text body
  });
};
module.exports = sendEmail;
