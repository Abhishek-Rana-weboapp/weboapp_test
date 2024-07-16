import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SlideButton from "../buttons/SlideButton";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};
const transition = {
  ease: "easeIn",
  duration: 0.5,
};

const scrollInAnimationVariants = {
  initial: { x: -100, opacity: 0 },
  animate: (number) => {
    return {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: number * 0.1 },
    };
  },
};

const scrollInFromRightAnimationVariants = {
  initial: { x: 100, opacity: 0 },
  animate: (number) => {
    return {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: number * 0.1 },
    };
  },
};

const ServicesCard = ({ service }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();
  const scopeRef = useRef();
  const isInView = useInView(scopeRef);

  // useEffect(() => {
  //   const dropAnimation = async () => {
  //     // Set initial values
  //     await controls.start({
  //       y:-50,
  //       width: 100,
  //       height: 100,
  //       borderRadius: "50%",
  //       clipPath: "circle(1.5% at 50% 50%)",
  //     });

  //     // Drop to its original position
  //     await controls.start({
  //       y: 0,
  //       transition: { duration: 0.5, ease: "easeOut" },
  //     });

  //     // Expand to its original size
  //     await controls.start({
  //       width: "100%",
  //       height: "100%",
  //       borderRadius: "0.5rem",
  //       clipPath: "circle(50% at 50% 50%)",
  //       transition: { duration: 0.4, ease: "easeOut" },
  //     });

  //     setHasAnimated(true);
  //   };

  //   if (isInView && !hasAnimated) dropAnimation();
  // }, [isInView, hasAnimated, controls]);

  return (
    <div className="py-30 flex min-h-full min-w-full flex-col items-center gap-4 rounded-md bg-transparent text-[#eee] backdrop-blur-sm sm:gap-2 md:grid md:grid-cols-2 lg:justify-center">
      <section className="flex flex-col items-center relative h-96">
        {service.img && (
            <img
              src={service?.img}
              className="absolute inset-0 bg-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              // style={{ width: "100%", height: "100%", backgroundImage:`url(${service?.img})` , backgroundRepeat:"no-repeat", backgroundPosition:"center"}}
            />
        )}
      </section>
      <section className="flex flex-col items-center">
        <motion.div
          variants={scrollInFromRightAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={2}
          className="flex w-full flex-col items-center gap-4"
        >
          <h2 className="w-max border-b-4 border-purple-400 text-lg font-semibold sm:text-3xl">
            {service?.heading}
          </h2>
          <p className="p-2 text-start text-xs sm:text-base">
            {service.description}
          </p>
          <SlideButton>Click Me</SlideButton>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesCard;
