const nodemailer = require('nodemailer');

// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'google',
  auth: {
    user: 'your_email_address',
    pass: 'your_email_password',
  },
});

// Define the email options
const mailOptions = {
  from: 'sender_email_address',
  to: 'recipient_email_address',
  subject: 'Hello from Node.js',
  text: 'This is the body of the email.',
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
