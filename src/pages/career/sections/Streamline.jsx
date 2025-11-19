import React from "react";
import Wrapper from "../../../components/Wrapper";
import FadeUpParagraph from "../../../components/animateComponents/FadeUpParagraph";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";;
import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/axios/animations/animations";
import { ArrowUpToLine, CircleDashed, Wrench } from "lucide-react";

const Streamline = () => {
  const points = [
    {
      title: "Innovative WorkSpaces",
      icon:<Wrench size={25} />,
    },
    {
      title: "Cutting-Edge Technologies",
      icon: <ArrowUpToLine size={25} />,
    },
    {
      title: "Work-Life Balance",
      icon: <CircleDashed size={25} />,
    },
  ];
  return (
    <div className="bg-[#F7F9FF] py-10">
      <Wrapper>
        <div className="flex flex-col gap-2 bg-[#F7F9FF] md:flex-row">
          <div className="basis-1/2 content-center">
            <motion.img
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "0px 0px -200px 0px", once: true }}
              src="/career/3.png"
              className="mx-auto max-h-[500px] w-full max-w-[600px] rounded-3xl object-cover"
              alt=""
            />
          </div>
          <div className="basis-1/2 content-center space-y-10">
            <FadeUpHeading className={"my-2 text-start"}>
              Streamline, Prioritize and Elevate Your Career
            </FadeUpHeading>
            <FadeUpParagraph className={"my-2 text-start"}>
              Discover opportunities where your skills drive innovation. At
              Webappdiscovery, we empower your growth and inspire creativity in
              a collaborative and dynamic environment.
            </FadeUpParagraph>
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView={"animate"}
              viewport={{ margin: "0px 0px -200px 0px", once: true }}
              className="flex flex-col gap-4"
            >
              {points.map((point, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-start gap-2 rounded-xl border bg-white p-3 shadow md:text-lg"
                  >
                    {point.icon && point.icon}
                    {point.title}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Streamline;
