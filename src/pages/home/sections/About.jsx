import { useMediaQuery } from "react-responsive";
import AnimatedCounter from "../../../components/animateComponents/AnimatedCounter";
import FadeUpParagraph from "../../../components/animateComponents/FadeUpParagraph";
import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/axios/animations/animations";
import { Pin } from "../../../components/buttons/Pin";
import { useNavigate } from "react-router-dom";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
import { cn } from "../../../utils/axios/helperfunctions";
import { DollarSign } from "lucide-react";

const About = () => {
  const isDesktop = useMediaQuery({ query: "min-width : 786px" });
  const navigate = useNavigate();

  return (
    <section className="mx-auto my-20 w-full p-4 md:w-3/4">
      <h2 className="text-[2rem] leading-[2.5rem] text-primary-900 font-semibold text-center mb-10 max-w-lg mx-auto">About us</h2>
      <p className="mb-10 text-xl tracking-wide text-black/60 md:text-2xl">
        Weboapp Discovery : A leader in next-gen digital services, specializing
        in innovative web, AI, and IT solutions.
      </p>
      <div
        className="mb-20 flex gap-3"
      >
        <DetailCard
          data={{
            to: 20,
            description: "countries where we have trusting clients",
          }}
        />
        <DetailCard
          data={{
            to: 50,
            description: "billion total revenue",
            icon: <DollarSign size={isDesktop ? 40 : 20} />,
          }}
        />
        <DetailCard
          data={{
            to: 20,
            description: "countries where we have trusting clients",
          }}
        />
      </div>
        <motion.div variants={fadeUp}
        initial="initial"
        whileInView={"animate"}
        viewport={{ margin: "0px 0px -200px 0px", once: true }}>
          <Pin onClick={()=>navigate("/about")} className={"mx-auto"}>Know More</Pin>
        </motion.div>
    </section>
  );
};

export default About;

export const DetailCard = ({ data, counterClass, containerClass, cardClass,iconClass }) => {
  return (
    <div className={cn("mt-10 flex-1", cardClass)}>
      <div className={cn("flex items-center justify-center", containerClass)}>
        <AnimatedCounter
          from={0}
          to={data.to}
          className={cn("font-mono text-xl md:text-5xl", counterClass)}
        />
        <span className={cn(iconClass)}>{data?.icon && data.icon}</span>
      </div>
      <p className="md:text-xl text-sm text-black/60">{data.description}</p>
    </div>
  );
};
