import React from "react";
import {easeOut, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const   SwipingLetters = ({ lineArray, className, duration=0.5, delay=0, animeVariant=1, staggerChildren=0.1 }) => {
    const letterVariants = {
        initial: {
          x: 1000,
          rotate:"60deg"
        },
        animate: (i) => ({
          x: 0,
          rotate:0,
          transition: {
            duration:duration,
            ease: easeOut,
          },
        }),
      };


      const fallingVariants = {
        initial:{
          y: "-100%",
        },
        animate: (i) => ({
          y: 0,
          transition: {
            duration:duration,
            ease: easeOut,
          },
        }),
      };
  return (
    <motion.div
      className={twMerge("w-max overflow-hidden py-3 space-y-3", className)}
      initial="initial"
      whileInView="animate"
      viewport={{once: true}}
      transition={{ staggerChildren: staggerChildren , delay:delay}}
      
    >
      {lineArray.map((line, lineIndex) => {
        return (
          <span className="block text-start" key={lineIndex}>
            {line.split(" ").map((word, Windex) => {
              return (
                <span className={`inline-block ${animeVariant === 2 ? "overflow-hidden":""}`} key={Windex}>
                  {word.split("").map((letter, index) => {
                    return (
                      <motion.span
                        custom={[index, lineIndex]}
                        variants={animeVariant === 1 ? letterVariants : fallingVariants }
                        key={index}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    );
                  })}
                  <span className="inline-block">&nbsp;</span>
                </span>
              );
            })}
          </span>
        );
      })}
    </motion.div>
  );
};

export default SwipingLetters;

