import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const Loading = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="z-50 fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-[5rem] bg-black p-4 rounded-2xl flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={assets.icons.loading}
              alt="Loading.."
              className="w-10 h-10 "
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
