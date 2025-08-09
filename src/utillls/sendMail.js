import emailjs from "emailjs-com";
import toast from "react-hot-toast";
export function sendEmail({ name, email, phone, message }) {
  emailjs
    .send(
      `${import.meta.env.VITE_SERVICE_ID}`, // Service ID
      `${import.meta.env.VITE_TEMPLATE_ID}`, // Template ID
      {
        name: name,
        email: email,
        phone: phone,
        message: message,
      },
      `${import.meta.env.VITE_PUBLIC_KEY}` // Public key
    )
    .then((result) => {
      toast.success("📧 Email sent successfully!");
    })
    .catch((error) => {
      toast.error("⚠️ Failed to send email. Please try again!");
    });
}
