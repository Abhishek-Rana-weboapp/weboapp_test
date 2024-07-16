import React, { useEffect, useRef } from "react";
import { testimonialData } from "../../static/testimonialData";
import StarRating from "../cards/StarRating";
import webdev from "../../assets/webdev.jpg";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "lenis";
import useFetchTestimonials from "../../hooks/useFetchTestimonials";

const Parallax = ({columns=4}) => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const {testimonials} = useFetchTestimonials()

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight *2]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight *3.1]);
  const y2= useTransform(scrollYProgress, [0, 1], [0, window.innerHeight *1.25]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight *3]);
  return (
    <div
      className="flex h-[175vh] gap-[2vw] overflow-hidden justify-center bg-gray-300 p-[2vw] box-border"
      ref={container}
    >
      <Column
        cards={[testimonials[0], testimonials[1], testimonials[2]]}
        y={y}
      />
      <Column
        cards={[testimonials[1], testimonials[2], testimonials[0]]}
        y={y1}
      />
      <Column
        cards={[testimonials[2], testimonials[0], testimonials[1]]}
        y={y2}
      />
      {/* <Column
        cards={[testimonialData[9], testimonialData[10], testimonialData[11]]}
        y={y3}
      /> */}
    </div>
  );
};

export default Parallax;

const Column = ({ cards, y = 0 }) => {
  return (
    <motion.div className="flex w-1/4 flex-col h-max gap-4 relative  [&:nth-child(1)]:-top-[45%] [&:nth-child(2)]:-top-[95%] [&:nth-child(3)]:-top-[35%] [&:nth-child(4)]:-top-[75%]" style={{ y }}>
      {cards.map((card, index) => {
        return (
          <div className="h-full w-full relative" key={index}>
            <div className="h-full rounded-3xl border p-4 bg-white">
              <div
                className={`flex h-72 flex-col rounded-3xl`}
                style={{
                  backgroundImage: `url(${card?.img_url})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition:"center"
                }}
              ></div>
              <h3 className="text-xl font-semibold text-blue-400 mt-2">
                {card?.name}
              </h3>
              <span className="p-1">
                <StarRating rating={card?.rating} size={"20px"} />
              </span>
              <p className="text-sm">{card?.testimonial}</p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};
