import { useEffect } from "react";
import { cn } from "../../utils/axios/helperfunctions";
import { X } from "lucide-react";

const Modal = ({ children, isOpen,handleModalClose,contentClass,containerClass }) => {
 useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
    document.documentElement.style.overflow = "unset";
  }

  return () => {
    document.body.style.overflow = "unset";
    document.documentElement.style.overflow = "unset";
  };
}, [isOpen]);


  return (
    <>
      {isOpen && (
        <div
          className={cn("fixed inset-0 z-[1001] flex items-center justify-center p-4 backdrop-blur-md bg-black/50",containerClass)}
          onClick={(e)=>{
            handleModalClose()
          e.stopPropagation()
          }}
        >
          <div className={cn("w-max relative", contentClass)} onClick={(e) => e.stopPropagation()}>
          <X className="absolute top-4 right-4 hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out" size={25} onClick={handleModalClose} />
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
