import { FaWhatsapp } from "react-icons/fa";
import Header from '../components/Header';

const ContactUs = () => {
  // Nomor WhatsApp penjual (tanpa tanda + atau spasi)
  const phoneNumber = "6281280248037";
  const message = "Halo, saya tertarik dengan produk di salah satu penjual anda!";

  // Format URL WhatsApp API
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Konten */}
      <div className="flex flex-col flex-1 items-center justify-center text-center space-y-6 bg-white">
        <FaWhatsapp className="text-green-500 text-7xl" />
        <h2 className="text-2xl font-semibold">Hubungi Kami di WhatsApp</h2>
        <p className="text-gray-600 max-w-md">
          Klik tombol di bawah untuk langsung menghubungi admin melalui WhatsApp.
        </p>
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl shadow-md transition-all duration-300"
        >
          Chat Sekarang
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
