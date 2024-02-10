import React from "react";
import "./Today.css";

export default function Today() {
  return (
    <div className="today-box">
      <div className="row">
        <div className="col-4">
          <h1 id="location">Surrey,UK</h1>
          <p>
            <strong id="today">Monday, Feb 19</strong>
            <br />
            <span id="time-now">15:02 </span>
            <br />
            <span id="descrip-weather">Clear Sky</span>
          </p>
        </div>
        <div className="col-4">
          <p className="todays-temp">
            <i class="fa-solid fa-circle sun-icon"></i>{" "}
            <span id="current-temp">10</span>{" "}
            <span className="unit">
              <a href="#" id="celcius-link">
                °C
              </a>{" "}
              |{" "}
              <a href="#" id="fahrenheit-link">
                °F
              </a>
            </span>
          </p>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-7">
              <h4 className="weather-h4-titles">Precipitation</h4>
            </div>
            <div className="col-5">
              <p className="weather-details">1%</p>
            </div>
            <div className="col-7">
              <h4 className="weather-h4-titles">Humidity</h4>
            </div>
            <div className="col-5">
              <p className="weather-details" id="weather-humidity">
                66%
              </p>
            </div>
            <div className="col-7">
              <h4 className="weather-h4-titles">Wind</h4>
            </div>
            <div className="col-5">
              <p className="weather-details">7 mph</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
