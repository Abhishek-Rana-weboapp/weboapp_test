import { useInView, motion } from "framer-motion"
import { useRef } from "react"
import { fadeInAnimationVariants } from "../animations/animations"


const StaggeredAnimations = ({children}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {margin : "0px 0px -200px 0px", once:true})
  return (
    <motion.div ref={ref} variants={fadeInAnimationVariants} initial="initial" animate={isInView ? "animate" : "initial"}   >
       {children}
    </motion.div>
  )
}

export default StaggeredAnimations
