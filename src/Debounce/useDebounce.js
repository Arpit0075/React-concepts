//custom hook to be used inside functional component
import { useState, useEffect } from "react";

export const useDebounce = (string, delay = 1000) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    let id = setTimeout(() => {
      setValue(string);
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [string, delay]);
  return value;
};
