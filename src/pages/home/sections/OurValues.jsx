import React from "react";
import { FadeUp } from "../../../components/animateComponents/FadeUp";
import { motion } from "framer-motion";
import { fadeFromRight } from "../../../utils/axios/animations/animations";
import { Pin } from "../../../components/buttons/Pin";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import FadeUpParagraph from "../../../components/animateComponents/FadeUpParagraph";
import ImageComponent from "../../../components/image/ImageComponent";
import Wrapper from "../../../components/Wrapper";

const OurValues = () => {
  const points = [
    {
      title: "Innovation",
      description:
        "We embrace emerging technologies to develop cutting-edge solutions tailored to your needs.",
    },
    {
      title: "Integrity",
      description:
        "Transparency, honesty, and professionalism are the cornerstones of our work",
    },
    {
      title: "Collaboration",
      description:
        "Partnering closely with our clients to understand their goals and exceed expectations.",
    },
    {
      title: "Excellence",
      description:
        "Delivering quality solutions with a dedication to continuous improvement.",
    },
    {
      title: "Customer-Centric Approach",
      description:
        " Your success is our priority, and we go the extra mile to ensure satisfaction.",
    },
  ];
  return (
    <section className="">
      <Wrapper className={"flex flex-col gap-8 px-5 md:flex-row md:px-2 md:py-20 py-8"} >
        <div className="flex max-w-[600px] flex-col gap-8 text-start">
         <h2 className="text-[2.5rem] leading-[2.5rem] text-primary-900 font-semibold text-start max-w-lg">What We Stand For</h2>
          {/* <FadeUpHeading>What We Stand For</FadeUpHeading> */}
          <p className="text-black/70 ">
            At Weboapp Discovery, we believe in empowering businesses through
            innovative and reliable IT solutions. Our commitment is to deliver
            exceptional services that drive growth, efficiency, and digital
            transformation.
          </p>
            <ul className="list-disc ml-5 md:text-lg">
              {points.map((point, index) => (
                <li key={index} className="">
                  <span className="font-bold">{point.title}</span>: <span className="text-black/70">{point.description}</span>
                </li>
              ))}
            </ul>
        </div>
        <div className="flex gap-3 md:items-end">
          <div
            className="w-full max-w-[600px] ml-auto"
          >
            <ImageComponent
              src={"/landing/ourValues/3.png"}
              webpSrc={"/landing/ourValues/3.webp"}
              className={
                "max-h-[500px] w-full rounded-[2rem] object-cover shadow-md"
              }
            />
            {/* <img
              className="max-h-[500px] w-full rounded-[2rem] object-cover shadow-md"
              src="/landing/ourValues/3.png"
              alt=""
            /> */}
          </div>
        </div>
      </Wrapper>
    </section>
  );
  z;
};

export default OurValues;
