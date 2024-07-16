import React, { forwardRef } from "react";
import TestimonialCard from "../../components/cards/TestimonialCard";
import { motion } from "framer-motion";
import useFetchTestimonials from "../../hooks/useFetchTestimonials";
import Carousel from "../../components/carousel/Carousel";
import FadeInHeading from "../../components/headings/FadeInHeading";
import Parallax from "../../components/parallax/Parallax";
import useMediaQueries from "../../hooks/useMediaQueries";

const Clients = forwardRef((_, ref) => {

  const {testimonials} = useFetchTestimonials()
  const {isMobile} = useMediaQueries()


  return (
    <div
      className="w-full sm:min-h-[786px] flex flex-col gap-20 mt-10 p-4 relative lg:pt-20"
      ref={ref}
    >
      <FadeInHeading
      >
        What our clients have to say{" "}
        <span className=" text-blue-400">about us</span>
      </FadeInHeading>
      {!isMobile ? <Parallax columns={3}/> : 
      <motion.div className="flex gap-10 shrink-0 md:w-full lg:w-3/4  w-full overflow-hidden mx-auto relative px-4">
        <div className="w-full">
        <Carousel autoSlide={true} autoSlideInterval={4000} multiple={3}>
        { testimonials && testimonials.map((data, index) => {
          return <TestimonialCard key={index} index={index} data={data} />;
        })}
        </Carousel>
        </div>
      </motion.div>
}
    </div>
  );
});

export default Clients;
