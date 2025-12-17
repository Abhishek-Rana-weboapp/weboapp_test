import React, { useState } from 'react'
import Wrapper from '../../../components/Wrapper'
import ImageComponent from '../../../components/image/ImageComponent';
import Button from '../../../components/buttons/Button';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

  const industries = [
    {
      title: "HealthCare",
      description:
        "Powering on-demand apps for startups and established businesses across the globe by leveraging our strong and on-demand technology regime. Develop On Demand food Delivery Apps & connect your business directly with customers",
      src: "/landing/Industries/healthcare.png",
      webpSrc: "/landing/Industries/healthcare.webp",

      subHeading: "How Can We Help?",
      keyPoints: [
        "Healthcare Technology Consulting",
        "Healthcare Mobile App Development",
        "HIPAA & FDA Compliant Healthcare Solutions",
        "Healthcare Systems Integration",
      ],
      href: "/industries/healthcare",
    },
    {
      title: "Construction",
      description:
        "Powering on-demand apps for startups and established businesses across the globe by leveraging our strong and on-demand technology regime. Develop On Demand food Delivery Apps & connect your business directly with customers",
      src: "/landing/Industries/construction.png",
      webpSrc: "/landing/Industries/construction.webp",

      subHeading: "How Can We Help?",
      keyPoints: [
        "Healthcare Technology Consulting",
        "Healthcare Mobile App Development",
        "HIPAA & FDA Compliant Healthcare Solutions",
        "Healthcare Systems Integration",
      ],
      href: "/industries/construction",
    },
    {
      title: "E-Commerce",
      description:
        "Powering on-demand apps for startups and established businesses across the globe by leveraging our strong and on-demand technology regime. Develop On Demand food Delivery Apps & connect your business directly with customers",
      src: "/landing/Industries/ecommerce.png",
      webpSrc: "/landing/Industries/ecommerce.webp",

      subHeading: "How Can We Help?",
      keyPoints: [
        "Healthcare Technology Consulting",
        "Healthcare Mobile App Development",
        "HIPAA & FDA Compliant Healthcare Solutions",
        "Healthcare Systems Integration",
      ],
      href: "/industries/ecommerce",
    },
    {
      title: "Logistics & Automation",
      description:
        "Powering on-demand apps for startups and established businesses across the globe by leveraging our strong and on-demand technology regime. Develop On Demand food Delivery Apps & connect your business directly with customers",
      src: "/landing/Industries/logistics.png",
      webpSrc: "/landing/Industries/logistics.webp",

      subHeading: "How Can We Help?",
      keyPoints: [
        "Healthcare Technology Consulting",
        "Healthcare Mobile App Development",
        "HIPAA & FDA Compliant Healthcare Solutions",
        "Healthcare Systems Integration",
      ],
      href: "/industries/logistics",
    },
    // {
    //   title: "Travel & Hospitality",
    //   description:
    //     "Powering on-demand apps for startups and established businesses across the globe by leveraging our strong and on-demand technology regime. Develop On Demand food Delivery Apps & connect your business directly with customers",
    //   src: "/landing/Industries/travel.png",
    //   webpSrc: "/landing/Industries/travel.webp",

    //   subHeading: "How Can We Help?",
    //   keyPoints: [
    //     "Healthcare Technology Consulting",
    //     "Healthcare Mobile App Development",
    //     "HIPAA & FDA Compliant Healthcare Solutions",
    //     "Healthcare Systems Integration",
    //   ],
    //   href: "/industries/travel",
    // },
  ];

