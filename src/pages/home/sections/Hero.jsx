import Button from "../../../components/buttons/Button"
import Wrapper from "../../../components/wrappers/Wrapper"
import { motion } from "framer-motion"
import { fadeInFromBottomVariants } from "../../../utils/axios/animations/animations"
import FloatingIcons from "../../../components/ui/FloatingIcons"

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,   // delay between children
      delayChildren: 0.3,     // initial delay before first child animates
    },
  },
}

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] sm:content-center bg-[radial-gradient(75%_25%_at_50%_0%,_#d4e4ff,_#fff)]">
      <FloatingIcons />
      <Wrapper className="px-2 py-20 ">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.h1
            variants={fadeInFromBottomVariants}
            className="md:text-6xl  sm:text-3xl text-2xl font-semibold max-md:pt-8 text-primary-900"
          >
            Turning Your Business Vision
            <br />
            Into
            <br/>
             Digital Reality
          </motion.h1>
          <motion.p
            variants={fadeInFromBottomVariants}
            className="md:text-xl text-black/70 mt-3 max-sm:max-w-[340px] mx-auto"
          >
            We design, build, and scale web, mobile, and cloud solutions that help
            your business grow faster.
          </motion.p>
          <motion.p
            variants={fadeInFromBottomVariants}
            className="text-sm text-black mt-3 max-sm:max-w-[340px] mx-auto"
          >
            Let Us Help You!
          </motion.p>
          <motion.div
            variants={fadeInFromBottomVariants}
            className="flex gap-2 justify-center items-center mt-8"
          >
            <Button variant="outline" className={"rounded-full md:py-2"}>View Portfolio</Button>
            <Button className={"rounded-full md:py-2"}>Get Started 🚀</Button>
          </motion.div>
        </motion.div>
      </Wrapper>
    </section>
  )
}

export default Hero
