import { useEffect, useState } from "react";
import { MdElectricalServices } from "react-icons/md";
import { Link } from "react-router-dom";

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  return isVisible ? (
    <div>
      <section className="px-3 py-2">
        <h2 className="text-xl text-center mb-6 mt-8 font-bold">
          ------- <span className="linear-grad-text">Layanan</span> -------
        </h2>
        <div className="py-20 flex flex-col justify-center">
          <div className="text-9xl mx-auto">
            <MdElectricalServices className="text-center text-gray-400" />
          </div>
          <div className="describ">
            <p className="text-center text-gray-500">Belum Ada Layanan Nih!</p>
          </div>
          <Link to="/" className="btn w-max mx-auto mt-4 ">
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </div>
  ) : null;
};

export default Service;
