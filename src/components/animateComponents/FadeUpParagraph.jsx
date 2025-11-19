import { motion } from "framer-motion"
import { fadeUp } from "../../utils/axios/animations/animations"
import { cn } from "../../utils/axios/helperfunctions"

const FadeUpParagraph = ({children, className, margin}) => {
  return (
    <motion.p
    variants={fadeUp}
    initial="initial"
    whileInView={"animate"}
    viewport={{ margin:margin || "0px 0px -200px 0px", once: true }}
    className={cn("text-black/70 md:text-xl", className)}
  >
       {children}
    </motion.p>
  )
}

export default FadeUpParagraph
