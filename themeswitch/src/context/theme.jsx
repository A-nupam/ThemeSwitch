import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkMode: ()=> {},
    lightMode: ()=> {},
})

export const ThemeProvider = ({children})=>{
    const [themeMode,setThemeMode] = useState("light");

    const lightMode =()=>{
        console.log("lightMode function called");
        setThemeMode("light");
    }
    const darkMode =()=>{
        console.log("darkMode function called");
        setThemeMode("dark");
    }
    useEffect(()=>{
        console.log("Theme changed to:", themeMode);
        const htmlElement = document.querySelector("html");
        htmlElement.classList.remove("light","dark");
        htmlElement.classList.add(themeMode);
        console.log("HTML classes after update:", htmlElement.classList.toString());
    },[themeMode]);

    return (
        <ThemeContext.Provider value={{themeMode,lightMode,darkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default function useTheme(){
    return useContext(ThemeContext)
}