import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import FadeUpParagraph from "../../../components/animateComponents/FadeUpParagraph";
import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/axios/animations/animations";

const WhatSetsUsApart = () => {
  const points = [
    {
      title: "Strategic Design Thinking",
      description:
        "We design with your business goals in mind, ensuring impactful results.",
      icon: "/icons/aboutpage/strategicDesign.png",
    },
    {
      title: "Collaborative Process",
      description:
        "We work closely with you, blending your vision with our creative expertise.",
      icon: "/icons/about/flexible.png",
    },
    {
      title: "Proven Track Record",
      description:
        "Our success is reflected in the achievements of our satisfied clients.",
      icon: "/icons/aboutpage/image (9).png",
    },
    {
      title: "End-to-End Service Offering",
      description: "From branding to launch, we cover all your design needs.",
      icon: "/icons/about/project-management.png",
    },
    {
      title: "Innovation-Driven Approach",
      description:
        "We leverage the latest trends to keep your brand ahead of the curve.",
      icon: "/icons/healthcareApplications/hyper personalized.png",
    },
  ];

  const borderClasses = {
    0: "md:border-r border-t-0 border-b-0 border-l-0",
    1: "md:border-r border-t-0 border-b-0 border-l-0",
    2: "border-0",
    3: "md:border-r md:border-t border-b-0 border-l-0",
    4: "md:border-t border-b-0 border-l-0 border-r-0",
  };

  return (
    <div className="mx-auto max-w-[1500px] space-y-6 p-8">
      <FadeUpHeading>What Sets Us Apart</FadeUpHeading>
      <FadeUpParagraph className={"mx-auto max-w-2xl md:text-lg"}>
        Every detail counts. Discover how our tailored solutions elevate your
        brand, ensuring flawless execution and stunning results.
      </FadeUpParagraph>

      <div className="flex flex-wrap rounded-3xl border">
        {points.map((point, index) => {
          return (
            <motion.div
              variants={{
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
              }}
              key={index}
              initial="initial"
              whileInView={"animate"}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.1 * index,
              }}
              viewport={{ margin: "0px 0px -100px 0px", once:true }}
              className={`flex h-60 max-md:sticky max-md:border-0 top-24 max-md:bg-white flex-col items-start justify-center gap-8 border p-5 text-start ${borderClasses[index]} ${[0, 1, 2].includes(index) ? "md:w-1/3" : "md:w-1/2"}`}
            >
              <img
                className="size-16 md:size-20 object-cover"
                src={point.icon}
                alt=""
              />
              <div className="flex flex-col gap-2">
                <h2 className="md:text-3xl">{point.title}</h2>
                <p className="text-black/70">{point.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatSetsUsApart;
