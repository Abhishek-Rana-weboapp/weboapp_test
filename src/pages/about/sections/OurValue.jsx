import React from "react";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import Wrapper from "../../../components/Wrapper";
import { motion } from "framer-motion";

const OurValue = () => {
  const points = [
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge technology and creativity to build transformative digital solutions for businesses.",
        color:"#2E68FD"
    },
    {
      title: "Client-Centricity",
      description:
        "Our focus is on delivering personalized and result-driven solutions that empower our clients.",
        color:"#3B7793"
    },
    {
      title: "Integrity",
      description:
        "We build strong relationships through open communication, honesty, and a commitment to ethical business practices",
        color:"#FC4343"
    },
    {
      title: "Collaboration",
      description:
        "Strong teamwork and seamless partnerships help us achieve shared goals and long-term success.",
        color:"#D77E1B"
    },
    {
      title: "Excellence",
      description:
        "We maintain the highest standards in performance, quality, and reliability in every project",
        color:"#08A965"
    },
    {
      title: "Adaptability",
      description:
        "We stay agile and responsive to evolving technologies, ensuring our solutions remain future-ready.",
        color:"#932EFA"
    },
  ];
  return (
    <Wrapper >
      <FadeUpHeading className={"top-24 max-md:sticky md:mb-8"}>
        Our Value
      </FadeUpHeading>

      <motion.div
          className="grid grid-cols-[repeat(auto-fit,minmax(350px,_1fr))] gap-4 md:border  rounded-3xl md:p-6  bg-gradient-to-r from-[#fcfdff] to-[#f8f3fd]"
        >
     {points.map((point, index) => {
        const bgColor = `bg-[${point.color}]`
        return (
          <motion.div
            variants={ {initial: { opacity: 0, y: 40,  },
            animate: { opacity: 1, y: 0,  }}}
            key={index}
            initial="initial"
            whileInView={"animate"}
            transition={{duration:0.5, ease:"easeInOut", delay: 0.1 * index }}
            viewport={{ margin: "0px 0px -100px 0px", once:true }}
            className="max-md:sticky top-36 content-center space-y-4 max-md:bg-white rounded-xl p-8 text-start max-md:min-h-[300px] md:my-4 group"
          >
            <div className={`w-4 h-4 rounded-full`} style={{background:point.color}} />
            <h2 className="text-xl md:text-2xl">{point.title}</h2>
            <p className="text-black/70 md:text-lg">{point.description}</p>
          </motion.div>
        );
      })}
       </motion.div>


    </Wrapper>
  );
};

export default OurValue;
