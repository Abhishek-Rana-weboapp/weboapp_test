import { useParams } from "react-router-dom";
import FadeUpHeading from "../../components/animateComponents/FadeUpHeading";
import FadeUpParagraph from "../../components/animateComponents/FadeUpParagraph";
import Wrapper from "../../components/Wrapper";
import { DetailCard } from "../home/sections/About";
import { useRef, useState } from "react";
import { projects } from "../../data/portfolioData";
import { FadeUp } from "../../components/animateComponents/FadeUp";
import { fadeUp } from "../../utils/axios/animations/animations";
import { motion } from "framer-motion";
import ImageComponent from "../../components/image/ImageComponent";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(
    projects.find((project) => parseInt(project.id) === parseInt(id)),
  );
  const ref = useRef(null);

  return (
    <div className="space-y-20">
      <div className="h-[60vh] content-center bg-[#eff5ff]">
        <Wrapper className={"space-y-3"}>
          <FadeUpHeading className={"mx-auto max-w-3xl"}>
            {project?.title}
          </FadeUpHeading>
          <FadeUpParagraph>{project?.description}</FadeUpParagraph>
        </Wrapper>
      </div>

      {/* Client Overview Section */}
      <Wrapper>
        <div className="flex flex-col gap-4 py-20 text-start md:flex-row">
          <div className="content-center space-y-4 p-3">
            <FadeUpHeading margin={"0px"} className={"md:text-4xl"}>
              Client Overview
            </FadeUpHeading>
            <FadeUpParagraph margin={"0px"} className={"text-start"}>
              {project.client?.description}
            </FadeUpParagraph>

          </div>
          <div className="md:p-4">
            <motion.img
              variants={fadeUp}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              src={"/client.webp"}
              className="h-full max-md:max-h-[400px] rounded-lg object-cover shadow-lg"
              alt=""
            />
          </div>
        </div>
      </Wrapper>

      {/* Challenges Section */}
      <div className="bg-neutral-100 py-20">
        <Wrapper className={"space-y-16"}>
          <FadeUpHeading>Challenges</FadeUpHeading>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 text-primary-400">
            {project?.challenges?.points?.map((challenge, index) => {
              return (
                <FadeUp key={index} delay={index * 0.5} className={"space-y-4 rounded-lg bg-white p-4 text-start"}>
                    {challenge.icon && challenge.icon}
                    <h3 className="text-lg font-bold md:text-xl">
                      {challenge.title}
                    </h3>
                    <p className="text-black/70">{challenge.description}</p>
                </FadeUp>
              );
            })}
          </div>
        </Wrapper>
      </div>

      {/* Solution Section */}
      <div className="py-20">
        <Wrapper className={"space-y-10"}>
          <FadeUpHeading>Our Solution</FadeUpHeading>
          <FadeUp>
            <div className="flex flex-col gap-6 md:flex-row">
              <div>
                <ImageComponent src={project?.results?.image} className={"h-full max-md:max-h-[400px] rounded-lg object-cover shadow-lg"}  />
                {/* <img
                  src="/automation.jpeg"
                  alt=""
                  className="h-full max-md:max-h-[400px] rounded-lg object-cover shadow-lg"
                /> */}
              </div>
              <div className="content-center space-y-6 text-start">
                <h3>{project?.solution?.description}</h3>
                {project?.solution?.points?.map((solution, index) => {
                  return (
                    <div className="flex" key={index}>
                      {solution.icon && solution.icon}
                      <div className="space-y-1">
                        <h5 className="text-lg font-semibold md:text-xl">
                          {solution.title}
                        </h5>
                        <p className="text-black/70 max-md:text-sm">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeUp>
        </Wrapper>
      </div>

      {/* implementation section */}
      <div className="bg-neutral-100 py-10">
        <Wrapper className={"space-y-10"}>
          <FadeUpHeading>Implementation Process</FadeUpHeading>
          <FadeUp>
            <div ref={ref} className="relative mx-auto max-w-6xl overflow-hidden">
              {project?.implementation?.points?.map((impPoint, index) => {
                return (
                  <div
                    key={index}
                    className={`relative mt-10 flex flex-col pl-8 ${index % 2 === 0 ? "md:items-start" : "md:items-end"}`}
                  >
                    <div className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-blue-400 md:left-1/2 md:-translate-x-1/2"></div>
                    <div
                      className={`flex flex-col md:w-1/2 ${index % 2 === 0 ? "md:items-end md:pr-12" : "md:items-start md:pl-12"}`}
                    >
                      <h2 className="w-max text-xl font-semibold md:text-3xl">
                        {impPoint.title}
                      </h2>
                      <p
                        className={`text-start ${index % 2 === 0 ? "md:text-end" : "md:text-start"} text-black/70`}
                      >
                        {impPoint.description}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="absolute left-2 top-0 h-full w-1 bg-blue-400 md:left-1/2 md:-translate-x-1/2" />
            </div>
          </FadeUp>
        </Wrapper>
      </div>

      {/* Results Section */}
      <Wrapper className={"space-y-7"}>
        <FadeUpHeading>Results & Impact</FadeUpHeading>

        <FadeUp>
           <ImageComponent webpSrc={project?.results?.image}  alt="" className={"w-full h-full max-w-[900px] max-h-[900px] mx-auto"} />
        </FadeUp>

        <FadeUp>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2">
            {project?.results?.points?.map((result, index) => {
              return (
                <DetailCard
                  key={index}
                  data={result}
                  containerClass={"justify-center "}
                  cardClass={" p-4 rounded-md"}
                  counterClass={"md:text-4xl font-semibold text-blue-700"}
                  iconClass={"text-blue-700 md:text-4xl font-semibold"}
                />
              );
            })}
          </div>
        </FadeUp>
      </Wrapper>

      {/* Technologies Section */}
      <div className="bg-neutral-100">
        <Wrapper className={"space-y-10 py-10"}>
          <FadeUpHeading>Technologies Used</FadeUpHeading>
          <FadeUp>
            <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-5">
              {project?.technologies?.points?.map((tech, index) => {
                return (
                  <div
                    className="flex w-full items-center gap-4 rounded-md bg-white p-4 text-start shadow"
                    key={index}
                  >
                    <ImageComponent src={tech.img} className="h-10 w-10 object-contain" alt="" />
                    <div>
                      <h3 className="font-semibold md:text-xl">{tech.title}</h3>
                      <p className="text-sm text-black/70">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeUp>
        </Wrapper>
      </div>
    </div>
  );
};

export default ProjectDetails;
