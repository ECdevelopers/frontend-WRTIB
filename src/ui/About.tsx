import Tilt from "react-parallax-tilt";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section className="px-5 py-2">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor="#ffffff"
        glarePosition="bottom"
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        className="rounded-2xl max-w-[max-content] mx-auto"
      >
        <div className="card-about p-4 flex rounded-2xl bg-[rgba(255,255,255,.1)] backdrop-blur-sm border  justify-center items-center max-w-[35rem] mx-auto">
          <div className="logo flex-1 pr-3">
            <img src={assets.icons.logo} alt="" className="w-full h-auto" />
          </div>
          <div className="describ flex-3 border-l-2 border-white pl-3">
            <h2 className="text-[17px]/8 linear-grad-text  font-bold textHvr ">
              Tentang W-RTIB?
            </h2>
            <p className="text-sm/5 text-gray-300">
              Website-RTIB merupakan Website garapan admin discord server
              Republic Of TIB. Dibuat pada Januari 2025 sebagai langkah awal
              pembangunan TIM RTIB dan wadah penampung ide serta minat
              teknologi.
            </p>
          </div>
        </div>
      </Tilt>
    </section>
  );
};

export default About;
