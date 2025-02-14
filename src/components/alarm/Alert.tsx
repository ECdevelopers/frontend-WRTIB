import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBackBlur } from "../../context/BackdropProvider";
import { JSX } from "react";
import Thankyou from "./Thankyou";

const Alert = () => {
  const { alertType, toggleSetAlert } = useBackBlur();
  const [alertContent, setAlertContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (!alertType) return;

    switch (alertType) {
      case "Thank":
        setAlertContent(<Thankyou />);
        break;
      default:
        setAlertContent(null);
    }

    const timeout = setTimeout(() => {
      toggleSetAlert(null);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [alertType, toggleSetAlert]);

  return (
    <div className="fixed z-50 top-[10%] right-0">
      <AnimatePresence>
        {alertType && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {alertContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Alert;
