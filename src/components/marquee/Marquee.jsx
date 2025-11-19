import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cn } from "../../utils/axios/helperfunctions";

const Marquee = ({
  children,
  duration = 10,
  containerClassName,
  reverse = false,
}) => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [width, setWidth] = useState(0);

  // measure width of content once mounted
  useEffect(() => {
    if (ref1.current) {
      setWidth(ref1.current.offsetWidth);
    }
  }, [children]);

  // useEffect(() => {
  //   const measure = () => {
  //     if (ref1.current) {
  //       const newWidth = ref1.current.offsetWidth;
  //       if (newWidth > 0) setWidth(newWidth);
  //     }
  //   };

  //   // Measure after initial render + small delay to ensure layout settled
  //   const timeout = setTimeout(measure, 100);

  //   // Recalculate on window resize
  //   window.addEventListener("resize", measure);

  //   return () => {
  //     clearTimeout(timeout);
  //     window.removeEventListener("resize", measure);
  //   };
  // }, [children]);

  // Start infinite scrolling motion
  useEffect(() => {

    if (reverse) {
      // rightward motion
      controls1.start({
        x: [-width, 0],
        transition: { duration, repeat: Infinity, ease: "linear" },
      });
      controls2.start({
        x: [-width, 0],
        transition: { duration, repeat: Infinity, ease: "linear" },
      });
    } else {
      // leftward motion
      controls1.start({
        x: [0, -width],
        transition: { duration, repeat: Infinity, ease: "linear" },
      });
      controls2.start({
        x: [width, 0],
        transition: { duration, repeat: Infinity, ease: "linear" },
      });
    }
  }, [controls1, controls2, duration, reverse]);

  const handlePause = () => {
    controls1.stop();
    controls2.stop();
  };

  const handleResume = async () => {
    const resumeFrom = async (ref, controls, isReverse) => {
      if (!ref.current) return;

      const style = getComputedStyle(ref.current);
      const matrix = new DOMMatrixReadOnly(style.transform);
      const currentX = matrix.m41; // translateX in px

      // When resuming, continue moving in the same direction
      const target = isReverse ? "0%" : "-100%";

      await controls.start({
        x: [currentX, target],
        transition: { duration, ease: "linear", repeat: Infinity },
      });
    };

    await Promise.all([
      resumeFrom(ref1, controls1, reverse),
      resumeFrom(ref2, controls2, reverse),
    ]);
  };

  return (
    <div
      className={cn("MyGradient flex overflow-hidden", containerClassName)}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      {/* First copy */}
      <motion.div
        ref={ref1}
        className="flex flex-shrink-0 w-max"
        animate={controls1}
      >
        {children}
      </motion.div>

      {/* Second copy follows right after the first */}
      <motion.div
        ref={ref2}
        className="flex flex-shrink-0 w-max"
        animate={controls2}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;
