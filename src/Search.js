import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <p className="Search-form">
      <form id="search-form">
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              className="form-control"
              placeholder="Enter Location"
              id="location-name"
            />
          </div>
          <div className="col-1">
            <button type="submit" class="button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="col-1">
            <button type="submit" class="locationbutton" id="location-button">
              <i class="fa-solid fa-location-crosshairs"></i>
            </button>
          </div>
        </div>
      </form>
    </p>
  );
}
