import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
 
  //process.env.MAIL_HOST,
  //port: 25,
  port: 465,
  host: 'smtp.gmail.com',
  secure: true, // use SSL
  auth: {
    
    

        // user: 'majdgome@gmail.com',
        // pass:'esnwtqaxvisapsaf'

        
		user:'cadacademywebsite@gmail.com',
		
    pass:'ufjfumzgyzfbtbkr'

  },
});


async function sendEmail({ name, email , subject , message ,phone }) {
  const emailOptions = {
    form: `${name}`,
    to: `gomemahero@gmail.com`,
    subject: `Contact Message from ${email}`,
    html: `<h2>Email sent from a  ${name}
    
    </br>

    <h1> Subject: ${subject}</h1>

    <h1>Message :${message}</h1>

    <p>my Phone number : ${phone} </p>

    
    </h2>`,
  };

  return transporter.sendMail(emailOptions);
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
   // console.log('DATA-,' , req.body)
    const emailRes = await sendEmail(req.body);
    if (emailRes.messageId) {
      return res.status(200).json({ message: `Email sent successfuly` });
    }

    return res.status(400).json({ message: 'Error sending email' });
  }

  return res.status(400).json({ message: `Incorrect method: ${req.method}. Did you mean POST?` });
}