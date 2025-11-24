import React from 'react';
import Wrapper from '../../components/Wrapper';
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs';
import ImageComponent from '../../components/image/ImageComponent';
import { industries } from '../../static/servicesData';
import { Link } from 'react-router-dom';
import Button from '../../components/buttons/Button';
import { Phone } from 'lucide-react';
import { useFormContext } from '../../context/FormContext';

const Industries =
  () => {

  const {setIsFormOpen} = useFormContext()
    return (
      <>
      <section className="p-2 text-black">
        <Wrapper
        className={
            'flex md:flex-row flex-col  items-center lg:gap-16 md:gap-8 gap-3 md:py-10'
          }
        >
          <div>
            <div className='mb-10'>
              <BreadCrumbs />
            </div>
            <span className="block w-max my-3 text-start text-sm font-semibold uppercase tracking-widest text-black/60">
              Industries we work in
            </span>
            <h1 className="text-start lg:text-[3.5rem] md:text-[2.5rem] text-3xl tracking-wider md:my-6 my-3 font-bold text-primary-700 md:leading-[1.15]">
              Where technology meets Industry,
              <br/>
               <span>Innovation Follows</span>
            </h1>

            <p className='text-start text-black/70 font-medium text-lg md:my-6 my-3'>
              We've completed projects for a wide range of industries, from healthcare to construction to finance.
            </p>

            <Button className={"flex "} onClick={() => {
                    setIsFormOpen(true)
            }}>
              Schedule a Call
            </Button>
          </div>
          <div>
            <ImageComponent
            webpSrc={"/client.webp"}
              src="/client.webp"
              loading='lazy'
              alt=""
              className={"max-w-xl w-full rounded-2xl shadow-lg"}
            />
          </div>
        </Wrapper>
      </section>


      <section className='bg-zinc-200 py-8'>
         <Wrapper className={""}>
          <h2 className='md:text-4xl text-2xl font-semibold text-primary-700 mb-8'>
            Industries We Serve
          </h2>
           <div className='grid  lg:grid-cols-3 md:grid-cols-2 lg:gap-8 md:gap-6 gap-4'>
             {
              industries.map((industry, i) => {
                return <div key={i} className='bg-white p-4 rounded-xl text-start shadow-md py-6'>
                  <h3 className='md:text-2xl uppercase font-semibold text-primary-700 mb-2 hover:underline hover:font-bold transition-all duration-300'><Link to={`/industries/${industry.url}`}>{industry.title}</Link></h3>
                  <p className='text-black/70 mb-2'>{industry.description}</p>

                  <ul className='grid grid-cols-2'>
                    {
                      industry.services.map((service, index)=>{
                        return <li className='' key={index}>
                          <span className='text-black/80 text-[0.82rem]'>• {service}</span>
                        </li>
                      })
                    }
                  </ul>
                </div>
              })}
           </div>
         </Wrapper>
      </section>

      <section  >
          <Wrapper>
             <div className='flex gap-2 items-center'>
                 <div>
                    <h2 className='md:text-4xl font-bold text-start text-primary-700'>
                        Ready to Discuss Your Project?
                    </h2>
                    <p className='text-black/70 my-4 text-start'>
                      Contact us today to learn more about how our software solutions can help your business thrive in the digital age.
                    </p>
                    <Button onClick={()=>setIsFormOpen(true)} className={" flex items-center gap-2 px-5 py-2 mt-2"}>
                       <Phone size={18}/> Schedule a Call
                    </Button>
                 </div>
                 <div className='flex justify-center items-center'>
                  <ImageComponent className={"max-w-[400px]"} src={"/ContactImage.jpg"} webpSrc={"/ContactImage.webp"} />
                 </div>
             </div>
          </Wrapper>
      </section>
      </>
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
