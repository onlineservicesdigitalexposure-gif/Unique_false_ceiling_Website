import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

export default function FloatingContactButtons() {
  const whatsappUrl = "https://wa.me/919051512128?text=Hello%20Unique%20False%20Ceiling%2C%20I%20want%20a%20quotation.";
  const phoneUrl = "tel:+919051512128";

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Contact us on WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-40"></div>
        <FaWhatsapp className="text-4xl relative z-10" />
      </a>

      {/* Mobile Fixed Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[100] bg-white flex shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <a 
          href={phoneUrl}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-charcoal text-white font-bold text-lg active:bg-gray-800 transition-colors"
        >
          <FiPhoneCall className="text-xl" />
          Call Now
        </a>
        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-bold text-lg active:bg-[#20b858] transition-colors"
        >
          <FaWhatsapp className="text-2xl" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
