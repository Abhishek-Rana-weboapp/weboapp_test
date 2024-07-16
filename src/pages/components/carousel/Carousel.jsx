import React, { useState, useEffect } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import useMediaQueries from "../../hooks/useMediaQueries";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 6000,
  multiple = 1,
}) => {
  const { isMobile, isTab, isDesktop } = useMediaQueries();
  const [totalSlides, setTotalSlides] = useState(
    isDesktop || isTab ? Math.ceil(slides?.length / multiple) : slides?.length,
  );
  const [curr, setCurr] = useState(0);

  const prev = () => {
    if (totalSlides > 1) {
      setCurr((curr) => (curr === 0 ? totalSlides - 1 : curr - 1));
    }
  };

  const next = () => {
    if (totalSlides > 1) {
      setCurr((curr) => (curr === totalSlides - 1 ? 0 : curr + 1));
    }
  };

  useEffect(() => {
    if (!autoSlide) return;
    if (totalSlides <= 1) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr, totalSlides]);

  useEffect(() => {
    if (isTab) {
      if (multiple) {
        setCurr(0);
        setTotalSlides(Math.ceil(slides?.length / multiple));
      }
    }
    if (isMobile) {
      setCurr(0);
      setTotalSlides(slides?.length);
    }
  }, [isDesktop, isTab, slides]);

  return (
    <div className="relative min-h-full overflow-hidden py-10">
      <div
        className={`flex min-h-5/6 transition-transform duration-500 ease-out ${!isMobile && multiple > 1 ? "gap-1" : ""} py-1`}
        style={{
          transform: `translateX(-${curr * (100 + (isMobile ? 0 : multiple > 1 ? 0.5 * (2 ^ (curr / 100)) : 0))}%)`,
        }}
      >
        {slides}
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: totalSlides }, (_, i) => i).map((s, i) => (
            <div
              key={i}
              onClick={() => setCurr(i)}
              className={`h-4 w-4 rounded-full transition-all hover:cursor-pointer ${curr === i ? "bg-neutral-500 p-0.5" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
