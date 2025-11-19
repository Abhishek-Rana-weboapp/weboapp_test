import { useState, useEffect } from "react";

const useIsTabActive = () => {
  const [isTabActive, setIsTabActive] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabActive(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return isTabActive;
};

export default useIsTabActive