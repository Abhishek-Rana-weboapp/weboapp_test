import React from 'react'
import {motion} from "framer-motion"

const fadeInScaleAnim = {
    initial : {
        scale:0 , opacity:0
    },
    animate : {
        scale:1 , opacity:1, transition:{
            duration:0.3
        }
    },
}

const InfoModal = ({children}) => {
  return (
    <motion.div className="fixed z-30 backdrop-blur-md inset-0 flex justify-center items-center p-4" variants={fadeInScaleAnim} initial="initial" animate="animate">
        {children}
    </motion.div>
  )
}

export default InfoModal
