import { useRef } from "react";
import { FaDiscord } from "react-icons/fa";
import { login } from "../../api/AuthLogin";

const BtnLoginDiscord = ({ condition }: { condition: boolean }) => {
  const btn = useRef<HTMLButtonElement | null>(null);
  const tes = async (e: any) => {
    e.preventDefault();
    const data = await login();
    return data;
  };

  return (
    <div className="btnjoin w-[max-content] mx-auto">
      <button
        ref={btn}
        disabled={!condition}
        onClick={(e) => tes(e)}
        className="text-white flex items-center px-4 py-2 bg-[#5862d0] rounded-md disabled:bg-gray-500 hover:bg-[#5862d0a5] gap-2"
      >
        <FaDiscord className="text-2xl" /> <span>Discord</span>
      </button>
    </div>
  );
};

export default BtnLoginDiscord;