const Industry = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section className='mt-28 relative bg-zinc-100'>

      <div className='absolute -top-8 left-0 w-full sm:max-w-xl max-w-[90%] flex justify-center bg-primary-950 h-16 rounded-tr-2xl rounded-br-2xl p-2 items-center text-white'>
       <h2 className="sm:text-[2rem] text-2xl leading-[2.5rem] text-white font-semibold text-start max-w-lg">Industries We Serve</h2>
      </div>
     <Wrapper className={"sm:py-16 py-4"}>
        <div className='overflow-hidden'>
          <div className='flex justify-between md:gap-10 max-md:flex-wrap max-sm:hidden'>
             {
              industries.map((industry, index)=>{ 
                return <div key={index} className='w-max md:shrink-0'>
                  <button onClick={()=>setCurrentIndex(index)} className={`text-xl transition-all duration-200 ease-out hover:text-primary-900 ${currentIndex === index ? 'text-primary-900 font-medium underline underline-offset-4' : 'text-gray-500'}`}>{industry.title}</button>
                </div>
              })
             }
             <div className='w-max md:shrink-0 flex justify-center items-center'>
               <NavLink to={"/industries"} className={"w-max md:shrink-0 relative flex items-center gap-2 text-primary-700 font-semibold hover:scale-[1.03] hover:text-primary-900 transition-all duration-150 ease-out before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1px] before:bg-primary-700  before:rounded-full"}>
                View All <ArrowRight />
                           </NavLink>
             </div>
          </div>
        </div>
        <div className='mt-20'>
           <div className="flex sm:flex-row flex-col gap-16">
            <div className='flex-1 relative'>
               <ImageComponent src={industries[currentIndex].src} webpSrc={industries[currentIndex].webpSrc} alt={industries[currentIndex].title} className='w-full max-md:h-[300px] h-[400px] max-h-[400px] object-cover rounded-2xl' />
               <button className='absolute z-10 -left-6 top-1/2 sm:hover:bg-neutral-300 transition-colors duration-100 ease-in -translate-y-1/2 w-max p-2 bg-neutral-200/90 rounded-full' onClick={()=>{
                if(currentIndex > 0){
                  setCurrentIndex(prev=>prev-1)
                }else{
                  setCurrentIndex(industries.length - 1)
                }
               }}><ChevronLeft size={30}/></button>
               <button className='absolute z-10 -right-6 top-1/2 sm:hover:bg-neutral-300 transition-colors duration-100 ease-in -translate-y-1/2 w-max p-2 bg-neutral-200/90 rounded-full' onClick={()=>{
                if(currentIndex < industries.length - 1){
                  setCurrentIndex(prev=>prev+1)
                }else{
                  setCurrentIndex(0)
                }
               }}><ChevronLeft className='rotate-180' size={30}/></button>
            </div>
            <div className='flex-1'>
               <h3 className='text-2xl text-primary-900 font-semibold text-start'>
                {industries[currentIndex].title}
               </h3>

               <p className='text-gray-500 mt-5 text-start'>
                {industries[currentIndex].description}
               </p>

               <ul className='grid max-w-sm  text-start mt-3 list-none'>
                {industries[currentIndex].keyPoints.map((point, index)=>{
                  return <li key={index} className='text-gray-500 mt-2'>{point}</li>
                })}
               </ul>

               <Link to="/contact">
                 <Button className={"flex gap-2 items-center mt-8 max-md:mx-auto justify-center md:px-5 md:py-3 px-3 py-2 font-semibold"}>
                   Schedule a Call
                 </Button>
               </Link>
            </div>
           </div>

        </div>

     </Wrapper>
      
    </section>
  )
}

export default Industry





// import {  motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Wrapper from "../../../components/Wrapper";
// import FadeUpHeading from "../../../components/animateComponents/FadeUpHeading";
// import { cn } from "../../../utils/axios/helperfunctions";
// import ImageComponent from "../../../components/image/ImageComponent";

// const Industry = () => {
//   const [activeSection, setActiveSection] = useState(0);

//   const industries = [
//     {
//       title: "HealthCare",
//       description:
//         "Powering on-demand apps for startups and established businesses across the globe by leveraging our strong and on-demand technology regime. Develop On Demand food Delivery Apps & connect your business directly with customers",
//       src: "/landing/Industries/healthcare.png",
//       webpSrc: "/landing/Industries/healthcare.webp",

