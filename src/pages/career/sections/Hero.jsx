import React from "react";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import FadeUpParagraph from "../../../components/animateComponents/FadeUpParagraph";
import {motion} from "framer-motion"
import { fadeUp } from "../../../utils/axios/animations/animations";
import { Pin } from "../../../components/buttons/Pin";

const Hero = () => {
  return (
    <div className="md:h-screen  bg-[#F7F9FF] sm:pt-28">
      <div className="mx-auto flex h-full max-w-[1500px] text-start pt-32 p-4 gap-3">
        <div className="sm:basis-1/2 space-y-8 p-4">
          <FadeUpHeading className={"max-w-[600px] md:text-6xl"}>
            Join Our Community for Successful career
          </FadeUpHeading>
          <FadeUpParagraph className={"max-w-[600px] md:text-2xl"}>
            Experience the future of real estate management. Whether you're a
            homeowner, property manager, or real estate investor, we offer the
            tools you need.
          </FadeUpParagraph>
          <Pin className={"md:text-xl"}>Check Latest Jobs</Pin>
        </div>
        <div className="sm:basis-1/2 hidden sm:block">
          <div className="flex gap-2 items-end justify-end">
            <motion.img variants={fadeUp} initial="initial" whileInView={"animate"} className=" w-1/3 object-cover rounded-3xl" src="/career/2.png" alt="" />
            <motion.img variants={fadeUp} initial="initial" whileInView={"animate"} className="w-2/3 object-cover rounded-3xl" src="/career/1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
