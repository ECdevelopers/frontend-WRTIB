import { useEffect, useState } from "react";
import FloatingLabelInput from "../components/form/FloatingLabelInput";
import FloatingLabelTextarea from "../components/form/FloatingLabelTextArea";
import { FiSend } from "react-icons/fi";
import { useBackBlur } from "../context/BackdropProvider";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";
import { useUser } from "../context/UserProvider";
import { assets } from "../assets/assets";

const JoinRTIB = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyMlqSK1Yke_RfAcZuYqQ14ZgLzRwYNoHzLQOPUa_GlZ-JBtV3fkLBWVIZYHDYKAMEz/exec";

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [state] = useForm("adada");
  const { user } = useUser();

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
  const { toggleSetPopUP, toggleActive } = useBackBlur();
  const [formData, setFormData] = useState({
    discord_id: user?.discord_id || 123,
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value === "string" || value instanceof Blob) {
        formDataToSend.append(key, value);
      } else {
        formDataToSend.append(key, String(value)); // Konversi nilai lain ke string
      }
    });

    console.log("Data dikirim:", Object.fromEntries(formDataToSend.entries()));

    fetch(scriptURL, {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => {
        console.log("Success!", response);
        localStorage.setItem("registerRTIB", "registered");
        setIsRegister(true);
      })
      .catch((error) => console.error("Error!", error.message));
  };

  function validate() {
    if (
      formData.nama === "" ||
      formData.email === "" ||
      formData.tim === "" ||
      formData.alasan === ""
    ) {
      return true;
    }
    return false;
  }

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
              <img src={avatarUrl} alt="" />
            </div>
            <div className="text-gray-700">
              <p className="text-sm">{user?.username || "undefine"}</p>
              <p className="text-sm">Wow keren banget mau join!</p>
            </div>
          </div>
        </div>

        <div className="px-0.5 mb-4">
          <h2 className="font-bold text-xl">Join Tim-RTIB</h2>
          <p className="text-sm">Bantu harimu lebih produktif dengan kami.</p>
          <p className="text-sm text-gray-600">
            <span className="font-bold text-black">NOTE: </span>
            Baca yang teliti dulu ya,{" "}
            <button
              className="link link-primary"
              onClick={() => {
                toggleSetPopUP("Ketentuan");
                toggleActive();
              }}
            >
              ketentuannya
            </button>{" "}
            sebelum masuk.
          </p>
          <p className="text-sm mt-2">Ayo! isi form di bawah.</p>
        </div>

        {isRegister ? (
          <div className="py-14">
            <div className="check w-max h-max mx-auto mb-6">
              <img src={assets.icons.check} alt="" width={100} />
            </div>
            <p className="text-sm text-center">Kamu Sudah Registrasi</p>
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
              name="discord_id"
              type="number"
              label="Discord_Id"
              prop={state.errors}
              value={user?.discord_id || 123231}
              handleChange={handleChange}
            />

            <FloatingLabelInput
              name="nama"
              type="text"
              label="Nama"
              prop={state.errors}
              value={formData.nama}
              handleChange={handleChange}
            />
            <FloatingLabelInput
              name="email"
              type="email"
              label="Email"
              prop={state.errors}
              value={formData.email}
              handleChange={handleChange}
            />
            <FloatingLabelTextarea
              name="alasan"
              label="Alasan"
              prop={state.errors}
              value={formData.alasan}
              handleChange={handleChange}
            />

            <button
              type="submit"
              disabled={validate()}
              className="btn flex items-center justify-center gap-2 w-max transition-all duration-300"
            >
              <FiSend />
              KIRIM
            </button>
          </form>
        )}
      </div>
    </motion.section>
  ) : null;
};

export default JoinRTIB;
