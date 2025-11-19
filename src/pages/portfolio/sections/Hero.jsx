import React from "react";
import Wrapper from "../../../components/Wrapper";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/axios/animations/animations";

const Hero = () => {
  return (
      <div className="relative h-[60vh] overflow-hidden content-center ">
        <Wrapper>
          <FadeUpHeading className={"text-start md:text-7xl text-4xl"}>PortFolio</FadeUpHeading>
        </Wrapper>
        <motion.img variants={fadeUp} initial="initial" animate="animate" src="/portfolio/hero.png" className="absolute w-full md:h-auto h-full left-0 top-0 object-cover -z-10" alt="" />
      </div>
  );
};

export default Hero;

