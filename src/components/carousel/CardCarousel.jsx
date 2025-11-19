import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { twMerge } from "tailwind-merge";
import { ChevronLeft } from "lucide-react";

const CardContext = createContext(undefined);

const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("CardContext is not defined");
  }
  return context;
};

const CardCarousel = ({
  data,
  Card,
  multiple = 1,
  auto = true,
  timer = 10,
  containerClass,
  arrows=true,
  dotsClass
}) => {
  //multiple prop represents how many cards you want to show at once
  const windowDimensions = useWindowDimensions();
  const [itemIndex, setItemIndex] = useState(0);
  const dragX = useMotionValue(0);
  const ONE_SECOND = 1000;

  useEffect(() => {
    if (auto) {
      const intervalRef = setInterval(() => {
        const x = dragX.get();
        if (x === 0) {
          if (windowDimensions.width > 786 && multiple > 1) {
            setItemIndex((pv) => {
              if (pv === data.length - multiple) {
                return 0;
              }
              return pv + 1;
            });
          } else {
            setItemIndex((pv) => {
              if (pv === data.length - 1) {
                return 0;
              }
              return pv + 1;
            });
          }
        }
      }, ONE_SECOND * timer);

      return () => clearInterval(intervalRef);
    }
  }, [windowDimensions, timer]);

  if (multiple < 1) {
    throw new Error("multiple cannot be lower than 1");
  }

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -(windowDimensions.width >= 768 ? 50 : 1)) {
      if (windowDimensions.width <= 768) {
        if (itemIndex < data.length - 1) {
          setItemIndex((pv) => pv + 1);
        }
      } else {
        if (multiple > 1) {
          if (itemIndex < data.length - multiple) {
            setItemIndex((pv) => pv + 1);
          }
        } else {
          if (itemIndex < data.length - 1) {
            setItemIndex((pv) => pv + 1);
          }
        }
      }
    } else if (x >= (windowDimensions.width > 768 ? 50 : 1)) {
      if (itemIndex > 0) {
        setItemIndex((pv) => pv - 1);
      }
    }
  };



  return (
    <CardContext.Provider value={{ data, Card, multiple }}>
      <div className={twMerge("relative mx-auto w-full md:w-3/4", containerClass)}>
       {arrows && <> <ChevronLeft
          size={30}
          onClick={()=>{
            if(itemIndex > 0){
              setItemIndex(itemIndex-1)
            }
          }}
          className={`absolute -left-5 top-[50%] -translate-y-[50%] ${itemIndex > 0 ? "block" : "hidden"} `}
        />
        <ChevronLeft
          size={30}
          onClick={()=>{
            if(itemIndex < data.length -1){
              setItemIndex(itemIndex + 1)
            }
          }}
          className={`absolute -right-5 top-[50%] -translate-y-[50%] rotate-180 ${windowDimensions.width > 768 ? (multiple > 1 ? (itemIndex < data.length - multiple ? "block" : "hidden") : itemIndex < data.length - 1 ? "block" : "hidden") : itemIndex < data.length - 1 ? "block" : "hidden"}`}
        /></>}
        <div className="relative w-full overflow-hidden h-full">
          <motion.div
            style={{
              x: dragX,
            }}
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            onDragEnd={onDragEnd}
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              translateX:
                multiple > 1
                  ? windowDimensions.width >= 768
                    ? `-${itemIndex * (100 / multiple)}%`
                    : `-${itemIndex * 100}%`
                  : `-${itemIndex * 100}%`,
              transition: {
                type: "spring",
                damping: 50,
                stiffness: 400,
                mass: 3,
              },
            }}
            className="flex w-full cursor-grab items-center h-full active:cursor-grabbing"
          >
            <Data />
          </motion.div>
          <Dots itemIndex={itemIndex} setItemIndex={setItemIndex} dotsClass={dotsClass} />
        </div>
      </div>
    </CardContext.Provider>
  );
};

export default CardCarousel;

const Data = () => {
  const windowDimensions = useWindowDimensions();
  const { data, Card, multiple } = useCardContext();
  return (
    <>
      {data?.map((test, index) => {
        return (
          <div
            key={index}
            className="flex-shrink-0 h-full"
            style={{
              width:
                windowDimensions.width > 786 ? `${100 / multiple}%` : `100%`,
            }}
          >
            <Card data={test} />
          </div>
        );
      })}
    </>
  );
};

const Dots = ({ itemIndex, setItemIndex,dotsClass }) => {
  const { data, multiple } = useCardContext();
  const windowDimensions = useWindowDimensions();

  const [dotsLength, setDotsLength] = useState([]);
  useEffect(() => {
    windowDimensions.width >= 768
      ? multiple > 1
        ? setDotsLength(Array(data?.length - multiple + 1).fill(1))
        : setDotsLength(Array(data?.length).fill(1))
      : setDotsLength(Array(data?.length).fill(1));
  }, [windowDimensions, data]);

  return (
    <div className={twMerge("mt-4 flex w-full justify-center gap-2", dotsClass)}>
      {dotsLength?.map((_, index) => {
        return (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${itemIndex === index ? "bg-neutral-200" : "bg-neutral-600"}`}
            onClick={() => setItemIndex(index)}
          />
        );
      })}
    </div>
  );
};
