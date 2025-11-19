import React from 'react'
import {motion} from "framer-motion"
import { twMerge } from 'tailwind-merge'

const SlideButton = ({children,className,once=false, ...props}) => {
  return (
    <motion.button
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.5 , delay :0.2 } },
            large: { scale: 1.02, transition: { duration: 0.1 } },
          }}
          {...props}
          initial="initial"
          whileInView="animate"
          whileHover="large"
          viewport={{once:once}}
          className={twMerge("px-8 py-2 bg-purple-600 min-w-max font-semibold relative overflow-hidden isolate rounded-lg text-white  shadow-lg  transitButton", className)}
        >
          <span></span>
          {children}
        </motion.button>
  )
}

export default SlideButton
