import React from "react";
import Wrapper from "../../../components/Wrapper";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import FadeUpParagraph from "../../../components/animateComponents/FadeUpParagraph";
import Marquee from "../../../components/marquee/Marquee";
import StarRating from "../../../components/cards/StarRating";
import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/axios/animations/animations";

const ProfessionalTrust = () => {
  const data = [
    {
      name: "John Doe",
      description: "CEO, Tech Innovations",
      testimonial:
        "Working with Athos 2.0 has been a game-changer for our app's user experience.Their innovative UI designs and seamless Framer development have elevated our product to new heights. Kudos to Athos for their expertise and dedication.",
      src: "/Bg1.jpg",
    },
    {
      name: "John Doe",
      description: "CEO, Tech Innovations",
      testimonial:
        "Working with Weboappdiscovery has been a game-changer for our app's user experience.Their innovative UI designs and seamless Framer development have elevated our product to new heights. Kudos to Athos for their expertise and dedication.",
      src: "/Bg1.jpg",
    },
    {
      name: "John Doe",
      description: "CEO, Tech Innovations",
      testimonial:
        "Working with Weboappdiscovery has been a game-changer for our app's user experience.Their innovative UI designs and seamless Framer development have elevated our product to new heights. Kudos to Athos for their expertise and dedication.",
      src: "/Bg1.jpg",
    },
    {
      name: "John Doe",
      description: "CEO, Tech Innovations",
      testimonial:
        "Working with Weboappdiscovery has been a game-changer for our app's user experience.Their innovative UI designs and seamless Framer development have elevated our product to new heights. Kudos to Athos for their expertise and dedication.",
      src: "/Bg1.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-t from-[#F1F7FF] to-[#fff]">
      <Wrapper className={"md:p-8"}>
        <FadeUpHeading className={"mb-4"}>
          Trusted by Professionals
        </FadeUpHeading>
        <FadeUpParagraph className={"mb-8"}>
          Although a vast majority of my customer testimonials are safeguarded
          by non-disclosure agreements (due to highly confidential white-label
          agency matters), I've managed to subtly include a few cherished ones
          from my former associates.
        </FadeUpParagraph>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView={"animate"}
          viewport={{ margin: "0px 0px -200px 0px", once: true }}
        >
          <Marquee duration={50}>
            {data.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mx-5 flex max-w-[400px] flex-col gap-4 divide-y rounded-3xl bg-[#F4F2EF] p-4 py-6 text-start shadow"
                >
                  <div>
                    <StarRating rating={5} />
                    <p>{data.testimonial}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 overflow-hidden rounded-full">
                      <img
                        className="h-full w-full object-cover"
                        src={data.src}
                        alt=""
                      />
                    </div>
                    <div className="p-2">
                      <h2 className="font-semibold">{data.name}</h2>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </motion.div>
      </Wrapper>
    </div>
  );
};

export default ProfessionalTrust;
