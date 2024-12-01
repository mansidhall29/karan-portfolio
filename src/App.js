import "./App.css";
import Home from "./pages/Home";
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
