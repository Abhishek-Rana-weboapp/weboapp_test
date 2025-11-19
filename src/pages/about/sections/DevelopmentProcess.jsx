import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/axios/animations/animations";
import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";

const DevelopmentProcess = () => {
  const points = [
    {
      title: "Discovery and Planning",
      description:
        "Understand client goals, target audience, and technical requirements. Create a project roadmap, including timelines and deliverables.",
        icon:"/icons/aboutpage/1.png"
    },
    {
      title: "Design & Prototyping",
      description:
        "Develop wireframes, mockups, and a user-focused UI/UX design. Gather client feedback to refine the design.",
        icon:"/icons/aboutpage/2.png"
    },
    {
      title: "Development",
      description:
        "Implement front-end and back-end development using the latest frameworks and technologies.",
        icon:"/icons/aboutpage/1.png"
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Conduct rigorous testing for functionality, performance, and security. Fix bugs and ensure smooth user experiences.",
        icon:"/icons/aboutpage/1.png"
    },
    {
      title: "Deployment & Production",
      description:
        "Our deployment process is incremental and ongoing. Every increment when confirmed will be integrated and deployed to final production system",
        icon:"/icons/aboutpage/1.png"
    },
    {
      title: "Continuous Improvement",
      description:
        "Moving Forward from the initial build, Improving bugs, Planning for the next build and repeating development cycle.",
        icon:"/icons/aboutpage/1.png"
    },
  ];



  return (
    <div className="bg-neutral-200 md:py-10">
      <div className="mx-auto max-w-[1500px] space-y-8 p-4 font-semibold ">
        <FadeUpHeading className={"max-md:sticky top-24 "}>Our Development Process</FadeUpHeading>
        <motion.div
          className="grid grid-cols-[repeat(auto-fit,minmax(350px,_1fr))] gap-4 bg-white rounded-3xl md:p-6"
        >
          {points.map((point, index) => {
            return (
              <motion.div
                variants={ {initial: { opacity: 0, y: 40,  },
                animate: { opacity: 1, y: 0,  }}}
                key={index}
                initial="initial"
                whileInView={"animate"}
                transition={{duration:0.5, ease:"easeInOut", delay: 0.1 * index }}
                viewport={{ margin: "0px 0px -100px 0px", once:true }}
                style={{ background: point.color }}
                className="max-md:sticky top-36 content-center space-y-4 bg-white rounded-md p-8 text-start max-md:min-h-[300px] md:my-4 group"
              >
                <div className="relative w-max">
                  <div className={`text-6xl absolute font-bold -z-1 text-black/20 -top-7 left-1/2 -translate-x-1/2 w-max group-hover:text-sky-600/70 transition-colors duration-300 ease-in-out`}>{(index+1).toString().padStart(2,"0")}</div>
                  <img
                    className=" size-12 md:size-16 object-cover"
                    src={point.icon}
                    alt=""
                  />
                </div>
                <h2 className="text-xl md:text-2xl">{point.title}</h2>
                <p className="text-black/70 md:text-lg">{point.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
