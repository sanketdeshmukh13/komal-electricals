import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const phoneNumber = "91XXXXXXXXXX";

  const message = encodeURIComponent(
    "Hello Komal Electricals, I would like to enquire about your electrical panels.",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with Komal Electricals on WhatsApp"
    >
      <MessageCircle size={27} />
      <span>Chat with us</span>
    </a>
  );
}

export default WhatsAppButton;
