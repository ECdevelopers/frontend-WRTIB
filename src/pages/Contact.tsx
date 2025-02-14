import { TbBrandGmail } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);
  return isVisible ? (
    <div>
      <section className="px-3 py-2 ">
        <div className="contain w-full h-[40rem] justify-center flex flex-col items-center max-w-[30rem]  mx-auto">
          <button className="btn text-black  bg-white mb-4  ">
            <TbBrandGmail className="text-xl" />
            Gmail
          </button>
          <button className="btn text-black bg-green-400 mb-10">
            <FaWhatsapp className="text-xl" />
            What App
          </button>
          <Link to="/" className="btn">
            Kembali Ke Beranda
          </Link>
        </div>
      </section>
    </div>
  ) : null;
};

export default Contact;
