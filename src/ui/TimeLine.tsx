import BtnJoin from "../components/btn/BtnJoin";

const TimeLine = () => {
  return (
    <section className="px-3 py-2">
      <h2 className="text-xl text-center mb-6 mt-8 font-bold">
        ------- <span className="linear-grad-text">Time Line</span> -------
      </h2>
      <div className="timeline-wrapper mb-10">
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start timeline-box">Peluncuran W-RTIB</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className=" h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">Pembuatan Devisi</div>
            <hr className="bg-white" />
          </li>
          <li>
            <hr className="bg-white" />
            <div className="timeline-start timeline-box ">?</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-white h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        </ul>

        <div className="joinus mt-24 mx-auto">
          <p className="text-sm text-center text-gray-400 mb-4">
            Ambil langkah awal bergabung ke TIM-RTIB
          </p>
          <div className="w-max mx-auto">
            <BtnJoin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
