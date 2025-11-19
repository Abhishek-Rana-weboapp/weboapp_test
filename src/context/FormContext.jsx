import { createContext, useContext, useState } from "react";
import { jobFormDefaultState } from "../static/defaultStates";

const formContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [defaultJobForm, setDefaultJobForm] = useState(jobFormDefaultState);
  const [blogData, setBlogData] = useState("");
  const [serviceFormOpen, setServiceFormOpen] = useState(false);

  return (
    <formContext.Provider
      value={{
        defaultJobForm,
        setDefaultJobForm,
        blogData,
        setBlogData,
        serviceFormOpen,
        setServiceFormOpen,
      }}
    >
      {children}
    </formContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(formContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }
  return context;
};
