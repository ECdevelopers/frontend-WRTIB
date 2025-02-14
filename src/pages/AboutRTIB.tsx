import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutRTIB = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <motion.section
      className="px-5 py-6 text-black"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full px-6 pt-12 py-8 bg-white rounded-md max-w-[30rem] mx-auto h-[40rem] relative shadow-lg">
        <Link to="/" className="absolute top-1.5 right-5 text-4xl">
          <BiLeftArrowAlt />
        </Link>
        <div className="overflow-scroll h-full border-b border-t">
          <h2 className="text-xl font-bold mt-4 mb-4">TENTANG RTIB?</h2>
          <div className="head">
            <div className="logo w-[5rem]">
              <img src={assets.icons.logoDark} alt="Logo RTIB" />
            </div>
            <motion.div
              className="describe text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="mb-4">
                RTIB adalah tim pembelajaran IT yang tidak formal. Kami
                bertujuan untuk eksplorasi dan pembelajaran bersama tanpa
                struktur organisasi yang kaku.
              </p>
              <p className="mb-6">
                Kami bukan organisasi yang memberikan gaji, tetapi jika kamu
                menunjukkan kualitasmu, ada peluang untuk kerja sama lebih
                lanjut.
              </p>
              <h3 className="text-base font-bold mb-3">Cara Kerja RTIB</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>Setiap bulan anggota mengirimkan proyek.</li>
                <li>Proyek yang dikirim akan dibahas bersama.</li>
                <li>Bisa eksplorasi proyek anggota lain di repository RTIB.</li>
                <li>Menjaga kamu tetap aktif dalam eksplorasi teknologi.</li>
                <li>Membantu meningkatkan nilai proyekmu.</li>
              </ul>
              <h3 className="text-base font-bold mt-4 mb-3">
                Apa yang Kamu Dapatkan?
              </h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>Role baru di server Republic Of TIB.</li>
                <li>Akses ke repository RTIB.</li>
                <li>Ikut sesi evaluasi proyek.</li>
                <li>Mendapat wawasan baru dari tim lain.</li>
                <li>Pembahasan tugas coding jika diperlukan.</li>
              </ul>
              <p className="mt-4 font-bold">
                Note: Jika kamu menunjukkan nilai melalui proyek yang kamu
                kirim, kamu bisa diundang untuk kerja sama lebih besar.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  ) : null;
};

export default AboutRTIB;
