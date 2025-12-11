import React from 'react';
import Header from '../components/Header';
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className='absolute left-0 top-0 w-full h-full'>
        <Header/>
        <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-green-400 to-teal-400 text-white top-4 py-16 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Tentang Balai Anggun Ceria
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Memberikan Produk Berkualitas dan Pelayanan Terbaik untuk Semua Pelanggan.
          </motion.p>
        </div>
      </motion.section>

      {/* Deskripsi */}
      <motion.section
        className="max-w-5xl mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-green-700">Siapa Kami?</h2>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Balai Anggun Ceria (BAC)</strong> adalah sebuah komunitas kreatif yang berfokus pada pengolahan barang-barang daur ulang menjadi produk bernilai guna dan bernilai jual.
          Komunitas ini berfokus pada pemanfaatan sampah atau limbah yang masih dapat didaur ulang menjadi kerajinan bernilai guna. Melalui pendekatan tersebut, BAC ingin berkontribusi dalam 
          mengurangi volume sampah, menciptakan lingkungan yang lebih bersih, serta memberikan edukasi kepada masyarakat tentang pentingnya pengelolaan limbah. Selain itu, kegiatan yang dijalankan oleh BAC juga bertujuan memberikan tambahan penghasilan bagi anggota, sehingga dapat meningkatkan perekonomian keluarga. Dengan berkembangnya kegiatan usaha, komunitas ini juga mampu membuka peluang kerja bagi masyarakat sekitar yang memiliki minat dalam bidang kerajinan.
        </p>
        <p className="text-lg leading-relaxed">
          Kami percaya bahwa setiap produk memiliki cerita dan bisa membawa kebahagiaan
          bagi siapa pun yang menggunakannya. Karena itu, kami selalu berusaha menjaga
          kualitas, tren, serta kepuasan pelanggan dalam setiap layanan kami.
        </p>
      </motion.section>

      {/* Visi & Misi */}
      <motion.section
        className="bg-white py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-3">Visi Kami</h3>
            <p className="text-lg leading-relaxed">
            BAC berkomitmen menjadi pelopor produk kreatif yang memiliki nilai ekonomis tinggi dengan memanfaatkan bahan-bahan daur ulang. 
            Komunitas ini juga berambisi menciptakan ekosistem usaha kreatif yang berkelanjutan, ramah lingkungan, 
            serta memberikan dampak sosial yang positif bagi masyarakat. 
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-3">Misi Kami</h3>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
              <li>Memberikan produk berkualitas dengan harga terjangkau.</li>
              <li>mengubah limbah menjadi produk inovatif dan berkualitas tinggi.</li>
              <li>Mengedukasi masyarakat tentang pentingnya daur ulang dan gaya hidup ramah lingkungan.</li>
              <li>Menghadirkan pengalaman belanja yang mudah dan menyenangkan.</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Tim */}
      <motion.section
  className="max-w-5xl mx-auto px-6 py-12 text-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <h3 className="text-3xl font-semibold mb-6 text-green-700">Tim Kami</h3>
  <div className="flex flex-col items-center space-y-6">
  {/* Gambar pertama */}
  <div className="flex flex-col items-center text-center">
    <motion.img
      src="/images/team/tim_bac.png"  
      alt="Tim Bale Anggun Ceria"
      className="w-full max-w-md h-64 object-cover rounded-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
    <p className="mt-1 text-gray-700 font-medium">
      Tim Balai Anggun Ceria Juara Tingkat Provinsi
    </p>
  </div>

  {/* Gambar kedua */}
  <div className="flex flex-col items-center text-center">
    <motion.img
      src="/images/team/bac-event.jpeg"  
      alt="Event Bale Anggun Ceria"
      className="w-full max-w-md h-64 object-cover rounded-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
    <p className="mt-1 text-gray-700 font-medium">
      Kegiatan Event Balai Anggun Ceria di Acara Komunitas
    </p>
  </div>
</div>

</motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-green-600 text-white text-center py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm">
          © {new Date().getFullYear()} Copyright @ 2025 All Rights Reserved
        </p>
      </motion.footer>
    </div>
    </div>
  );
};

export default AboutUs;