import React, { useState }from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import Loader from 'react-loader-spinner';


export default function Weather(props){
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setweatherData] = useState({ ready: false });
    function handleResponse(response){
       setweatherData( {
           ready: true,
           temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
           wind:response.data.wind.speed,
           city: response.data.name,
           description:response.data.weather[0].description,
           icon:response.data.weather[0].icon,
           dateTime: new Date(response.data.dt * 1000),
       });
        
    }
    
function search(){
 const apiKey = "c8b5c278649c202b1b955ba083d5963b";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);  

}


    function handleSubmit(event){
    event.preventDefault();
    search();
    }

    function handleCityChange(event){
    setCity(event.target.value);
    }

    if (weatherData.ready){
return  (
      <div className="Weather">
          <form onSubmit={handleSubmit}>
              <div className="row">
                  <div className="col-9">
             <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" onChange={handleCityChange} />
             </div>
             <div className="col-3">
             <input type="submit" value="Search" className="btn btn-primary w-100" />
             </div>
             </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast city={weatherData.city} />
        
      </div>
  );
    } else {
        search();
    return(
        <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
    );
    
    }

  
}