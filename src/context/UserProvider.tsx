import { createContext, useContext, useEffect, useState } from "react";
import { getIdetifiUser } from "../api/Users";

interface User {
  discord_id: number;
  username: string;
  avatar: string;
}

const UserContext = createContext<
  | {
      user: User | null;
      setUser: (user: User | null) => void;
      isLogin: boolean;
    }
  | undefined
>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLogin, setIsLOgin] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const token =
          urlParams.get("token") || localStorage.getItem("jwt_token");

        if (token) {
          localStorage.setItem("jwt_token", token);
          const data = await getIdetifiUser(token);
          setUser(data);
        }
        token ? setIsLOgin(true) : setIsLOgin(false);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
