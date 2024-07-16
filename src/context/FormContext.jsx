import { createContext, useContext, useState } from "react";
import { jobFormDefaultState } from "../static/defaultStates";

const formContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [defaultJobForm, setDefaultJobForm] = useState(jobFormDefaultState);

  return (
    <formContext.Provider value={{ defaultJobForm, setDefaultJobForm }}>
      {children}
    </formContext.Provider>
  );
};

export const useFormContext = () => useContext(formContext);
