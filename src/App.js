import './App.css';
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className='container'>
     <h1> React Weather App</h1>
     <Weather defaultCity="Bermuda"/>
<footer> This project was coded by
  <a className='text-decoration-none' href='https://deft-bienenstitch-44c693.netlify.app/' target="blank">{" "}Jazmine Outerbridge</a> and is
      <a className='text-decoration-none' href='https://github.com/JazmineOuterbridge/final-project-react' target="blank">{" "} Open-sourced</a>
       and hosted on {" "}
       <a className='text-decoration-none' href='https://www.netlify.com/' target="blank">Netlify</a></footer>
    </div></div>
  );
}


