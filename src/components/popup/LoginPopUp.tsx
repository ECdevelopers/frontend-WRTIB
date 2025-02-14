import { useState, ChangeEvent } from "react";
import { useBackBlur } from "../../context/BackdropProvider";

import BtnJoinTrem from "../btn/BtnJoinTrem";

const LoginPopup = () => {
  const { toggleSetPopUP } = useBackBlur();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  const toggleClick = (e: any) => {
    e.preventDefault();
    toggleSetPopUP("Ketentuan");
  };

  return (
    <div className="fixed z-50 left-[50%] translate-x-[-50%] bg-white py-5 rounded-sm text-black w-[20rem]">
      <form action="">
        <div className="input-grub items-center flex gap-2 mx-auto w-max mb-2">
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-neutral"
            onChange={handleChange}
            checked={isChecked}
            id="term"
          />
          <label htmlFor="term">
            Membaca{" "}
            <button className="link link-primary " onClick={toggleClick}>
              Ketentuan
            </button>{" "}
            Bergabung
          </label>
        </div>
        <BtnJoinTrem condition={!isChecked} />
      </form>
    </div>
  );
};

export default LoginPopup;
