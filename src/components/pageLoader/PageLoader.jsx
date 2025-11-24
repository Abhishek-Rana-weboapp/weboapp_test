export default function PageLoader 
  (){
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <Loader />
      </div>
    );
  };

import { motion } from "framer-motion";

 function Loader() {
  const heights = [3, 50, 30, 10, 3, 3]; // matches your keyframe pattern

  return (
    <div className="flex justify-center items-center gap-[5px] h-[50px]">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="w-[10px] bg-primary-500 rounded-sm"
          animate={{
            height: heights,
          }}
          transition={{
            duration: 0.8,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1, // staggers like your background cascade
          }}
        />
      ))}
    </div>
  );
}

