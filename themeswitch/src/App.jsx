import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeContext } from "./context/theme";
import { useEffect } from "react";
import { ThemeProvider } from "./context/theme.jsx";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider> 
  );
}

export default App;
