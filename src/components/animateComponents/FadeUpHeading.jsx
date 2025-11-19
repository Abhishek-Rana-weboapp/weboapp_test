import { motion } from "framer-motion"
import { fadeUp } from "../../utils/axios/animations/animations"
import { cn } from "../../utils/axios/helperfunctions"

const FadeUpHeading = ({children, className, margin, ...props}) => {
  return (
    <motion.h1
    {...props}
    variants={fadeUp}
    initial="initial"
    whileInView={"animate"}
    viewport={{ margin:margin || "0px 0px -200px 0px", once: true }}
    className={cn("top-16 text-2xl md:text-5xl font-bold text-[#0047AB]", className)}
  >
       {children}
    </motion.h1>
  )
}

export default FadeUpHeading
