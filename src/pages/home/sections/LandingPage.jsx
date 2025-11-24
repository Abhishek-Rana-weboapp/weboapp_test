import React, { useEffect, useRef} from "react";
import Wrapper from "../../../components/Wrapper";
import Button from "../../../components/buttons/Button";
import Modal from "../../../components/modal/Modal";
import RequestServiceForm from "../../../components/forms/RequestServiceForm";
import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/axios/animations/animations";
import { useNavigate } from "react-router-dom";
import ImageComponent from "../../../components/image/ImageComponent";
import { useFormContext } from "../../../context/FormContext";
import { Phone } from "lucide-react";
import TextFadingUp from "../../../components/animateComponents/TextFadingUp";
import FloatingIcons from "../../../components/ui/FloatingIcons";

const LandingPage = () => {
  const {serviceFormOpen, setServiceFormOpen} = useFormContext()
  const isFormOpenRef = useRef(serviceFormOpen);

  useEffect(() => {
    isFormOpenRef.current = serviceFormOpen;
  }, [serviceFormOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isFormOpenRef.current) {
        setServiceFormOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  
  const texts = ["Web Development", "AI Automation", "Cloud Solutions"];
  return (
    <>
    <FloatingIcons />
      <Modal
        isOpen={serviceFormOpen}
        handleModalClose={() => setServiceFormOpen(false)}
        contentClass={"max-w-[1200px]"}
      >
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView={"animate"}
          viewport={{ margin: "0px 0px -200px 0px", once: true }}
        >
          <RequestServiceForm />
        </motion.div>
      </Modal>
      {/* <section className="relative bg-gradient-to-br from-[#dbe8f7] from-0% via-[#f6f6f6] via-[25%] to-[#97c0d0] to-100%"> */}
      <section className="relative sm:h-[90vh] sm:content-center">
        <Wrapper className={"py-8"}>
          <div className="h-full">
            <div  className="flex flex-col gap-5 md:flex-row md:gap-6">
              <div className="flex basis-1/2 flex-col justify-center gap-4 md:text-start text-center md:gap-10">
                <div className="space-y-3 md:space-y-5">
                  <h1
                    style={{
                      lineHeight: 1.025,
                      letterSpacing: -1,
                    }}
                    className={
                      " capitalize tracking-wider  text-3xl md:text-4xl lg:text-6xl font-bold"
                    }
                  >
                    {/* Custom Software Solutions */}
                    Level Up Your Business with Custom Software Solutions in
                  <TextFadingUp texts={texts} className="text-primary-700" />
                  </h1>
                  <p
                    className={"md:text-2xl tracking-wide text-black/80"}
                  >
                    Explore our large team of experts and get the best solutions for your business.
                  </p>
                </div>
            
                <div
                  className="flex gap-4"
                >
                 <Button onClick={() => setServiceFormOpen(true)} className={"flex gap-2 items-center max-md:mx-auto justify-center md:px-5 md:py-3 px-3 py-2 font-semibold"}>
                 <Phone /> Schedule a Call 
                 </Button>
                </div>
              </div>
              <div className="basis-1/2 content-center">
              <ImageComponent className={"w-full max-w-[700px] rounded-3xl object-cover shadow-md md:h-[500px]"} src={"../../assets/Hero.svg"} webpSrc={"/landing/Hero/LandingHero.webp"} alt={"Hero Image"}/>
              </div>
            </div>
          </div>
        </Wrapper>

        {/* <div className="absolute w-full h-48 bottom-0 left-0 right-0 bg-gradient-to-b -z-10 from-neutral-200 to-transparent rounded-tr-full  rounded-tl-full"></div> */}
      </section>
    </>
  );
};

export default LandingPage;
