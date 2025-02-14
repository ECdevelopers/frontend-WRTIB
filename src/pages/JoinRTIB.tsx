import { useEffect, useState } from "react";
import FloatingLabelInput from "../components/form/FloatingLabelInput";
import FloatingLabelTextarea from "../components/form/FloatingLabelTextArea";
import { FiSend } from "react-icons/fi";
import { useBackBlur } from "../context/BackdropProvider";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";
import { useUser } from "../context/UserProvider";
import { assets } from "../assets/assets";

interface FormData {
  discord_id: number;
  nama: string;
  email: string;
  alasan: string;
  tim: string;
}

const JoinRTIB = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyMlqSK1Yke_RfAcZuYqQ14ZgLzRwYNoHzLQOPUa_GlZ-JBtV3fkLBWVIZYHDYKAMEz/exec";

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const {} = useForm("adada");
  const { user } = useUser();
  const { toggleSetPopUP, toggleActive } = useBackBlur();

  const avatarUrl = user?.avatar
    ? `https://cdn.discordapp.com/avatars/${user.discord_id}/${user.avatar}.png`
    : `https://cdn.discordapp.com/embed/avatars/${
        Number(user?.discord_id || 0) % 5
      }.png`;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    if (localStorage.getItem("registerRTIB")) {
      setIsRegister(true);
    }
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    discord_id: user?.discord_id || 0,
    nama: "",
    email: "",
    alasan: "",
    tim: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = (): boolean => {
    return Object.values(formData).some((value) => value === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, String(value));
      });

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) throw new Error("Gagal mengirim data.");

      console.log("Success!", response);
      localStorage.setItem("registerRTIB", "registered");
      setIsRegister(true);
    } catch (error) {
      console.error("Error!", error);
    }
  };

  return isVisible ? (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="px-6 py-4 text-black"
    >
      <div className="joinMRTIB mx-auto max-w-[30rem] py-4 px-3 bg-white rounded-md shadow-lg">
        <div className="thumbnial w-full mb-3 overflow-hidden rounded-tl-2xl rounded-tr-2xl border border-black relative">
          <img
            src="https://art.pixilart.com/8f5b6288a99c194.gif"
            className="-rotate-y-180"
            alt="Thumbnail"
          />
          <div className="profile w-[13rem] rounded-br-xl absolute top-0 left-0 bg-[rgba(225,225,225,.5)] backdrop-blur-sm p-2 border-r border-b border-white">
            <div className="w-[4rem] h-[4rem] bg-black rounded-full mb-1 overflow-hidden">
              <img src={avatarUrl} alt="Avatar" />
            </div>
            <div className="text-gray-700">
              <p className="text-sm">{user?.username || "Undefine"}</p>
              <p className="text-sm">Wow keren banget mau join!</p>
            </div>
          </div>
        </div>

        <div className="px-0.5 mb-4">
          <h2 className="font-bold text-xl">Join Tim-RTIB</h2>
          <p className="text-sm">Bantu harimu lebih produktif dengan kami.</p>
          <p className="text-sm text-gray-600">
            <span className="font-bold text-black">NOTE: </span>
            Baca yang teliti dulu ya,
            <button
              className="link link-primary"
              onClick={() => {
                toggleSetPopUP("Ketentuan");
                toggleActive();
              }}
            >
              {" "}
              ketentuannya
            </button>{" "}
            sebelum masuk.
          </p>
        </div>

        {isRegister ? (
          <div className="py-14 text-center">
            <img
              src={assets.icons.check}
              alt="Check Icon"
              width={100}
              className="mx-auto mb-6"
            />
            <p className="text-sm">Kamu Sudah Registrasi</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-0.5">
            <div className="flex flex-col w-full text-sm mb-4">
              <select
                name="tim"
                className="select select-bordered w-full max-w-xs bg-white border border-black"
                value={formData.tim}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Pilih Tim-RTIB
                </option>
                <option value="Pengurus Server">Pengurus Server</option>
                <option value="Fullstack Developer">Fullstack Developer</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Mobile iOS Developer">
                  Mobile iOS Developer
                </option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
              </select>
            </div>
            <FloatingLabelInput
              name="nama"
              type="text"
              label="Nama"
              value={formData.nama}
              handleChange={handleChange}
            />
            <FloatingLabelInput
              name="email"
              type="email"
              label="Email"
              value={formData.email}
              handleChange={handleChange}
            />
            <FloatingLabelTextarea
              name="alasan"
              label="Alasan"
              value={formData.alasan}
              handleChange={handleChange}
            />
            <button
              type="submit"
              disabled={validateForm()}
              className="btn flex items-center justify-center gap-2 w-max transition-all duration-300"
            >
              <FiSend /> KIRIM
            </button>
          </form>
        )}
      </div>
    </motion.section>
  ) : null;
};

export default JoinRTIB;
