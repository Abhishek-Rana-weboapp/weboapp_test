import React, { useEffect } from "react";

const Modal = ({ children, isOpen }) => {

    useEffect(()=>{
       if(isOpen){
        document.body.style.overflow = 'hidden';
       }

       return ()=>{
        document.body.style.overflow = "unset"
       }
    },[isOpen])

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 backdrop-blur-md inset-0 flex justify-center items-center p-4" onClick={(e)=>e.stopPropagation()}>
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
