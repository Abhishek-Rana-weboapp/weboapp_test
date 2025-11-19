import { cn } from "../../utils/axios/helperfunctions"

const Button = ({children, className,variant="default", ...rest}) => {

  const variants = {
    default : "bg-primary-700 text-white hover:bg-primary-600",
    secondary : "bg-white text-primary-700 hover:bg-primary-600 hover:text-white",
    outline:"border border-primary-700 text-primary-700 hover:bg-primary-600 hover:text-white"
  }

  return (
    <button className={cn("p-[6px] px-4 rounded-md transition-all duration-200 ease-in-out shadow-md font-medium", variants[variant], className)}  {...rest}>
      {children}
    </button>
  )
}

export default Button



// import React from "react";
// import { twMerge } from "tailwind-merge";

// const Button = ({
//   children,
//   className,
//   variant = "normal",
//   size = "small",
//   ...props
// }) => {
//   const buttonSizes = {
//     small: "md:text-base text-sm px-4 py-2",
//     medium: "md:text-xl text-base px-5 py-2",
//     large: "md:text-3xl text-xl px-6 py-3",
//     larger: "md:text-4xl text-2xl px-10 py-4",
//   };

//   const buttonVariants = {
//     normal: "bg-blue-400 text-white",
//     black: "bg-[#222] text-white",
//     transparent: "bg-white/25 text-white",
//     gray: "bg-gray-400/25",
//     blue: "bg-[#5588FF] text-white",
//     white: "bg-white border-[#5588FF] ",
//   };
//   return (
//     <button
//       {...props}
//       className={twMerge(
//         "flex items-center justify-center gap-2 rounded-full transition-all duration-200 ease-in-out hover:scale-105",
//         buttonSizes[size],
//         buttonVariants[variant],
//         className,
//       )}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
