import { useReducer } from "react";
import ThemeContext from "./ThemeContext";
import ThemeReducer from "./ThemeReducer";

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, {
    mode: "",
    color: "",
  });
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
