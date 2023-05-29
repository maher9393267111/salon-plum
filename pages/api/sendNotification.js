import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  //process.env.MAIL_HOST,
  //port: 25,
  port: 465,
  host: "smtp.gmail.com",
  secure: true, // use SSL
  auth: {
    // user: 'majdgome@gmail.com',
    // pass:'esnwtqaxvisapsaf'

    // user:'cadacademywebsite@gmail.com',

    // pass:'ufjfumzgyzfbtbkr'




    user: "nourabeautycenter96@gmail.com",

    pass: "nsbnnzbnawgcengf",
  },
});

async function sendEmail({ name, email, status ,day ,time }) {

    
  const emailOptions = {
    form: `${name ? name :'name'}`,
    to: email,
    subject: `notification message from nourabeautycenter to : ${name ? name :'name'}`,
    html: `<h2>Dear  ${name ? name :'name'}
    
    </br>

    <h1> your date status is : ${status ? status :'status'}</h1>
  
    <h1>  date : ${day ? day :'day'}</h1>

    
    <h1> time : ${time ? time :'time'}</h1>

    

    

    
    </h2>`,
  };

  return transporter.sendMail(emailOptions);
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("DATA-❌❎☑✅❌❎☑✅,", req.body);
    const emailRes = await sendEmail(req.body);
    if (emailRes.messageId) {
      return res.status(200).json({ message: `Email sent successfuly` });
    } else {
      // console log error
      return res.status(400).json({ message: "Error sending email" });
    }
  }

  return res
    .status(400)
    .json({ message: `Incorrect method: ${req.method}. Did you mean POST?` });
}
