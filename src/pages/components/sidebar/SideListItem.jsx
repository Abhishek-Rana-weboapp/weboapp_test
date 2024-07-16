import React, { forwardRef } from "react";

const SideListItem = forwardRef((props, ref) => {
  const { currentRef, selfRef, homeRef, servicesRef } = ref;
  return (
    <li
      onClick={(e) => {
        e.stopPropagation();
        props.onClick(selfRef, location);
      }}
      className="flex w-max items-center justify-start gap-2 p-3 text-sm transition-all duration-300 hover:scale-105 hover:cursor-pointer lg:mx-0"
    >
      {/* {props.icon} */}
      <span
        className={`${
          currentRef === selfRef.current
            ? `origin-left after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-md after:content-[''] ${currentRef === homeRef.current  ? "after:bg-white" : "after:bg-secondarybg"} relative ${currentRef === homeRef.current ? "text-white" : "text-primary"} `
            : `after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:content-[''] hover:after:w-full ${currentRef === homeRef.current  ? "text-white" : "text-primary"} origin-left after:rounded-md after:transition-all after:duration-300 ${currentRef === homeRef.current ? "after:bg-white" : "after:bg-secondarybg"} relative hover:scale-105`
        }`}
      >
        {props.children}
      </span>
    </li>
  );
});

export default SideListItem;
