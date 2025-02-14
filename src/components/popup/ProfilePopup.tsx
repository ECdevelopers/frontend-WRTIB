import { useUser } from "../../context/UserProvider";

const ProfilePopup = () => {
  const { user } = useUser();
  const avatarUrl = user?.avatar
    ? `https://cdn.discordapp.com/avatars/${user.discord_id}/${user.avatar}.png`
    : `https://cdn.discordapp.com/embed/avatars/${
        Number(user?.discord_id || 0) % 5
      }.png`;
  return (
    <div className="fixed z-1 top-[10%] left-[50%]  translate-x-[-50%] w-[20rem] h-[15rem] rounded-2xl overflow-hidden border-[1px] border-white">
      <div className="head w-full flex items-center gap-4 h-[45%] backdrop-blur-sm p-5 px-3">
        <div className="avatar w-16 h-16 bg-white rounded-full overflow-hidden">
          <img src={avatarUrl} alt="avatar" className="w-full" />
        </div>
        <div className="describ flex flex-col">
          <span>{user?.username}</span>
          <span>Role Discord</span>
        </div>
      </div>
      <div className="head w-full h-full bg-white"></div>
    </div>
  );
};

export default ProfilePopup;
