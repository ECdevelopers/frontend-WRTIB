import Tilt from "react-parallax-tilt";
import { assets } from "../assets/assets";

const FokusKami = () => {
  return (
    <section className="px-3 py-2">
      <h2 className="text-xl text-center mb-6 mt-8 font-bold">
        ------- <span className="linear-grad-text">Fokus Kami</span> -------
      </h2>
      <div className="card-wrapper flex flex-wrap gap-4 justify-center">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor="#ffffff"
          glarePosition="bottom"
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          className="rounded-xl max-w-[max-content] "
        >
          <div className="cardAtvy flex-1 basis-1/2 p-5 rounded-xl backdrop-blur-sm bg-[rgba(255,255,255,.1)] max-w-[13rem]">
            <div className="logo mx-auto mb-2 w-[50%]">
              <img src={assets.icons.organization} alt="" />
            </div>
            <div className="describ">
              <p className="text-sm text-center">
                Wadah penampungan kreatifitas Mahasiswa IT
              </p>
            </div>
          </div>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor="#ffffff"
          glarePosition="bottom"
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          className="rounded-xl max-w-[max-content] "
        >
          <div className="cardAtvy flex-1 basis-1/2 p-5 rounded-xl backdrop-blur-sm bg-[rgba(255,255,255,.1)] max-w-[13rem]">
            <div className="logo mx-auto mb-2 w-[50%]">
              <img src={assets.icons.feed} alt="" />
            </div>
            <div className="describ">
              <p className="text-sm text-center">
                Feedback atas update server discord
              </p>
            </div>
          </div>
        </Tilt>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor="#ffffff"
          glarePosition="bottom"
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          className="rounded-xl max-w-[max-content] "
        >
          <div className="cardAtvy flex-1 basis-1/2 p-5 rounded-xl backdrop-blur-sm bg-[rgba(255,255,255,.1)] max-w-[13rem]">
            <div className="logo mx-auto mb-2 w-[50%]">
              <img src={assets.icons.collaboratif} alt="" />
            </div>
            <div className="describ">
              <p className="text-sm text-center">Tempat Kolaborasi Projek</p>
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default FokusKami;
