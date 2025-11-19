import React, { useRef } from "react";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import FadeUpParagraph from "../../../components/animateComponents/FadeUpParagraph";
import Wrapper from "../../../components/Wrapper";
import { StackCard } from "../../../components/cards/StackCard";
import { useScroll, motion } from "framer-motion";
import { fadeUp } from "../../../utils/axios/animations/animations";
import Marquee from "../../../components/marquee/Marquee";
import { projects } from "../../../data/portfolioData";

// const projects = [
//   {
//     id: 1,
//     title: "Budget Planner Finance App",
//     description:
//       "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
//     points: ["Digital Brand Assets", "Brand Strategy", "UX/UI design"],
//     image1: "/portfolio/1.png",
//     image2: "/portfolio/2.png",
//     link: "https://www.example.com",
//     color: "#F4F2EF",
//     pointColor: "#ffffff",
//   },
//   {
//     id: 2,
//     title: "Bitbo - Bitcoin Stats & Data",
//     description:
//       "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
//     points: [
//       "Research",
//       "UX/UI Design",
//       "Framer Development",
//     ],
//     image1: "/portfolio/3.png",
//     image2: "/portfolio/4.png",
//     link: "https://www.example.com",
//     color: "#E5DBEB",
//     pointColor: "#f4edf7",
//   },
//   {
//     id: 3,
//     title: "Digital Product Design Solution",
//     description:
//       "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
//     points: ["UX Audit", " Design System", "High-fidelity Prototyping"],
//     image1: "/portfolio/1.png",
//     image2: "/portfolio/2.png",
//     link: "https://www.example.com",
//     color: "#D2E8C8",
//     pointColor: "#e5fadc",
//   },
// ];

const ProjectsSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const technologiesLogos = [
    "/icons/technologies/html.png",
    "/icons/technologies/css.png",
    "/icons/technologies/js.png",
    "/icons/technologies/react.png",
    "/icons/technologies/nodejs.png",
    "/icons/technologies/express.png",
    "/icons/technologies/tailwind.png",
    "/icons/technologies/MongoDB.png",
    "/icons/technologies/SQLite.png",
    "/icons/technologies/nodejs.png",
  ];

  return (
    <Wrapper className={"max-w-[1600px] p-0"}>
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView={"animate"}
        viewport={{ margin: "0px 0px -200px 0px", once: true }}
      >
        <Marquee duration={20}>
          {technologiesLogos.map((tech, index) => {
            return (
              <div
                key={index}
                className="mx-4 sm:h-32 w-24 sm:w-32 h-24 rounded-full bg-neutral-200 p-4"
              >
                <img src={tech} className="h-full w-full object-cover" alt="" />
              </div>
            );
          })}
        </Marquee>
      </motion.div>
      <FadeUpHeading className={"mt-20 mb-4"}>Explore our Projects</FadeUpHeading>
      <FadeUpParagraph>
        Our outputs blend inventive ideas with practical methods, ensuring they
        are both unique and impactful.
      </FadeUpParagraph>

      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView={"animate"}
        viewport={{ margin: "0px 0px -200px 0px", once: true }}
        ref={container}
        className="mt-10 p-2"
      >
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <StackCard
              key={project.id}
              range={[i * 0.2, 1]}
              index={i}
              progress={scrollYProgress}
              data={project}
              targetScale={targetScale}
            />
          );
        })}
      </motion.div>
    </Wrapper>
  );
};

export default ProjectsSection;
