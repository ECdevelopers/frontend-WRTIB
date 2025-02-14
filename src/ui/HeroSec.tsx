import { assets } from "../assets/assets";

const HeroSec = () => {
  return (
    <section className=" min-h-[40rem] flex justify-center items-center flex-col">
      <div className="text-white logo w-48 mx-auto">
        <img src={assets.icons.logo} alt="" />
      </div>
      <div className="describ">
        <p className="text-center max-w-[80%] mx-auto text-2xl linear-grad-text animete-grad font-bold">
          Selamat Datang Di Website Dari Republic Of TIB
        </p>
        <p className="text-center text-base text-gray-300 mx-auto max-w-[70%]">
          Buat Harimu Lebih Produktif Dengan Bergabung Kami.
        </p>
      </div>
    </section>
  );
};

export default HeroSec;
