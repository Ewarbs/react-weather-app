import React from "react";
import "./Weather.css";
export default function Weather(){
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
        <h1>New York</h1>
        <ul>
            <li>Wednesday 0:700</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <div className="clearfix">
              <img src="https://duckduckgo.com/assets/weather/svg/new/cloudy.svg" alt="Mostly cloudy" className="float-left" />
            <div className="float-left">
            <span className="temperature">6</span>
            <span className="units">°C</span>
            </div>
            </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                      Precipitation: 15%  
                    </li>
                    <li>
                        Humidity:72%
                    </li>
                    <li>
                        Wind:13km/h%
                    </li>
                </ul>
            </div>
        </div>
      </div>
  )
}