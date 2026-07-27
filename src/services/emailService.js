import emailjs from "@emailjs/browser";

// Create a free account at https://www.emailjs.com, then add these three
// values to a .env file in the project root (see .env.example):
//   VITE_EMAILJS_SERVICE_ID
//   VITE_EMAILJS_TEMPLATE_ID
//   VITE_EMAILJS_PUBLIC_KEY
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendContactMessage({ name, email, phone, message }) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS is not configured yet. Add your Service ID, Template ID, and Public Key to a .env file."
    );
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: name,
      from_email: email,
      phone,
      message,
    },
    { publicKey: PUBLIC_KEY }
  );
}
