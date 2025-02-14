import { useUser } from "../../context/UserProvider";

const BtnJoinTrem = ({ condition }: { condition: boolean }) => {
  const { isLogin } = useUser();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault(); // Mencegah refresh halaman

    if (isLogin) {
      alert("udah login");
    } else {
      alert("login dulu");
    }
  }

  return (
    <div className="ctn mx-auto w-max ">
      <button onClick={handleClick} className="btn" disabled={condition}>
        Join Tim-RTIB
      </button>
    </div>
  );
};

export default BtnJoinTrem;
