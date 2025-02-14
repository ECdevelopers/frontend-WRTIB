import { createContext, useState, ReactNode, useContext } from "react";

export type PopUp = "Login" | "Ketentuan" | "Profile" | null;
type Alert = "Thank" | null;
const BlurContext = createContext<{
  popUpType: PopUp;
  isActive: boolean;
  alertType: Alert;
  toggleSetPopUP: (tp: PopUp) => void;
  toggleActive: () => void;
  toggleDeactive: () => void;
  toggleSetAlert: (tp: Alert) => void;
} | null>(null);

export const BackdropProvider = ({ children }: { children: ReactNode }) => {
  const [popUpType, setPopupType] = useState<PopUp>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<Alert>(null);

  const toggleSetPopUP = (tp: PopUp) => {
    setPopupType(tp);
  };
  const toggleActive = () => {
    setIsActive(true);
  };
  const toggleDeactive = () => {
    setIsActive(false);
  };
  const toggleSetAlert = (tp: Alert) => {
    setAlertType(tp);
  };

  return (
    <BlurContext.Provider
      value={{
        toggleSetAlert,
        alertType,
        popUpType,
        isActive,
        toggleActive,
        toggleDeactive,
        toggleSetPopUP,
      }}
    >
      {children}
    </BlurContext.Provider>
  );
};

// 4. Hook khusus biar gampang pakai di komponen lain
export const useBackBlur = () => {
  const context = useContext(BlurContext);
  if (!context)
    throw new Error("useBackBlur harus digunakan dalam BlurContext.Provider ");
  return context;
};
