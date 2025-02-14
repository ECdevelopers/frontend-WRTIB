import { assets } from "../assets/assets";
import Form from "../components/form/Form";

const KontakKami = () => {
  return (
    <section className="px-4 py-2 ">
      <h2 className="text-xl text-center mb-6 mt-8 font-bold">
        ------- <span className="linear-grad-text">Kotak Masukan</span> -------
      </h2>
      <div className="card-continer ">
        <div id="formFeedBack" className="card  max-w-[30rem] mx-auto">
          <div className="front feedback-wrapper p-4 bg-white text-black rounded-2xl max-w-[30rem] mx-auto">
            <div className="head flex mb-4">
              <div className="left flex-4 mt-2">
                <p className="font-bold">BERI KAMI MASUKAN</p>
                <p className="text-sm max-w-[80%]">
                  Batu kami dalam memberikan masukan dan saran kedepan.
                </p>
              </div>
              <div className="logo flex-1 ">
                <img src={assets.icons.feedback} alt="" />
              </div>
            </div>
            <Form />
          </div>
          <div className="back bg-white w-full max-w-[30rem] h-[21rem]">
            <div
              className="tenor-gif-embed h-full"
              data-postid="9878940352483067214"
              data-share-method="host"
              data-aspect-ratio="1.23267"
              data-width="100%"
            >
              <a href="https://tenor.com/view/alarm-gif-9878940352483067214">
                Alarm GIF
              </a>
              from <a href="https://tenor.com/search/alarm-gifs">Alarm GIFs</a>
            </div>{" "}
            <script
              type="text/javascript"
              async
              src="https://tenor.com/embed.js"
            ></script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontakKami;
