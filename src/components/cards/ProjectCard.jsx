import { motion, easeOut, easeIn } from "framer-motion";
import { useEffect, useRef } from "react";

const ProjectCard = () => {
  const videoRef = useRef(null)

  const handleMouseEnter = ()=>{
    videoRef.current.play()
  }

  const handleMouseLeave = ()=>{
    videoRef.current.pause()
    videoRef.current.currentTime = 0
  }

    return (
      <div className="h-[80vh] w-full rounded-2xl p-5 text-2xl even:mt-44">
        <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, transition: { duration: 0.6, ease: easeOut } }}
        viewport={{ once: true }}
        className="h-3/4"
        >

        <video
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ref={videoRef}
        className="h-full w-full rounded-lg object-cover"
        muted
        >
          <source src="/Sample.mp4" type="video/mp4"/>
        </video>
          </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: easeIn },
          }}
          viewport={{ once: true }}
          className="mt-4"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, ex hic
          facere provident optio magnam. Commodi maiores iusto tempora, corrupti
          veritatis eligendi tenetur quasi recusandae sunt! Ipsum vero iure totam?
        </motion.div>
      </div>
    );
  };

  export default ProjectCard