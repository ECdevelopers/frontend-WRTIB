import { useBackBlur } from "../../context/BackdropProvider";

const BtnJoin = () => {
  const { toggleActive, toggleSetPopUP } = useBackBlur();

  function handleOnClick() {
    toggleActive();
    toggleSetPopUP("Login");
  }
  return (
    <>
      <button onClick={handleOnClick} className="text-base text-white">
        GABUNG SEKARANG
      </button>
    </>
  );
};

export default BtnJoin;
