// import React from 'react'

// const Testimonials = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Testimonials


import { motion, AnimatePresence, useInView } from "framer-motion";
// import Image from "next/image";
// import useFetchTestimonials from "../../../hooks/useFetchTestimonials";
import { useEffect, useRef, useState } from "react";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import { fadeUp } from "../../../utils/axios/animations/animations";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonialData } from "../../../static/testimonialData";

export const Testimonials = ({
  // testimonials,
  autoplay = true,
}) => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
  });
  // const { testimonials, loading, error } = useFetchTestimonials();

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonialData?.length);
  };

  const handlePrev = () => {
    setActive(
      (prev) => (prev - 1 + testimonialData?.length) % testimonialData?.length,
    );
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    let interval;
    if (!testimonialData?.length) return;
    if (autoplay && isInView) {
      interval = setInterval(handleNext, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay, testimonialData, isInView]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  if (!testimonialData?.length) {
    return null;
  }

  return (
    <section
      ref={ref}
      className="font-sans sm:py-10 pt-4 my-4 mb-20 mx-auto max-w-md px-4 pb-20 antialiased md:max-w-6xl md:px-8 lg:px-12"
    >
      <h2 className={"text-[2rem] leading-[2.5rem] text-primary-900 font-semibold text-center mx-auto mb-14 max-w-lg"}>
        Our Success Stories
      </h2>
      <div
        className="relative grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-20"
      >
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonialData?.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 200
                      : testimonialData?.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.img_url}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 py-4 md:text-start text-center">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-black">
              {testimonialData[active]?.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              Lead Engineer
            </p>
            <motion.p className="mt-4 text-lg text-gray-500 md:mt-8 dark:text-neutral-600">
              {testimonialData[active]?.testimonial
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>
          <div className="flex md:justify-start justify-center gap-4 pt-6 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-400"
            >
              <ArrowLeft className="h-6 w-6 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-100" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-400"
            >
              <ArrowRight className="h-6 w-6 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-100" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
