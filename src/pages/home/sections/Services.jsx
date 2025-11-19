import { NavLink } from "react-router-dom"
import Wrapper from "../../../components/Wrapper"
import {
  ArrowRight,
  Brain,
  Code2,
  Smartphone,
  MonitorSmartphone,
  Bug,
  Network,
  Database,
  Cloud,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import Marquee from "../../../components/marquee/Marquee";

export const services = [
  {
    name: "AI Automation",
    description:
      "Integrate intelligent workflows and AI-driven automation to boost efficiency and reduce manual processes across your business operations.",
    icon: Brain,
    color: "#8B5CF6", // violet
  },
  {
    name: "Custom Software Development",
    description:
      "Tailored software solutions designed from the ground up to meet your unique business needs, scale, and workflow requirements.",
    icon: Code2,
    color: "#3B82F6", // blue
  },
  {
    name: "Web Development",
    description:
      "Modern, responsive, and high-performance web applications built with cutting-edge technologies and best UI/UX practices.",
    icon: MonitorSmartphone,
    color: "#0EA5E9", // sky blue
  },
  {
    name: "Mobile App Development",
    description:
      "Beautiful and robust mobile applications for Android and iOS, delivering seamless user experiences and strong performance.",
    icon: Smartphone,
    color: "#10B981", // emerald green
  },
  {
    name: "Quality Assurance & Testing",
    description:
      "Comprehensive manual and automated testing to ensure flawless functionality, performance, and security before launch.",
    icon: Bug,
    color: "#F59E0B", // amber
  },
  {
    name: "Cloud & DevOps",
    description:
      "Streamline deployment, scalability, and infrastructure with our DevOps and cloud integration expertise for AWS, GCP, and Azure.",
    icon: Cloud,
    color: "#38BDF8", // light blue
  },
  {
    name: "System Integration",
    description:
      "Connect disparate systems and APIs for smooth data flow, ensuring all your tools and platforms work harmoniously together.",
    icon: Network,
    color: "#6366F1", // indigo
  },
  {
    name: "Data Engineering",
    description:
      "Build scalable data pipelines and analytics platforms that empower data-driven decision making across your organization.",
    icon: Database,
    color: "#06B6D4", // cyan
  },
  {
    name: "AI & Machine Learning Solutions",
    description:
      "Leverage predictive analytics, NLP, and computer vision to extract real value from your data and drive smarter business insights.",
    icon: Cpu,
    color: "#EC4899", // pink
  },
];

export const technologies = [
  // Frontend
  { name: "React", url: "" },
  { name: "Next.js", url: "" },
  { name: "Vue.js", url: "" },
  { name: "Angular", url: "" },
  { name: "Tailwind CSS", url: "" },
  { name: "Sass", url: "" },
  { name: "Redux", url: "" },
  { name: "Vite", url: "" },

  {name:"zoho", url:""},
  {name:"powerbi", url:""},

  // Backend
  { name: "Node.js", url: "" },
  { name: "Express.js", url: "" },
  { name: "Django", url: "" },
  { name: "Flask", url: "" },
  { name: "Laravel", url: "" },
  { name: "Spring Boot", url: "" },
  { name: "FastAPI", url: "" },
  { name: "NestJS", url: "" },

  // Mobile
  { name: "React Native", url: "" },
  { name: "Flutter", url: "" },
  { name: "Swift", url: "" },
  { name: "Kotlin", url: "" },

  // Databases
  { name: "MongoDB", url: "" },
  { name: "PostgreSQL", url: "" },
  { name: "MySQL", url: "" },
  { name: "Firebase", url: "" },
  { name: "Redis", url: "" },
  { name: "SQLite", url: "" },
  { name: "Supabase", url: "" },

  // Cloud / DevOps
  { name: "AWS", url: "" },
  { name: "Google Cloud", url: "" },
  { name: "Microsoft Azure", url: "" },
  { name: "Docker", url: "" },
  { name: "Kubernetes", url: "" },
  { name: "Git", url: "" },
  { name: "GitHub Actions", url: "" },
  { name: "Jenkins", url: "" },
  { name: "NGINX", url: "" },
  { name: "Vercel", url: "" },
  { name: "Netlify", url: "" },

  // AI / Data
  { name: "Python", url: "" },
  { name: "TensorFlow", url: "" },
  { name: "PyTorch", url: "" },
  { name: "Scikit-learn", url: "" },
  { name: "OpenAI", url: "" },
  { name: "Pandas", url: "" },
  { name: "NumPy", url: "" },

  // Tools / Languages / APIs
  { name: "TypeScript", url: "" },
  { name: "JavaScript", url: "" },
  { name: "GraphQL", url: "" },
  { name: "REST API", url: "" },
  { name: "Go", url: "" },
  { name: "Rust", url: "" },
  { name: "C#", url: "" },
  { name: "Java", url: "" },
  { name: "PHP", url: "" },
  { name: "Bash", url: "" },
  { name: "Linux", url: "" },
];




const Services = () => {
  return (
    <>
    
    <div className="mb-8 relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[170%] w-[300%] md:h-[130%] h-[120%] rounded-[50%] bg-neutral-100 -z-20"></div>
      <Wrapper>
        <div className="grid md:grid-cols-2 justify-between items-center gap-4">
          <h2 className="text-[2rem] leading-[2.5rem] text-primary-900 font-semibold text-start max-w-lg">From Concept to Completion: Our Services</h2>
          <div className="flex md:justify-end items-end h-full">
            <NavLink to={"/services"} className={"relative flex items-center gap-2 text-primary-700 font-semibold py-2 hover:scale-[1.03] hover:text-primary-900 transition-all duration-150 ease-out before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1px] before:bg-primary-700 before:z-[-1] before:rounded-full"}>
              Everything we do <ArrowRight />
            </NavLink>
          </div>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((service, index)=>(
              <div key={index} className="flex flex-col item-start text-start gap-3 md:p-4">
                <service.icon style={{color: service.color}} />
                <h3 className="sm:text-3xl text-2xl font-semibold">{service.name}</h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
        </div>
      </Wrapper>
    </div>
    <div className="mt-32 py-20">
      <h3 className="text-[2rem] leading-[2.5rem] text-primary-900 font-semibold text-center max-w-lg mx-auto">We have your Tech Stack</h3>
      <p className="text-center text-gray-500 max-w-lg mx-auto font-medium my-5">Our team is skilled in a wide range of technologies and tools to help you build your next project.</p>
      <Marquee duration={200}>
          {technologies.map((service, index)=>(
          <NavLink key={index} to={service.url || "#"} className="mx-4 select-none hover:text-primary-700 transition-all duration-150 ease-out text-5xl font-extrabold text-neutral-300 uppercase p-2">
            {service.name}
          </NavLink>
         ))}
      </Marquee>
    </div>
    </>
  )
}

export default Services



// // import Wrapper from "../../../components/wrappers/Wrapper"
// // import { motion } from "framer-motion"
// // import { fadeInFromBottomVariants } from "../../../utils/axios/animations/animations"
// // const Services = () => {
// //   return (
// //     <div className="bg-[radial-gradient(120%_29%_at_50%_100%,_#e9ecf5,_#fff)] min-h-[60vh]">
// //        <Wrapper className={"py-10"}>
// //              <motion.h2 variants={fadeInFromBottomVariants} initial="initial" whileInView="animate"  viewport={{
// //               margin: "0px 0px -100px 0px"
// //              }} className="md:text-4xl text-2xl text-primary-900 font-semibold">How We Can Help</motion.h2>

// //              <motion.p variants={fadeInFromBottomVariants} initial="initial" whileInView="animate"  viewport={{
// //               margin: "0px 0px -100px 0px"}}>We deliver maximum output</motion.p>

// //              <div className="">
                
// //              </div>
// //        </Wrapper>
// //     </div>
// //   )
// // }

// // export default Services




// import React, { useEffect, useRef, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
// import Button from "../../../components/buttons/Button";
// import { fadeUp } from "../../../utils/axios/animations/animations";
// import ImageComponent from "../../../components/image/ImageComponent";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// const services = [
//   {
//     label: "Web Development",
//     link: "/services/webdev",
//     src: "/landing/services/web.png",
//     webpSrc: "/landing/services/web.webp",
//     color:
//       "bg-gradient-to-t from-[#C2DBFF] via-[#D0E3FF] to-[#fff] from-20% via-70% to-100%",
//     paragraphs: [
//       "Websites can help businesses expand their operations and access distant markets. We are supporting both front end and back end development activities. Our web development process is systematic which involves the use of best engineering practices ongoing planning, collaboration, and construction.",
//       "The ultimate vision is to provide customer satisfaction with reliable and high-quality product delivery. Our team capable to work in varieties of front end and back end design languages.",
//     ],
//     pointsHeading: "Our primary focus is on -",
//     points: [
//       "Interface Design",
//       "User Experience",
//       "Dynamic Contents",
//       "Adaptive Designs",
//       "Responsive Layouts",
//       "Quality Solutions",
//     ],
//   },
//   {
//     label: "Artificial Intelligence",
//     link: "/services/ai",
//     src: "/landing/services/AI.png",
//     webpSrc: "/landing/services/AI.webp",
//     color:
//       "bg-gradient-to-t from-[#96D7FF] via-[#C5E4FF] to-[#F2FAFF] from-20% via-70% to-100%",
//     paragraphs: [
//       "Today, Artificial intelligence has significant role in the business development.. AI chatbots leverage NLP to analyse user input, extract key information, and determine the intent behind the query. We are offering varieties of AI and ML based applications which involves the use of generative AI, predictive modelling, classifications and deep learning.",
//     ],
//     pointsHeading:
//       "Major factors that influence the AI and ML development are –",
//     points: [
//       "Improving Customer Experience",
//       "Incorporation of Human Intelligence or Software Intelligence",
//       "Data insights or Analytics",
//       "Automation and Accuracy",
//     ],
//   },
//   {
//     label: "SaaS",
//     link: "/services/saas",
//     src: "/landing/services/saas.png",
//     webpSrc: "/landing/services/saas.webp",
//     color:
//       "bg-gradient-to-t from-[#C2DBFF] via-[#D0E3FF] to-[#D0E3FF] from-20% via-50% to-80%",
//     paragraphs: [
//       "Software as a Service (SaaS) is a cloud-based model that allows users to access software applications over the internet. SaaS providers own and maintain the software, and users pay to access it on a subscription or pay-as-you-go basis.",
//       "Example platform we are using is the Zoho Suites. In general, Zoho is a cloud-based software suite for businesses that offers a variety of tools for sales, marketing, finance, legal, IT, and analytics. The popular Zoho modules are CRM, Mail, Forms, Books and many more. We have an organized team capable to handle varieties of Zoho modules.",
//     ],
//     pointsHeading: "The focusable terms are -",
//     points: [
//       "Requirements Customization",
//       "Reporting",
//       "User Experience",
//       "Third party Integration",
//     ],
//   },
//   {
//     label: "ERP",
//     link: "/services/erp",
//     src: "/landing/services/ERP.png",
//     webpSrc: "/landing/services/ERP.webp",
//     color:
//       "bg-gradient-to-t from-[#96D7FF] via-[#C5E4FF] to-[#F2FAFF] from-20% via-50% to-80%",
//     paragraphs: [
//       "We're dedicated to delivering cutting-edge solutions to help your business thrive by the use of current state of art technologies. Developing ERP to manage and integrate business processes through a single system. By offering better line of sight, companies can better plan and allocate resources.",
//       "Our teams specialized in developing top-of-the-line Enterprise Resource Planning (ERP) system byintegrating varieties of modules example Human Resource, Project Management and Task Trackingsystems, Innovative Talent Management solutions. ",
//     ],
//     pointsHeading: "The focusable points are –",
//     points: [
//       "Integration",
//       "Distributed",
//       "Data Availability and Timeline",
//       "Customization",
//       "Scalability",
//       "Ease of use",
//     ],
//   },
// ];

// const Services = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handlePrev = () => {
//     if (activeIndex === 0) {
//       setActiveIndex(services.length - 1);
//     } else {
//       setActiveIndex(activeIndex - 1);
//     }
//   };

//   const handleNext = () => {
//     if (activeIndex === services.length - 1) {
//       setActiveIndex(0);
//     } else {
//       setActiveIndex(activeIndex + 1);
//     }
//   };
//   const intervalId = useRef(null);

//   useEffect(() => {
//     if (intervalId.current) {
//       clearInterval(intervalId.current);
//     }

//     intervalId.current = setInterval(() => {
//       if (activeIndex === services.length - 1) {
//         setActiveIndex(0);
//       } else {
//         setActiveIndex((prev) => prev + 1);
//       }
//     }, 5000);

//     return () => {
//       clearInterval(intervalId.current);
//     };
//   }, [activeIndex, services, setActiveIndex]);

//   return (
//     <div className="flex flex-col gap-10 p-2 md:p-10">
//       <FadeUpHeading>Services</FadeUpHeading>
//       <motion.div
//         variants={fadeUp}
//         initial="initial"
//         whileInView={"animate"}
//         viewport={{ amount: 0.2 }}
//         className="relative mx-auto max-w-[85vw] overflow-hidden rounded-lg shadow-xl md:h-[80vh]"
//       >
//         <button
//           className="absolute left-2 top-1/2 z-10 -translate-y-1/2  rounded-full bg-neutral-200/40 p-2 hover:bg-neutral-300"
//           onClick={handlePrev}
//         >
//           <ArrowLeft size={30} />
//         </button>
//         <button
//           className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-neutral-200/40 p-2 hover:bg-neutral-300"
//           onClick={handleNext}
//         >
//           <ArrowRight size={30} />
//         </button>
//         <div
//           draggable
//           className="flex h-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
//           style={{ translate: `-${activeIndex * 100}%` }}
//         >
//           {services.map((service, index) => {
//             return <ServiceCard index={index} service={service} />;
//           })}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Services;

// const ServiceCard = ({ index, service }) => {
//   const navigate = useNavigate();
//   const [readMore, setReadMore] = useState(false);
//   return (
//     <div
//       key={index}
//       className="grid w-full shrink-0 gap-7 bg-gradient-to-br from-[#f2e9f6] from-0% via-[#fdfeff] via-[77%] to-[#97c0d0] to-[98%] px-5 md:grid-cols-2"
//     >
//       <div className="mx-auto flex max-w-[600px] flex-col items-start justify-center gap-5 text-start">
//         <h2 className="text-xl font-bold text-blue-500 md:text-4xl">
//           {service.label}
//         </h2>

//         <div>
//           {service.paragraphs
//             ?.slice(0, readMore ? service.paragraphs.length : 1)
//             .map((para, index) => (
//               <motion.p
//                 key={index}
//                 className="mb-2 md:text-lg"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, ease: "easeIn" }}
//               >
//                 {para}
//               </motion.p>
//             ))}
//           {service?.paragraphs.length > 1 && <span
//             onClick={() => setReadMore(!readMore)}
//             className="cursor-pointer text-blue-500"
//           >
//             {readMore ? "Read Less" : "Read More"}
//           </span>}
//         </div>

//         <div className="flex flex-col gap-2">
//           <h4 className="lg:text-lg">{service?.pointsHeading}</h4>
//           <ul className="list-disc pl-5 lg:text-lg">
//             {service?.points?.map((point) => {
//               return <li key={point}>{point}</li>;
//             })}
//           </ul>
//         </div>

//         <div>
//           <Button
//             variant="blue"
//             onClick={() => navigate(service.link)}
//             className={
//               "h-10 w-40 rounded-xl text-base shadow-md md:h-[52px] md:w-52"
//             }
//           >
//             Get Started
//           </Button>
//         </div>
//       </div>
//       <div className="flex items-center justify-center">
//         <ImageComponent
//           src={service.src}
//           webpSrc={service.webpSrc}
//           alt={service.label}
//           className={"max-h-[600px] rounded-lg object-cover"}
//         />
//       </div>
//     </div>
//   );
// };
