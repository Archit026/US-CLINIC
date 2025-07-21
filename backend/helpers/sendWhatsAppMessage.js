require('dotenv').config();
const axios = require('axios');

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;

async function sendWhatsAppMessage(to, appointmentDetails) {
  try {
    const { doctorName, date, time, reason } = appointmentDetails;
    
    const message = `
🏥 *US-CLINIC Appointment Confirmation*

Hello! Your appointment has been scheduled:

👨‍⚕️ Doctor: ${doctorName}
📅 Date: ${date}
⏰ Time: ${time}
📝 Reason: ${reason || 'Not specified'}

Please arrive 10 minutes before your scheduled time.
To reschedule or cancel, please contact us through our app.

Thank you for choosing US-CLINIC!
    `.trim();

    const response = await axios({
      method: 'POST',
      url: `https://graph.facebook.com/v17.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
      headers: {
        'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
        'Content-Type': 'application/json',
      },
      data: {
        messaging_product: 'whatsapp',
        to: to,
        type: 'text',
        text: {
          body: message
        }
      }
    });

    console.log('WhatsApp message sent successfully:', response.data);
    return { success: true, message: 'WhatsApp message sent successfully' };
  } catch (error) {
    console.error('Error sending WhatsApp message:', error.response?.data || error);
    return { success: false, message: 'Failed to send WhatsApp message' };
  }
}

module.exports = sendWhatsAppMessage;
