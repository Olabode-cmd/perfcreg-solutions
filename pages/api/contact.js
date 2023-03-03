import nodemailer from 'nodemailer'
export default async function handler(req, res) {
    // Retrieve the form data from the request body
    const { name, email, message, phone } = req.body;
  
    try {
      // Create a nodemailer transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
  
      // Set up the email message
      let info = await transporter.sendMail({
        from: `"${name}" <${email}> "${phone}"`,
        to: process.env.EMAIL_TO,
        subject: "New Contact Message",
        text: message,
      });
  
      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false });
    }
  }
  