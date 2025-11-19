import React from "react";
import Wrapper from "../../../components/Wrapper";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import useFetchJobs from "../../../hooks/useFetchJobs";
import Button from "../../../components/buttons/Button";
import { Pin } from "../../../components/buttons/Pin";
import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/axios/animations/animations";
import { ArrowRight } from "lucide-react";

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
        <FadeUpHeading>Open Vacancies</FadeUpHeading>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-4">
          {jobs?.map((job, index) => {
            return (
              <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ margin: "0px 0px -200px 0px", once: true }}
                key={index}
                className="flex flex-col items-start justify-between space-y-8 rounded-3xl border p-5 text-start shadow"
              >
                <h2 className="text-lg font-semibold md:text-3xl">
                  {job.title}
                </h2>
                <div className="space-y-4">
                  <p className="md:text-lg">{job.description}</p>
                  <Button>
                    Apply Now <span className="text-white/50">|</span>{" "}
                    <ArrowRight size={15} />
                  </Button>
                </div>
              </motion.div>
            );
          })}
          <Pin>Show All Vacancies</Pin>
        </div>
      </div>
    </Wrapper>
  );
};

export default OpenVacancies;