//       subHeading: "How Can We Help?",
//       keyPoints: [
//         "Healthcare Technology Consulting",
//         "Healthcare Mobile App Development",
//         "HIPAA & FDA Compliant Healthcare Solutions",
//         "Healthcare Systems Integration",
//       ],
//       href: "/industries/healthcare",
//     },
//     {
//       title: "Construction",
//       description:
//         "Powering on-demand apps for startups and established businesses across the globe by leveraging our strong and on-demand technology regime. Develop On Demand food Delivery Apps & connect your business directly with customers",
//       src: "/landing/Industries/construction.png",
//       webpSrc: "/landing/Industries/construction.webp",

//       subHeading: "How Can We Help?",
//       keyPoints: [
//         "Healthcare Technology Consulting",
//         "Healthcare Mobile App Development",
//         "HIPAA & FDA Compliant Healthcare Solutions",
//         "Healthcare Systems Integration",
//       ],
//       href: "/industries/construction",
//     },
//     {
//       title: "E-Commerce",
//       description:
//         "Powering on-demand apps for startups and established businesses across the globe by leveraging our strong and on-demand technology regime. Develop On Demand food Delivery Apps & connect your business directly with customers",
//       src: "/landing/Industries/ecommerce.png",
//       webpSrc: "/landing/Industries/ecommerce.webp",

//       subHeading: "How Can We Help?",
//       keyPoints: [
//         "Healthcare Technology Consulting",
//         "Healthcare Mobile App Development",
//         "HIPAA & FDA Compliant Healthcare Solutions",
//         "Healthcare Systems Integration",
//       ],
//       href: "/industries/ecommerce",
//     },
//     {
//       title: "Logistics & Automation",
//       description:
//         "Powering on-demand apps for startups and established businesses across the globe by leveraging our strong and on-demand technology regime. Develop On Demand food Delivery Apps & connect your business directly with customers",
//       src: "/landing/Industries/logistics.png",
//       webpSrc: "/landing/Industries/logistics.webp",

//       subHeading: "How Can We Help?",
//       keyPoints: [
//         "Healthcare Technology Consulting",
//         "Healthcare Mobile App Development",
//         "HIPAA & FDA Compliant Healthcare Solutions",
//         "Healthcare Systems Integration",
//       ],
//       href: "/industries/logistics",
//     },
//     {
//       title: "Travel & Hospitality",
//       description:
//         "Powering on-demand apps for startups and established businesses across the globe by leveraging our strong and on-demand technology regime. Develop On Demand food Delivery Apps & connect your business directly with customers",
//       src: "/landing/Industries/travel.png",
//       webpSrc: "/landing/Industries/travel.webp",

//       subHeading: "How Can We Help?",
//       keyPoints: [
//         "Healthcare Technology Consulting",
//         "Healthcare Mobile App Development",
//         "HIPAA & FDA Compliant Healthcare Solutions",
//         "Healthcare Systems Integration",
//       ],
//       href: "/industries/travel",
//     },
//   ];

//   const [hoveredIndex, setHoveredIndex] = useState(null);


//   return (
//     <div className="py-16">
//       <Wrapper>
//         <h2 className="text-[2rem] leading-[2.5rem] text-primary-900 font-semibold text-start max-w-lg">Industries We Serve</h2>
//       </Wrapper>
//     <div className="mt-32">
//       <h3 className="text-[2rem] leading-[2.5rem] text-primary-900 font-semibold text-center max-w-lg mx-auto">Industries We Serve</h3>
//       <p className="text-center text-gray-500 max-w-lg mx-auto font-medium my-5">We serve a wide range of industries and help them build their next project.</p>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {industries.map((industry, index)=>(
//           <Card key={index} industry={industry} index={index} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Industry;

