import React from "react";
import "./Forcast.css";

export default function Forcast() {
  return (
    <div className="forcast-ahead">
      <div className="row">
        <div className="col">
          <p className="icon-align">
            <i class="fa-solid fa-circle sun-icon"></i>
          </p>
          <h3 className="weather-h3">Mon</h3>
          <p className="weather-details">
            {" "}
            <strong>12°c</strong> | 6°c
          </p>
        </div>
        <div className="col">
          <p className="icon-align">
            <i class="fa-solid fa-circle sun-icon"></i>
          </p>
          <h3 className="weather-h3">Tue</h3>
          <p className="weather-details">
            <strong>12°c</strong> | 6°c
          </p>
        </div>
        <div className="col">
          <p className="icon-align">
            <i class="fa-solid fa-circle sun-icon"></i>
          </p>
          <h3 className="weather-h3">Wed</h3>
          <p className="weather-details">
            <strong>12°c</strong> | 6°c
          </p>
        </div>
        <div className="col">
          <p className="icon-align">
            <i class="fa-solid fa-circle sun-icon"></i>
          </p>
          <h3 className="weather-h3">Thu</h3>
          <p className="weather-details">
            <strong>12°c</strong> | 6°c
          </p>
        </div>
        <div className="col">
          <p className="icon-align">
            <i class="fa-solid fa-cloud-showers-heavy showers-icon"></i>
          </p>
          <h3 className="weather-h3">Fri</h3>
          <p className="weather-details">
            <strong>12°c</strong> | 6°c
          </p>
        </div>
      </div>
    </div>
  );
}
