import './App.css';
import Weather from "./Weather.js";
import DarkModeToggle from "react-dark-mode-toggle";
import { createContext, useState } from 'react';


export const ThemeContext = createContext(undefined);

export default function App() {
  const[theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr ==="light" ? "dark": "light"));
  };
  return (
    <ThemeContext.Provider value ={{theme, toggleTheme}}>
    <div className="App center" id={theme}>
      <div className='container'>
     <h1> React Weather App{" "}<DarkModeToggle
      onChange={toggleTheme}
      checked={theme === "dark"}
      size={80}
    /></h1>
     <Weather defaultCity="Bermuda"/>
<footer> This project was coded by
  <a className='text-decoration-none' href='https://deft-bienenstitch-44c693.netlify.app/' target="blank">{" "}Jazmine Outerbridge</a> and is
      <a className='text-decoration-none' href='https://github.com/JazmineOuterbridge/final-project-react' target="blank">{" "} Open-sourced</a>
      {" "} and hosted on {" "}
       <a className='text-decoration-none' href='https://www.netlify.com/' target="blank">Netlify</a></footer>
    
    </div></div>
    </ThemeContext.Provider>
  );
}


