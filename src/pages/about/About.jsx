import React, { forwardRef } from "react";
import { easeIn, motion } from "framer-motion";
import FadeInHeading from "../../components/headings/FadeInHeading";

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

const data = [
  {
    heading: "1200",
    subHeading: "Projects Completed",
    para: "We have completed over a total of 1200 projects in various fields",
  },
  {
    heading: "100%",
    subHeading: "Customer Satisfaction",
    para: "With a record of 100% customer satisfaction",
  },
  {
    heading: "1200",
    subHeading: "Projects Completed",
    para: "We have completed over a total of 1200 projects in various fields",
  },
  {
    heading: "1200",
    subHeading: "Projects Completed",
    para: "We have completed over a total of 1200 projects in various fields",
  },
  {
    heading: "1200",
    subHeading: "Projects Completed",
    para: "We have completed over a total of 1200 projects in various fields",
  },
];

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="mb-10 min-h-[750px] w-full p-4 lg:pt-20">
      <div className="flex flex-col gap-5 p-4 sm:px-40">
        <FadeInHeading>
          About <span className="text-blue-400">Us</span>
        </FadeInHeading>
        <motion.p className="p-5 text-xs shadow sm:text-base">
          At WeboApp discovery, we are dedicated to revolutionizing the digital
          landscape through innovative IT solutions tailored to meet the
          evolving needs of businesses worldwide. With a passion for technology
          and a commitment to excellence, we specialize in providing
          cutting-edge services that empower organizations to thrive in today's
          competitive market.
          <br />
          Our team of skilled professionals brings together a wealth of
          experience and expertise across various domains, enabling us to
          deliver comprehensive solutions that drive tangible results.
        </motion.p>
      </div>

      <h1 className="my-10 text-xl sm:text-5xl">With over</h1>
      <div className="flex w-full flex-wrap justify-evenly gap-x-5 gap-y-10 p-4">
        {data.map((dat, index) => {
          return (
            <motion.div
              key={index}
              variants={
                index % 2 !== 0
                  ? scrollInFromRightAnimationVariants
                  : scrollInAnimationVariants
              }
              initial="initial"
              whileInView="animate"
              className="flex w-full flex-col items-center gap-2 p-5 shadow sm:w-2/5 rounded-md"
            >
              <label className="text-2xl font-bold sm:text-6xl">
                {dat.heading}
              </label>
              <label className="text-base sm:text-2xl">{dat.subHeading}</label>
              <p className="text-xs sm:text-sm">{dat.para}</p>
            </motion.div>
          );
        })}
      </div>

      <label className="my-10 text-xl sm:text-4xl">
        We are the best choice for all your needs
      </label>
    </div>
  );
});

export default About;
