import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeUp } from "../../utils/axios/animations/animations";

export const FadeUp = ({
  children,
  delay = 0,
  duration = 0.5,
  variants = fadeUp,
  once = true,
  margin,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: margin ? margin : "0px 0px -200px 0px",
    once: once,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  return (
    <motion.div
      ref={ref}
      animate={isVisible ? "animate" : "initial"}
      transition={{ delay, duration }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
