import React from 'react';

const Industries =
  () => {
    return (
      <section className="p-2 text-black">
        <h1 className="text-4xl font-semibold text-primary-700">
          Industries
        </h1>
      </section>
    );
  };

export default Industries;

// import Button from "../../components/buttons/Button";
// import HeroLayout from "../../components/layout/HeroLayout";
// import { industries } from "../../static/servicesData";
// import { motion, useInView } from "framer-motion";
// import { animVariants } from "../../utils/axios/animations/animations";
// import RequestServiceForm from "../../components/forms/RequestServiceForm";
// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import FadeUpHeading from "../../components/animateComponents/FadeUpHeading";

// const Industries = () => {
//   const navigate = useNavigate()

//   const heroClick = ()=>{
//   }

//   return (
//     <motion.div
//       variants={animVariants}
//       initial="initial"
//       animate="animate"
//       exit={"exit"}
//     >
//         <HeroLayout
//           imgUrl={"/industriesHero.jpg"}
//           heading={
//             "Weboapp delivers innovative software solutions that empower businesses to thrive in the digital age."
//           }
//           buttonLabel={"Know More"}
//           headingClass={"text-black"}
//           buttonClass={"text-black"}
//           onClick={heroClick}
//         />

//     {/* Software Solutions for big industries */}

//     <div className="p-4 max-w-[1500px] mx-auto">
//        <FadeUpHeading className={"capitalize my-20"}>Software Solutions for big industries</FadeUpHeading>
//        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">

//         {industries.map((industry, i) =>{
//           return (
//             <IndustryCard data={industry} key={i} delay={0.06*i} onClick={()=>{
//               navigate(industry.link)
//             }} />
//           )
//         })}

//        </div>
//     </div>

//     {/* requesty for services */}

//     <div className="max-w-[1400px] mx-auto my-20">
//       <RequestServiceForm />
//     </div>

//     </motion.div>
//   );
// };

// export default Industries;

// export const fadeUpVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const IndustryCard = ({data, delay=0, duration=0.5, onClick})=>{
//   const ref = useRef(null);
//   const isInView = useInView(ref, {amount : 0.5});
//   const [isVisible, setIsVisible] =useState(false)

//   useEffect(()=>{
//     if(isInView && !isVisible){
//         setIsVisible(true)
//     }
//   },[isInView, isVisible])
//   return (
//     <motion.div ref={ref} animate={isVisible ? "visible" : "hidden"} transition={{delay, duration}} variants={fadeUpVariants} className="w-full text-start rounded-lg space-y-4 shadow-lg flex flex-col">
//       <img src={data.image} className="h-[230px] w-full object-cover rounded-[10px_10px_0px_0px]"/>
//       <div className="flex flex-col justify-between items-start gap-4 p-4 flex-1">
//         <h4 className="font-semibold text-lg font-inter">{data.heading}</h4>
//         <p className="text-black/55 text-sm font-inter">{data.description}</p>
//         <Button variant="black" className={"rounded-lg shadow-md font-inter"} onClick={onClick}>Read More</Button>
//       </div>
//     </motion.div>
//   )
// }
