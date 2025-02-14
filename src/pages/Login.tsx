import { useEffect, useState } from "react";
import BtnLoginDiscord from "../components/btn/BtnLoginDiscord";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  return isVisible ? (
    <section className="flex w-full h-full pt-20 justify-center items-center ">
      <div className="max-w-[30rem] px-12 py-10 rounded-xl bg-white ">
        <p className="text-gray-800 text-sm mb-3">Login Dengan Discord</p>
        <BtnLoginDiscord condition={true} />
      </div>
      <div className="p-4 absolute top-3 left-4 text-2xl">
        <Link to="/">
          <FaArrowLeft />
        </Link>
      </div>
    </section>
  ) : null;
};
