import React from "react";
import StarRating from "./StarRating";
import { easeInOut, motion} from "framer-motion"
import { staggeredfadeInAnimation } from "../headings/AnimateHeadings";

const fadeFromRightVariants = {
  initial:{opacity:0 , x:25},
  animate:(index)=>({opacity:1 , x:0, transition:{
    delay : index*0.1
  }})
}

const transition = (index)=> ({
  duration:0.2,
  ease:easeInOut,
  delay:0.2 * index
})

const TestimonialCard = ({data, index}) => {

  return (
    <motion.div
      {...staggeredfadeInAnimation(fadeFromRightVariants, transition , index)}
      className={`flex flex-col shrink-0 md:w-1/3 w-full items-center gap-2 rounded-lg border px-4 py-16 `}
    >
      <div className={`flex flex-col w-24 h-24 rounded-full`} style={{backgroundImage : `url(${data.img_url})` , backgroundSize : "cover" , backgroundRepeat : "no-repeat" , backgroundPosition:"center"}}>
      </div>
      <h3 className="text-xl font-semibold text-blue-400">{data.name}</h3>
      <span className="p-5">
        <StarRating rating={data.rating} size={"20px"} />
      </span>
      <p className="text-sm">{data.testimonial}</p>
    </motion.div>
  );
};

export default TestimonialCard;
