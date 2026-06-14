import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration - allow all in dev, standard headers
app.use(cors());
app.use(express.json());

// Secure API endpoint for sending emails
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not defined in the backend environment.');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'spriyansh2233@gmail.com',
        subject: `New Contact Submission from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #6C63FF; border-bottom: 2px solid #6C63FF; padding-bottom: 10px;">New Portfolio Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #6C63FF; white-space: pre-wrap; font-style: italic;">
              ${message}
            </div>
            <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eeeeee;" />
            <p style="font-size: 11px; color: #888888;">This email was sent securely via Resend from your Portfolio Contact Form.</p>
          </div>
        `
      })
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, data });
    } else {
      console.error('Resend API Error details:', data);
      return res.status(response.status).json({ error: data.message || 'Failed to send email via Resend API.' });
    }
  } catch (error) {
    console.error('Server error during email sending:', error);
    return res.status(500).json({ error: 'Internal server error while sending email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running securely on port ${PORT}`);
});
