import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Accordian = ({ children, title }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);
  return (
    <div className="sm:w-3/4 sm:mx-auto w-full ">
      <button
        onClick={() => setAccordianOpen(!accordianOpen)}
        className="flex w-full justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-md"
      >
        <span>{title}</span>
        <MdKeyboardArrowDown
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
