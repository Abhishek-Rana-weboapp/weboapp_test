import { useState } from "react";
import HeroLayout from "../../components/layout/HeroLayout";
import RequestServiceForm from "../../components/forms/RequestServiceForm";
import StaggeredAnimations from "../../components/animateComponents/StaggeredAnimations";
import { motion } from "framer-motion";
import { animVariants } from "../../utils/axios/animations/animations";
import FadeUpHeading from "../../components/animateComponents/FadeUpHeading";
import { FadeUp } from "../../components/animateComponents/FadeUp";
import FadeUpParagraph from "../../components/animateComponents/FadeUpParagraph";

const HealthCare = () => {
  const serviceOfferings = [
    "Robust Data Engines",
    "Comprehensive Hospital Information Systems",
    "Internet of Medical Things",
    "Electronic Health Records (EHR)",
    "Remote Patient Care Solutions",
    "Fitness and Health Awareness Apps",
  ];

  const healthApplications = [
    { title: "Mobile Healthcare Apps", icon:"/icons/healthcareApplications/mobile-app.png" },
    { title: "Healthcare Analytics Solution", icon:"/icons/healthcareApplications/healthcare.png" },
    { title: "Digital Consumer Experience", icon:"/icons/healthcareApplications/digital consumer.png" },
    { title: "Disease and Wellness Solutions", icon:"/icons/healthcareApplications/disease.png" },
    { title: "Electronic Data Management Systems", icon:"/icons/healthcareApplications/electronic data management.png" },
    { title: "Blockchain", icon:"/icons/healthcareApplications/blockchain.png" },
    { title: "Telehealth Services", icon:"/icons/healthcareApplications/telehealth.png" },
    { title: "Artificial Intelligence", icon:"/icons/healthcareApplications/Ai.png" },
    { title: "Medical Chatbots", icon:"/icons/healthcareApplications/chat bot.png" },
    { title: "Cloud Computing", icon:"/icons/healthcareApplications/cloud computing.png" },
    { title: "Digital Supply Chains", icon:"/icons/healthcareApplications/supply-chain-management.png" },
    { title: "Hyper-Personalized Medicine", icon:"/icons/healthcareApplications/hyper personalized.png" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <motion.div
    variants={animVariants}
    initial="initial"
    animate="animate"
    exit={"exit"}
  >
    <div className="space-y-20">
      <div>
        <HeroLayout
          imgUrl={"/healthcareHero.png"}
          heading={
            "Transforming healthcare with AI-driven, end-to-end tech solutions."
          }
          buttonLabel={"Read More"}
        />
      </div>
      <div className="mx-auto max-w-[1300px] space-y-10 p-4">
        <FadeUpHeading className="text-2xl md:text-5xl">
          Empowering Resilience: The Future of Healthcare
        </FadeUpHeading>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="content-center">
            <FadeUpParagraph className="text-start md:text-2xl">
              The current healthcare landscape faces unprecedented challenges,
              pushing the ecosystem to its limits. The pandemic has highlighted
              the critical need for a patient-centered approach to strengthen
              resilience across the supply chain. It has also underscored the
              importance for healthcare organizations to accelerate digital
              transformation, enabling them to enhance patient experiences and
              effectively manage growing demands
            </FadeUpParagraph>
          </div>
          <FadeUp>
            <video
              className="aspect-video h-full w-full"
              autoPlay
              muted
              loop
              src="/healthcareIllustration.mp4"
            />
          </FadeUp>
        </div>
      </div>

      {/* Service Offerings */}

      <div className="mx-auto max-w-[1300px] space-y-20 p-4">
        <h2 className="text-start text-2xl md:text-5xl">Service Offerings</h2>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="relative min-h-80">
            <img
              src="/dashboard.jpg"
              className="absolute h-full w-full rounded-xl object-cover"
              alt=""
            />
            <img
              src="/mobileApp.png"
              className="absolute right-4 top-2 h-[96%] object-cover"
              alt=""
            />
          </div>
          <div className="content-center p-5">
            <div className="mx-auto space-y-10 md:w-3/4">
              {serviceOfferings.map((offering, index) => {
                return (
                  <p
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`text-start font-inter transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer md:text-3xl ${hoveredIndex === index ? "filter-none" : hoveredIndex === null ? "" : "blur-[2px] filter"}`}
                  >
                    {offering}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/*Software Applications and solutions for healthcare industry  */}

      <div>
        <div className="grid-cols-[repeat(auto-fit,minmax(300px,_1fr))] mx-auto grid gap-7 max-w-[1300px]">
          {healthApplications.map((app, index)=>{
            return <StaggeredAnimations>
               <div className="w-full h-72 p-4 bg-[#DCEEFA] hover:bg-[#B5BBFF] hover:scale-105 transition-all duration-200 ease-in-out  content-center rounded-xl">
              <img src={app.icon} alt="" className="w-24 h-24 mx-auto" />
                <h2 className="md:text-3xl text-black/60">{app.title}</h2>
              </div>
            </StaggeredAnimations>
          })}
        </div>
      </div>

      {/* Complete process of development */}

      <div className="mx-auto max-w-[1300px] space-y-20 px-5 py-10">
        <FadeUpHeading >
          Complete process of Development
        </FadeUpHeading>
        <FadeUp><img src="/developmentSteps.webp" className="object-cover" alt="" /></FadeUp>
      </div>

      {/* requestForm */}

      <div className="mx-auto max-w-[1300px]">
        <RequestServiceForm />
      </div>
    </div>
    </motion.div>
  );
};

export default HealthCare;
