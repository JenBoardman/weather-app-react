import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="search-form">
      <form id="search-form">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter location..."
              className="form-control"
              id="city-input"
            />
          </div>
          <div className="col-2">
            <button type="submit" className="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="col-2">
            <button
              type="submit"
              className="locationbutton"
              id="location-button"
            >
              <i className="fa-solid fa-location-crosshairs"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
