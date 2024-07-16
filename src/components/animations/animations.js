import { easeIn } from "framer-motion";

export const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

export const FadeInAnimationtransition = {
    ease: easeIn,
    duration: 0.5,
  };