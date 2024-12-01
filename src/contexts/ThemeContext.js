// src/contexts/ThemeContext.js
import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createTheme } from "../styles/theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState("light");
  const theme = createTheme(colorMode);

  const toggleColorMode = () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
