import {useState, useContext, createContext } from "react";


const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
}

export const useThemeUpdateContext = () => {
  return useContext(ThemeUpdateContext);
}

const ThemeProvider = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider};