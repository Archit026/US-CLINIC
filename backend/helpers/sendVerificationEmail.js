require('dotenv').config();
const { Resend } = require('resend');

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY in environment variables');
}

const resend = new Resend(RESEND_API_KEY);

async function sendVerificationEmail(email, username, code) {
  const html = `
    <div>
      <h2>Hello ${username},</h2>
      <p>Your verification code for US-CLINIC is:</p>
      <h3>${code}</h3>
      <p>This code will expire in 10 minutes.</p>
    </div>
  `;
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "US-CLINIC Email Verification Code",
      html,
    });
    return { success: true, message: "Verification email sent" };
  } catch (err) {
    return { success: false, message: "Failed to send verification email" };
  }
}

module.exports = sendVerificationEmail;
