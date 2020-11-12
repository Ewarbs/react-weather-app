import React, {useState} from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./WeatherForecast.css";
export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);
   
function handleForecastResponse(response){
    setForecast(response.data);
    setLoaded(true);


    console.log(response.data);

}


if(loaded && props.city === forecast.city.name) {
    return (
    <div className="weatherForecast row">
            <WeatherForecastPreview data={forecast.list[0]} />
             <WeatherForecastPreview data={forecast.list[1]} />
              <WeatherForecastPreview data={forecast.list[2]} />
               <WeatherForecastPreview data={forecast.list[3]} />
                <WeatherForecastPreview data={forecast.list[4]} />

            
        </div>
        

    );

}else{
    let apiKey ="c8b5c278649c202b1b955ba083d5963b";
   let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
   axios.get(url).then (handleForecastResponse);
    return null;
}


}