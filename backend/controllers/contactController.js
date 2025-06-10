import nodemailer from "nodemailer";
import { Contact } from "../models/contactModel.js";

export const sendMessage = async (req, res) => {
       const { name, email, message, phone, company, service } = req.body;
       try {
              // Save to MongoDB
              const contact = await Contact.create({ name, email, message, phone, company: company, service });
              await contact.save();

              // Send email to the user
              const transporter = nodemailer.createTransport({
                     service: "gmail",
                     auth: {
                            user: process.env.SMTP_USER,
                            pass: process.env.SMTP_PASS,
                     },
              });

              const mailOptions = {
                     from: process.env.SMTP_USER,
                     to: email,
                     subject: "Thanks for contacting us!",
                     text: `Hi ${name},\n\nWe received your message:\n"${message}"\n\nWe'll get back to you shortly.\n\nThanks,\nTeam`,
              };

              await transporter.sendMail(mailOptions);

              res.status(200).json({ message: "Message sent and saved successfully" });
       } catch (error) {
              console.error("Error in sendMessage:", error.message);
              res.status(500).json({ error: "Failed to send message" });
       }
};

export const getAllMessage = async (req, res) => {
       try {
              const messages = await Contact.find()
              res.json({ success: true, messages })
       } catch (error) {
              res.json({ message: error.message })
       }
}
export const replyToMessage = async (req, res) => {
       const { to, subject, message } = req.body;

       if (!to || !subject || !message) {
              return res.status(400).json({ success: false, message: 'Missing fields' });
       }

       try {
              const transporter = nodemailer.createTransport({
                     service: 'gmail',
                     auth: {
                            user: process.env.SMTP_USER,
                            pass: process.env.SMTP_PASS,
                     },
              });

              const mailOptions = {
                     from: process.env.MAIL_USER,
                     to,
                     subject,
                     html: `<p>${message}</p>`,
              };

              await transporter.sendMail(mailOptions);

              res.status(200).json({ success: true, message: 'Reply sent successfully' });
       } catch (err) {
              console.error('Email error:', err);
              res.status(500).json({ success: false, message: 'Failed to send email' });
       }
};
