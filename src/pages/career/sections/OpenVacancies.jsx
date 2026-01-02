import React from "react";
import Wrapper from "../../../components/Wrapper";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import FadeUpParagraph from "../../../components/animateComponents/FadeUpParagraph";
import useFetchJobs from "../../../hooks/useFetchJobs";
import Button from "../../../components/buttons/Button";
import { Pin } from "../../../components/buttons/Pin";
import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/axios/animations/animations";
import { ArrowRight, MapPin } from "lucide-react";

const OpenVacancies = () => {
  const jobs = [
    {
      title: "Python Developer",
      description:
        "We are looking for a skilled Python developer to join our team.",
      location: "Remote",
    },
    {
      title: "React Developer",
      description:
        "We are looking for a skilled React developer to join our team.",
      location: "Remote",
    },
    {
      title: "Zoho Developer",
      description:
        "We are looking for a skilled Zoho developer to join our team.",
      location: "Remote",
    },
  ];

  // const {jobs}
  //  = useFetchJobs()
  return (
    <Wrapper className={"pb-20"}>
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <FadeUpHeading>Open Vacancies</FadeUpHeading>
          <FadeUpParagraph className="max-w-2xl mx-auto">
            Discover exciting opportunities to grow your career with us. 
            We're always looking for talented individuals to join our team.
          </FadeUpParagraph>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-6">
          {jobs?.map((job, index) => {
            return (
              <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ margin: "0px 0px -200px 0px", once: true }}
                key={index}
                className="flex flex-col items-start justify-between space-y-6 rounded-3xl border border-gray-200 bg-white p-6 text-start shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-3 w-full">
                  <h2 className="text-xl font-semibold md:text-2xl text-primary-900">
                    {job.title}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} />
                    <span className="text-sm md:text-base">{job.location}</span>
                  </div>
                  <p className="text-gray-600 md:text-base leading-relaxed">
                    {job.description}
                  </p>
                </div>
                <Button className="w-full md:w-auto">
                  Apply Now <span className="text-white/50">|</span>{" "}
                  <ArrowRight size={15} />
                </Button>
              </motion.div>
            );
          })}
          {jobs?.length === 0 && (
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "0px 0px -200px 0px", once: true }}
              className="col-span-full text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                No open positions at the moment. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
        {jobs?.length > 0 && (
          <div className="text-center pt-4">
            <Pin>Show All Vacancies</Pin>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default OpenVacancies;
