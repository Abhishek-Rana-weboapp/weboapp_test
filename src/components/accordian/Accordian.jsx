import { ArrowDown } from "lucide-react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const Accordian = ({ children, title, className, containerClass }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);
  return (
    <div className={twMerge("w-full", containerClass)}>
      <button
        onClick={() => setAccordianOpen(!accordianOpen)}
        className={twMerge("flex w-full justify-between items-center p-4 rounded-md", className)}
      >
        <span>{title}</span>
        <ArrowDown
          size={20}
          className={`${
            accordianOpen ? "rotate-180" : "rotate-0"
          } transition-all duration-300`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordianOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Accordian;
