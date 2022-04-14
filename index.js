const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

const app = express();
const port = 5000;

// Call Middleware
app.use(express.json());
dotenv.config();

// 1. Goto your sender  mail
// 2. Click Profile pic and manage account
// 3. then click security
// 4. Turn on Less secure app access

app.post("/sent", async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.USER_PASS,
    },
  });

  const mailOptions = {
    from: process.env.USER_MAIL,
    to: "talhajobair08@gmail.com",
    subject: "Test ✔", // Subject line

    //   N:B: You can use text or html for message body. so yo have to choose text or html
    text: "Thank Your for Register. We will contact you soon.", // plain text body
    html: "<b>Hey What About You!</b>", // html body
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json(info);
    }
  });
});

app.get("/", async (req, res) => {
  res.send("Node Mail");
});

app.listen(port, () => {
  console.log("You Looking on Port" + port);
});
