import React, { forwardRef, useEffect, useState } from "react";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import { fadeInAnimation } from "../../components/headings/AnimateHeadings";
import webdev from "../../assets/webdev.jpg";
import { servicesData } from "../../static/servicesData";
import Carousel from "../../components/carousel/Carousel";
import ServicesCard from "../../components/cards/ServicesCard";
import FadeInHeading from "../../components/headings/FadeInHeading";
import Illustration from "../../assets/Illustration.png";
import { useInView } from "react-intersection-observer";
import { BiArrowToRight } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};
const transition = {
  ease: easeIn,
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

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1,transition : {duration:0.3} },
}

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

const Services = forwardRef(function Services(props, ref) {
  const [currentImage, setCurrentImage] = useState(servicesData[0]?.img || "");

  const handleInView = (inView, entry, index) => {
    if (inView) {
      setCurrentImage(servicesData[index]?.img || "");
    }
  };
  return (
    <div
      ref={ref}
      className="flex w-full flex-col items-center gap-10 sm:min-h-screen lg:pt-2 relative"
    >

      <div className="mt-20 flex flex-col items-center gap-2 ">
        <FadeInHeading>Services We Deliver</FadeInHeading>

        <motion.h2
          {...fadeInAnimation(fadeInAnimationVariants, transition)}
          className="text-center text-xl font-bold sm:text-3xl"
        >
          we provide{" "}
          <span className="text-purple-600">
            {" "}
            truly prominent IT solutions.
          </span>
        </motion.h2>
      </div>
      <section className="relative h-full sm:flex items-start gap-16 px-40 hidden">
        <div className="relative mt-20 gap-16 bg-white p-2 lg:flex">
          <div className="flex h-max w-1/2 flex-col justify-center">
            <div className="sticky top-0 h-[25vh] bg-gradient-to-t from-neutral-50/0 to-neutral-50/100"></div>
            {servicesData.map((service, index) => {
              const { ref, inView } = useInView({
                threshold: 0.5, // Adjust this value as needed
              });

              useEffect(() => {
                handleInView(inView, null, index);
              }, [inView]);
              return (
                <div className="flex h-[34rem] items-center" ref={ref}>
                  <div className="flex flex-col gap-5 text-left px-2">
                    <h1 className="text-4xl font-semibold">{service.heading}</h1>
                    <p className="text-xl">{service.description}</p>
                    <a className="flex gap-2 items-center" href="#">
                      Get Started Now <FaArrowRightLong size={20} />
                    </a>
                  </div>
                </div>
              );
            })}
            <div className="sticky bottom-0 h-[25vh] bg-gradient-to-b from-white/0 to-white/100"></div>
          </div>
          <div className="sticky top-10 flex h-screen items-center">
        <AnimatePresence mode="wait">
            <motion.img
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit={{opacity:0, transition : {duration:0.4}}}
              key={currentImage}
              src={currentImage}
              style={{boxShadow:"0px 32px 64px 0px rgba(66, 66, 66, 0.07), 0px 8px 16px 0px rgba(66, 66, 66, 0.07), 0px 4px 8px 0px rgba(66, 66, 66, 0.07), 0px 2px 4px 0px rgba(66, 66, 66, 0.07), 0px 1px 2px 0px rgba(66, 66, 66, 0.07)"}}
              className="w-[48rem] h-[47rem] max-w-none object-cover rounded-xl shadow-lg"
            />
            </AnimatePresence>
          </div>
        </div>
      </section>
      

      <div className="flex w-full flex-1 sm:hidden">
          <Carousel autoSlide={false}>
          {servicesData.map((service, index) => {
            return <ServicesCard key={index} service={service} />;
            })}
            </Carousel>
            </div>
    </div>
  );
});

export default Services;
