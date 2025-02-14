import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FloatingBtn = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="fixed bottom-10 right-5 z-1">
      <motion.ul
        className={`absolute bottom-[100%] right-0 flex flex-col items-end ${
          isActive ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <li className="w-max btn mb-2 px-4 py-2  rounded-lg shadow-lg cursor-pointer">
          <Link to="/about">Tentang RTIB</Link>
        </li>
        <li className="w-max btn mb-2 px-4 py-2  rounded-lg shadow-lg cursor-pointer">
          <Link to="/service">Layanan</Link>
        </li>
        <li className="w-max btn mb-6 px-4 py-2  rounded-lg shadow-lg cursor-pointer">
          <Link to="/contact">Kontak</Link>
        </li>
      </motion.ul>

      <button
        onClick={toggleMenu}
        className="w-16 h-16 btn text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300"
      >
        {isActive ? "x" : "="}
      </button>
    </div>
  );
};

export default FloatingBtn;
