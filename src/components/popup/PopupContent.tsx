import { useState, useEffect } from "react";
import { useBackBlur } from "../../context/BackdropProvider";
import LoginPopup from "./LoginPopUp";
import Ketentuan from "./Ketentuan";
import { JSX } from "react";
import ProfilePopup from "./ProfilePopup";

const Popup = () => {
  const { popUpType, isActive } = useBackBlur();
  const [popUpContent, setPopUpContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (popUpType) {
      case "Login":
        setPopUpContent(<LoginPopup />);
        break;
      case "Ketentuan":
        setPopUpContent(<Ketentuan />);
        break;
      case "Profile":
        setPopUpContent(<ProfilePopup />);
        break;
      default:
        setPopUpContent(null);
    }
  }, [popUpType]);

  return (
    <>
      <div
        className={`fixed z-50 px-7 left-[50%] w-full  translate-x-[-50%]  transition-all duration-300 ${
          isActive ? "top-4" : "top-[-100rem]"
        }`}
      >
        {popUpContent}
      </div>
    </>
  );
};

export default Popup;