// const Card = ({ industry, index, hoveredIndex, setHoveredIndex }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [paragraphHeight, setParagraphHeight] = useState(0);
//   const paragraphRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (paragraphRef.current) {
//       setParagraphHeight(paragraphRef.current.clientHeight);
//     }
//   }, [industry.description]);


//   return (
//     <motion.div  initial={{
//       opacity:0,
//       y:20
//     }}
//     whileInView={{
//       opacity:1,
//       y:0
//     }}
//     transition={{
//       duration:0.5,
//       delay:0.1 * index
//     }}
//     viewport={{
//       margin:"0px 0px -200px 0px",
//       once:true
//     }}>
//       <div
//         onMouseEnter={() => {
//           setIsHovered(true);
//           setHoveredIndex(index);
//         }}
//         onMouseLeave={() => {
//           setIsHovered(false);
//           setHoveredIndex(null);
//         }}
//         onClick={() => navigate(industry.href)}
//         className={cn(
//           `relative flex h-80 select-none flex-col gap-3 overflow-hidden rounded-2xl bg-neutral-100 p-4 text-start text-white transition-all duration-200 ease-in-out hover:scale-[1.02] hover:cursor-pointer`,
//           hoveredIndex !== null &&
//             hoveredIndex !== index &&
//             "scale-[0.98] blur-[2px]",
//         )}
//         key={index}
//       >
//         <ImageComponent src={industry.src} webpSrc={industry.webpSrc} alt={industry.title}  className={"absolute inset-0 h-full w-full object-cover"}/>
//         {/* <img
//           src={industry.src}
//           alt=""
//           className="absolute inset-0 h-full w-full object-cover"
//         /> */}
//         <motion.div className="absolute inset-0 z-10 h-full w-full bg-black/40"></motion.div>
//         <div className="absolute inset-0 z-20 flex w-full flex-col justify-end overflow-hidden p-4">
//           <motion.h2
//             initial={{ y: 0 }}
//             animate={!isHovered ? { y: paragraphHeight-10 } : { y: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="font-bold md:text-3xl"
//           >
//             {industry.title}
//           </motion.h2>
//           <motion.p
//             ref={paragraphRef}
//             initial={{ y: "100%" }}
//             animate={isHovered ? { y: 0 } : { y: paragraphHeight + 40 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="md:text-lg"
//           >
//             {industry.description}
//           </motion.p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // const Card = ({industry, index})=>{
// //   const [isHovered, setIsHovered] = useState(false)
// //   const [hoveredIndex, setHoveredIndex] = useState(null);
// //   const navigate = useNavigate();

// //   const ref = useRef(null)
// //   return(
// //     <motion.div
// //     onMouseEnter={() => setHoveredIndex(index)}
// //     onClick={() => navigate(industry.href)}
// //     className="relative flex select-none h-60 flex-col gap-3 overflow-hidden rounded-2xl bg-neutral-100 p-4 py-10 text-start text-white transition-transform duration-200 ease-in-out hover:scale-[1.02] hover:cursor-pointer"
// //     key={index}
// //   >
// //     <img
// //       src={industry.src}
// //       alt=""
// //       className="absolute inset-0 h-full w-full object-cover"
// //     />
// //     <motion.div className="absolute inset-0 z-10 h-full w-full bg-black/50"></motion.div>
// //     <div className="absolute inset-0 flex flex-col justify-end z-20 w-full p-4 overflow-hidden">
// //       <motion.h2 className="font-bold md:text-3xl" ref={ref} >
// //         {industry.title}
// //       </motion.h2>
// //       <motion.p initial={{
// //         y: "100%",
// //       }}
// //       animate={{
// //         y: 0,
// //         }}
// //         transition={{
// //           duration: 0.5,
// //           }}
// //       >{industry.description}</motion.p>
// //     </div>
// //   </motion.div>
// //   )
// // }
