const { Resend } = require('resend');

const { RESEND_API_KEY } = process.env;
const resend = new Resend('re_315YBrmD_LTkDwTfogwZzshDWn3Hx5xpZ');

/**
 * sendEmail
 * @param {string} to        – recipient email
 * @param {string} subject   – email subject
 * @param {string} html      – HTML body of the email
 * @returns {Promise<{success: boolean, message: string}>}
 */
async function sendEmail(to, subject, html) {
  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev', // your verified domain
      to,
      subject,
      html,
    });

    console.log('Email sent via Resend:', response);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email via Resend:', error);
    return { success: false, message: error.message };
  }
}

module.exports = { sendEmail };
