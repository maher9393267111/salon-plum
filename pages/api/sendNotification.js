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


async function sendEmail({ name, email ,status }) {
  const emailOptions = {
    form: `${name}`,
    to: email,
    subject: `notification message from NouraBeautyCenter to ${name}`,
    html: `<h2>Dear  ${name}
    
    </br>

    <h1> your date status is : ${status}</h1>

    

    
    </h2>`,
  };

  return transporter.sendMail(emailOptions);
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('DATA-,' , req.body)
    const emailRes = await sendEmail(req.body);
    if (emailRes.messageId) {
      return res.status(200).json({ message: `Email sent successfuly` });
    }

    return res.status(400).json({ message: 'Error sending email' });
  }

  return res.status(400).json({ message: `Incorrect method: ${req.method}. Did you mean POST?` });
}