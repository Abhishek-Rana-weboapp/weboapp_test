import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Pin } from "../buttons/Pin";
import ImageComponent from "../image/ImageComponent";
import { CircleCheck } from "lucide-react";

export const StackCard = ({
  data,
  index,
  progress,
  range,
  targetScale,
  pointColor,
}) => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const colors = [
    { color: "#F4F2EF", pointColor: "#ffffff" },
    { color: "#E5DBEB", pointColor: "#f4edf7" },
    { color: "#D2E8C8", pointColor: "#e5fadc" },
  ];

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className={`sticky top-0 flex h-screen items-center justify-center bg-transparent md:p-4`}
    >
      <motion.div
    
        style={{ backgroundColor: colors[index]?.color || "#DCD7C9", scale }}
        className={`flex h-screen w-full ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} relative flex-col items-center justify-center gap-5 rounded-3xl p-4`}
      >
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex basis-1/2 flex-col justify-center gap-5 p-4 text-start">
            <h2 className="text-2xl font-semibold md:text-5xl">
              {data?.title}
            </h2>
            <p className="text-black/70">{data?.description}</p>
            <ul className="space-y-5">
              {data?.results?.points?.map((point, innerIndex) => {
                return (
                  <li
                    className={`flex w-max items-center gap-1 rounded-full p-2 px-4`}
                    style={{ backgroundColor: colors[index]?.pointColor }}
                    key={innerIndex}
                  >
                    <CircleCheck />
                    {point?.description}
                  </li>
                );
              })}
            </ul>
            <Pin
              margin={"0px 0px 0px 0px"}
              style={{ backgroundColor: colors[index]?.pointColor || "#e7e3d9" }}
              className={"md:mt-16"}
              onClick={()=>{navigate(`/project/${data.id}`)}}
            >
              View Project
            </Pin>
          </div>
          <div className="flex basis-1/2 gap-5 md:flex-col">
            <div className="mx-auto max-h-[370px] w-full max-w-[500px] basis-1/2 overflow-hidden rounded-3xl shadow-md">
              <ImageComponent src={data?.results?.image} />
            </div>
            <div className="mx-auto max-h-[370px] w-full max-w-[500px] basis-1/2 overflow-hidden rounded-3xl shadow-md">
              <ImageComponent src={data?.results?.image} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
