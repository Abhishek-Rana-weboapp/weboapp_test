import { motion } from "framer-motion";

// Define the animation variants
const linkVariants = {
  initial: { y: 0 },
  animate: { y: "-100%", 
    transition:{
        duration:1,
        ease:[.23,1,.32,1]
    }
   },
};

const overlayVariants = {
  initial: { y: "100%" },
  animate: { y: 0 , 
    transition:{
        duration:1,
        ease:[.23,1,.32,1]
    }
   },
};



const AnimatedLink = ({ title, link }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="animate"
      href={link}
      className="overflow-hidden block text-sm group w-max hover:cursor-pointer relative after:content-[''] after:w-full after:scale-x-0 after:hover:scale-x-100 after:h-[1px] after:absolute after:bottom-0 after:bg-white/70 after:origin-left after:transition-transform after:duration-700 after:ease-in-out"
    >
      <motion.div
        variants={linkVariants}
        className="uppercase text-white/70"
      >
        {title}
      </motion.div>
      <motion.div
        variants={overlayVariants}
        className="absolute uppercase text-white/70 inset-0"
      >
        {title}
      </motion.div>
      
    </motion.a>
  );
};

export default AnimatedLink; 