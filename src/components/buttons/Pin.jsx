import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../utils/axios/helperfunctions";
import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const Pin = ({ children, href, className, arrow = true ,linkClass, margin,variant = "default",...props}) => {
    const [isHovered, setIsHovered] = useState(false);
    const variants = {
      default : "bg-white",
      primary: "bg-primary-700 text-white",
      secondary: "bg-secondary-700 text-white"
    }
    return (
      <button
      {...props}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          `flex w-max items-center  justify-between gap-3 rounded-full  shadow ${arrow ? "pl-7 pr-2" : "px-5"} py-2 font-semibold`,variants[variant],
          className,
        )}
      >
        <span className={cn(linkClass)}>{children}</span>
        {arrow && <AnimatedArrow variant={variant} isHovered={isHovered} />}
      </button>
    );
  };
  
  export const AnimatedArrow = ({ isHovered, variant }) => {
    const firstVariant = {
      initial: {
        x: -30,
        y: 30,
      },
      animate: {
        x: 0,
        y: 0,
      },
    };
  
    const secondVariant = {
      initial: {
        x: 0,
        y: 0,
      },
      animate: {
        x: 30,
        y: -30,
      },
    };

    const variants = {
      default : "border-black",
      primary: "border-white",
      secondary: "border-white"
    }
    return (
      <motion.div
        initial="initial"
        animate={isHovered ? "animate" : ""}
        className={cn("relative h-9 w-9 overflow-hidden rounded-full border border-black ", variants[variant])}
      >
        <motion.div
          variants={firstVariant}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full"
        >
          <ArrowLeft size={20} className="rotate-[135deg]" />
        </motion.div>
        <motion.div
          variants={secondVariant}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full"
        >
          <ArrowLeft size={20} className="rotate-[135deg]" />
        </motion.div>
      </motion.div>
    );
  };