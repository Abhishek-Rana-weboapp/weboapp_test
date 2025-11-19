import { motion } from "framer-motion";
import {
  fadeFromRight,
  fadeUp,
} from "../../../utils/axios/animations/animations";
import { Pin } from "../../../components/buttons/Pin";
import ImageComponent from "../../../components/image/ImageComponent";
import { useFormContext } from "../../../context/FormContext";
import Wrapper from "../../../components/Wrapper";

const WhyUs = () => {
  return (
    <section className="relative rounded-2xl p-2 sm:p-5 md:h-screen">
      <ImageComponent
        src={"/whyBack.jpg"}
        webpSrc={"/whyBack.webp"}
        className={"absolute inset-0 h-full w-full"}
      />
      <div className="absolute inset-0 backdrop-blur-sm" />
      <Wrapper className="relative z-10 mx-auto flex h-full flex-col justify-between space-y-20">
        <div className="flex justify-between">
          <motion.div
            className="w-max"
            variants={fadeFromRight}
            initial="initial"
            whileInView={"animate"}
            viewport={{ margin: "0px 0px -200px 0px", once: true }}
          >
            <Pin arrow={false} className={"text-sm sm:text-xl hover:cursor-default"}>
              Latest Project
            </Pin>
          </motion.div>
          <motion.div
            className="w-max"
            variants={fadeFromRight}
            initial="initial"
            whileInView={"animate"}
            viewport={{ margin: "0px 0px -200px 0px", once: true }}
          >
            <Pin arrow={false} className={"text-sm sm:text-xl hover:cursor-default"}>
              24/7 Support
            </Pin>
          </motion.div>
        </div>
        <div>
          <div className="flex min-h-[400px] justify-between gap-5 max-xl:flex-wrap md:gap-2">
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView={"animate"}
              viewport={{ margin: "0px 0px -200px 0px", once: true }}
            >
              <Section />
            </motion.div>
            <div className="flex gap-4 max-md:flex-wrap">
              <div className="flex items-center justify-center xl:mt-16">
                <div
                >
                  <Pin arrow={false} className={"w-full md:text-lg justify-center px-3 hover:cursor-default"} >Advanced Technology</Pin>
                </div>
              </div>
              <div
                className="flex items-end justify-center"
              >
                <div>
                  <Pin arrow={false} className={"w-full md:text-lg justify-center px-1 hover:cursor-default"}>
                    Transparent Reporting
                  </Pin>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default WhyUs;

const Section = () => {
  const {setServiceFormOpen} = useFormContext()
  return (
    <div className="h-full w-full space-y-6 rounded-[2rem] bg-white p-8">
      <Pin arrow={false} className={"border border-black hover:cursor-default"}>
        Why Choose us
      </Pin>
      <p className="text-start text-4xl md:text-6xl">
        We're your top choice for Web Development Services.
      </p>
      <Pin onClick={()=>setServiceFormOpen(true)} className={"border border-black px-7 text-2xl font-light"}>
        Get Started
      </Pin>
    </div>
  );
};
