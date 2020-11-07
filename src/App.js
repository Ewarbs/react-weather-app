import './App.css';
import Weather from "./Weather";

export default function App() {
return (
    <div className="App">
      <div className="container">
    <h1>Weather App</h1> 
    <Weather />
<footer>
  This Project has been created by Emily Warburton and is{" "}
     <a href="https://github.com/Ewarbs/react-weather-app" target="blank">
  open-sourced
     </a>
     </footer>
     </div>
    </div>
  );
}

