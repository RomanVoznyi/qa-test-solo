const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
require('dotenv').config();

const {
  EMAIL,
  EMAIL_PASSWORD,
  EMAIL_HOST,
  EMAIL_PORT,
  LOCAL_PORT,
} = process.env;

class EmailServise {
  constructor(name, email, token) {
    this.link = LOCAL_PORT;
    this.name = name;
    this.email = email;
    this.token = token;
  }

  createEmail = (name, link, token) => {
    const mailGenerator = new Mailgen({
      theme: 'cerberus',
      product: {
        name: 'QA Tests App',
        link,
      },
    });

    const email = {
      body: {
        name,
        intro:
          "Welcome to QA Tests App! We're very excited to have you on board.",
        action: {
          instructions: 'To get started with QA Tests App, please click here:',
          button: {
            color: '#22BC66',
            text: 'Confirm your account',
            link: `${link}/api/users/verify/${token}`,
          },
        },
        outro:
          "Need help, or have questions? Just reply to this email, we'd love to help.",
      },
    };

    return mailGenerator.generate(email);
  };

  sendMail = async () => {
    const config = {
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: true,
      auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD,
      },
    };

    const transporter = nodemailer.createTransport(config);

    const emailOptions = {
      from: EMAIL,
      to: this.email,
      subject: 'QA Tests App',
      html: this.createEmail(this.name, this.link, this.token),
    };

    await transporter.sendMail(emailOptions);
  };
}

module.exports = EmailServise;
