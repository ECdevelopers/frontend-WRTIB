import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BtnLogin from "./../components/btn/BtnLogin";
import Footer from "../ui/Footer";
import HeroSec from "../ui/HeroSec";
import About from "../ui/About";
import FokusKami from "../ui/FokusKami";
import TimeLine from "../ui/TimeLine";
import KontakKami from "../ui/KontakKami";
import FloatingBtn from "../components/btn/FloatingBtn";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.3 },
  }),
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <FloatingBtn />
      <header className="flex justify-end px-3 py-2">
        <BtnLogin />
      </header>

      <main className="mb-5">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <HeroSec />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <About />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <FokusKami />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <TimeLine />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >
          <KontakKami />
        </motion.div>
      </main>

      <Footer />
    </motion.div>
  ) : null;
};

export default Home;
