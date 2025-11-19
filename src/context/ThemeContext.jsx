import { createContext, useContext, useState } from "react";

const themeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [logoColor, setLogoColor] = useState();

  return (
    <themeContext.Provider value={{logoColor, setLogoColor}}>
      {children}
    </themeContext.Provider>
  );
};

export const useThemeContext = () => {
    const context = useContext(themeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a FormContextProvider");
        }
        return context;
};
