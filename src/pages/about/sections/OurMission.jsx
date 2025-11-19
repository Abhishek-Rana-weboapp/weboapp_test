import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/axios/animations/animations";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import Wrapper from "../../../components/Wrapper";

const OurMission = () => {
  const points = [
    {
      title: "Innovation",
      description:
        "Deliver cutting-edge technology solutions to drive digital transformation.",
        color:"#F3F7FF",
        icon:"/icons/healthcareApplications/mobile-app.png"
    },
    {
      title: "Scalability",
      description:
        "Build robust and flexible applications that grow with businesses.",
        color:"#FBF6EF",
        icon:"/icons/healthcareApplications/mobile-app.png"
    },
    {
      title: "Security",
      description:
        "Ensure reliable and secure platforms for seamless operations.",
        color:"#EEF9FE",
        icon:"/icons/healthcareApplications/mobile-app.png"
    },
    {
      title: "Empowerment",
      description:
        "Help businesses succeed by turning ideas into impactful digital experiences.",
        color:"#F4EDFC",
        icon:"/icons/healthcareApplications/mobile-app.png"
    },
  ];
  return (
    <Wrapper className="md:py-10 space-y-8">
      <FadeUpHeading >Our Mission</FadeUpHeading>
      <motion.div initial="initial" whileInView={"animate"} transition={{staggerChildren:0.1}} viewport={{margin:"0px 0px -200px 0px", once:true}} className="grid grid-cols-[repeat(auto-fit,minmax(350px,_1fr))]  gap-4">
          {points.map((point, index) => {
            return (
              <motion.div variants={fadeUp} key={index} style={{background:point.color}} className="md:my-4 max-md:min-h-[300px] content-center rounded-md p-8 shadow-md space-y-4 max-md:sticky top-24">
                <img className="md:size-24 size-16 mx-auto" src={point.icon} alt="" />
                <h2 className="md:text-2xl text-xl">{point.title}</h2>
                <p className="md:text-lg text-black/70">{point.description}</p>
              </motion.div>
            );
          })}
      </motion.div>
    </Wrapper>
  );
};

export default OurMission;
