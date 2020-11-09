import React, { useState }from "react";
import "./Weather.css";
import axios from "axios";
import Loader from 'react-loader-spinner';

export default function Weather(){
    const [weatherData, setweatherData] = useState({ ready: false });
    function handleResponse(response){
        console.log(response.data);
       setweatherData( {
           ready: true,
           temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
           wind:response.data.wind.speed,
           city: response.data.name,
           description:response.data.weather[0].description,
           iconUrl:`https://duckduckgo.com/assets/weather/svg/new/cloudy.svg`,
           dateTime: "Tuesday 07:00",
       });
        
    }
    
    if (weatherData.ready){
return  (
      <div className="Weather">
          <form>
              <div className="row">
                  <div className="col-9">
             <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" />
             </div>
             <div className="col-3">
             <input type="submit" value="Search" className="btn btn-primary w-100" />
             </div>
             </div>
          </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>{weatherData.dateTime}</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <div className="clearfix">
              <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left" />
            <div className="float-left">
  <span className="temperature">{weatherData.temperature}</span>
            <span className="units">°C</span>
            </div>
            </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Humidity:{weatherData.humidity} %
                    </li>
                    <li>
                        Wind:{weatherData.wind} km/h
                    </li>
                </ul>
            </div>
        </div>
      </div>
  );
    } else {
       const apiKey = "c8b5c278649c202b1b955ba083d5963b";
    let city ="New York"
    let apiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);  

    return(
        <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
    )
    
    }

  
}