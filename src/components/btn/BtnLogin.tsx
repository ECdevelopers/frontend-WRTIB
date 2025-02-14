import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { PopUp, useBackBlur } from "../../context/BackdropProvider";
import { useUser } from "../../context/UserProvider";
import { logout } from "../../api/AuthLogin";

const BtnLogin = () => {
  const { toggleActive, toggleSetPopUP } = useBackBlur();
  const { user, isLogin } = useUser();
  const [isShow, setIsShow] = useState<boolean>(false);
  const avatarUrl = user?.avatar
    ? `https://cdn.discordapp.com/avatars/${user.discord_id}/${user.avatar}.png`
    : `https://cdn.discordapp.com/embed/avatars/${
        Number(user?.discord_id || 0) % 5
      }.png`;

  function handleOnClick(type: PopUp) {
    toggleActive();
    toggleSetPopUP(type);
  }

  function handleHide() {
    setIsShow(!isShow);
  }

  return isLogin ? (
    <div className="relative">
      <button
        onClick={handleHide}
        className="w-[3rem] h-[3rem] bg-white rounded-full overflow-hidden"
      >
        <img
          src={avatarUrl}
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      </button>

      <AnimatePresence>
        {isShow && (
          <motion.ul
            className="popup-min absolute top-[125%] right-0 bg-[#191E24] px-5 py-1 h-max rounded-lg shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <li className="border-b border-gray-400 p-2">
              <button onClick={() => handleOnClick("Profile")}>Profile</button>
            </li>
            <li className="text-red-600 p-2">
              <button onClick={() => logout()}>Logout</button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  ) : (
    <button className="text-base tracking-wider py-1 px-3 linear-grad-text flex items-center gap-1">
      <FiLogIn />
      <Link to="/login">LOGIN</Link>
    </button>
  );
};

export default BtnLogin;
