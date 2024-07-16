import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import ContactForm from "./components/forms/ContactForm";
import { FormContextProvider } from "./context/FormContext";
import { easeInOut, motion } from "framer-motion";
import TypeWriter from "./components/animateComponents/TypeWriter";
import { useState } from "react";
import Modal from "./components/modal/Modal";

function App() {
  const bgColor = "bg-primarybg";

  const variants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: easeInOut,
      },
    },
  };


  return (
    <div className={`${bgColor}`}>
      <FormContextProvider>
      <Outlet />
      </FormContextProvider>
    </div>
  );
}

export default App;
