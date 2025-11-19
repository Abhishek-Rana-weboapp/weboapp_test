import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../utils/axios/helperfunctions";

const variants = {
  initial: { opacity: 0, y: "100%" },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {type: "spring",
        stiffness: 200,
        damping: 17,
        duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const TextFadingUp = ({texts, className}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
      const [height, setHeight] = useState(0);
    const ref = useRef(null);
    const countRef = useRef(0)



    useEffect(() => {
        if (ref.current) setHeight(ref.current.offsetHeight);
        let timer;
        const tick = () => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          timer = setTimeout(tick, 3000);
        };
        timer = setTimeout(tick, 3000);
        return () => clearTimeout(timer);
      }, [texts.length,currentIndex]);
 
     // Keep height in sync on resize and content size changes
     useEffect(() => {
       const update = () => {
         if (ref.current) setHeight(ref.current.offsetHeight);
       };
 
       update();
 
       // Window resize fallback
       window.addEventListener("resize", update);
 
       // ResizeObserver when available
       let observer;
       if (typeof ResizeObserver !== "undefined" && ref.current) {
         observer = new ResizeObserver(() => update());
         observer.observe(ref.current);
       }
 
       return () => {
         window.removeEventListener("resize", update);
         if (observer && ref.current) observer.unobserve(ref.current);
       };
     }, []);

useEffect(() => {
  countRef.current++;
}, []);



  return (
    <div style={{
        height
    }} className={cn("overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          className="py-2"
          key={currentIndex}
          variants={variants}
          initial={countRef.current !== 0 ? "initial" : false}
          animate="animate"
          exit="exit"
          ref={ref}
        >
          {texts[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextFadingUp;
