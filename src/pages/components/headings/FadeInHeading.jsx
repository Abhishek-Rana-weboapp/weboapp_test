import { fadeInAnimationVariants } from "../animations/animations";
import { motion } from "framer-motion";

const FadeInHeading = ({ children }) => {
  return (
    <motion.h2
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      className="sm:text-5xl text-2xl font-bold"
    >
      {children}
    </motion.h2>
  );
};

export default FadeInHeading;
