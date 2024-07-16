import React, { forwardRef, useState } from "react";
import {motion } from "framer-motion";
import heroBg from "../../assets/heroBg.png";
import Modal from "../../components/modal/Modal";
import ContactForm from "../../components/forms/ContactForm";
import SlideButton from "../../components/buttons/SlideButton";
import Typewriter from "../../components/animateComponents/TypeWriter";
import HeroSvgComponent from "../../components/svg/HeroSvgComponent";

const scrollInAnimationVariants = {
  initial: { x: -100, opacity: 0 },
  animate: (number) => {
    return {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: number * 0.2 },
    };
  },
};

const fadeInDown = {
  initial: { y: 30, opacity: 0 },
  animate: (number) => {
    return {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: number * 0.2 },
    };
  },
};

const Home = forwardRef(function Home(props, ref) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
        <Modal isOpen={modalOpen}>
          <ContactForm handleCloseForm={() => setModalOpen(false)} />
        </Modal>
        <main
          ref={ref}
          className={`relative flex h-screen w-full gap-4 p-4 md:p-20 md:px-40 md:flex-row flex-col-reverse justify-center items-center`}
          style={{
            background: `#121212`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section
            className={`md:w-1/2 w-full flex flex-col items-center justify-center gap-5 text-white`}
          >
            <div className="from-[rgba(255,255,255,.5)], flex flex-col justify-center text-center gap-5 bg-gradient-to-r to-[rgba(0,0,0,.5)_25%] pl-6 backdrop-blur-xl">
              <motion.h1
                variants={fadeInDown}
                initial="initial"
                whileInView="animate"
                custom={1}
                className="text-lg sm:text-xl"
              >
                Looking for{" "}
                <span className="text-3xl font-bold text-blue-400 md:text-5xl">
                  services like{" "}
                  Web Development, AI, Software development
                  {/* <Typewriter
                    words={["Web Development", "AI", "Software development"]}
                    typingSpeed={200}
                  /> */}
                </span>
              </motion.h1>
              <motion.h2
                variants={scrollInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={2}
                className="text-2xl md:text-5xl"
                // viewport={{once:true}}
              >
                <span className="text-3xl font-bold text-blue-400 md:text-5xl">
                  {" "}
                  Weboapp Discovery{" "}
                </span>
                is your one stop for all{" "}
              </motion.h2>
              {/* <motion.p
                variants={scrollInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={3}
                className="text-base text-slate-200"
                // viewport={{once:true}}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                alias numquam modi doloremque laborum error ullam voluptatum
                exercitationem. Laborum quis, animi impedit voluptatum sint
                perferendis tenetur veniam voluptatibus vitae natus eos delectus
                illo et fugit explicabo itaque earum non beatae dicta nihil
                doloremque id iste? Commodi obcaecati ea provident ducimus?
              </motion.p> */}
            </div>
            <SlideButton onClick={() => props.slideToRef("Services")}>
              Services We Offer
            </SlideButton>
          </section>

          <div className="w-1/2 overflow-hidden">
            <HeroSvgComponent className="object-cover w-full h-full"/>
          </div>
        </main>
    </>
  );
});

export default Home;
