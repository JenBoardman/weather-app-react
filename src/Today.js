import React from "react";
import "./Today.css";

export default function Today() {
  return (
    <div className="today-box">
      <div className="row">
        <div className="col-4">
          <h1 id="location">London</h1>
          <ul>
            <li>
              <strong id="today">Monday, Feb 19</strong>
            </li>
            <li>
              <span id="time-now">Last updated 15:02 </span>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <p className="weather-temp-today">
            <i class="fa-solid fa-circle sun-icon"></i>{" "}
            <strong id="currenttemp">
              <span id="current-temp">10</span>
            </strong>{" "}
            <span className="unit">
              <a href="#" id="celcius-link" className="active">
                °C
              </a>{" "}
              |{" "}
              <a href="#" id="fahrenheit-link">
                °F
              </a>
            </span>
          </p>
        </div>
        <div className="col-3">
          <div className="weather-details">
            <p className="weather-description" id="description">
              Sunny Day
            </p>
            <ul>
              <li>
                <strong>Humidity</strong> 91%
              </li>
              <li>
                <strong>Wind</strong> 2mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
