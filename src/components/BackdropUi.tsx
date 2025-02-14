import { useEffect } from "react";
import { useBackBlur } from "../context/BackdropProvider";
import { disableScroll, enableScroll } from "../libs/utils";

const BackdropUi = () => {
  const { isActive, toggleDeactive } = useBackBlur();
  useEffect(() => {
    if (isActive) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isActive]);
  return (
    <div
      onClick={toggleDeactive}
      className={` z-10 fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm ${
        isActive ? "block" : "hidden"
      }`}
    ></div>
  );
};

export default BackdropUi;
