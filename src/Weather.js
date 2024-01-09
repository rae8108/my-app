import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form id="search-form">
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control"
                aria-describedby="cityHelp"
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <button type="submit" className="btn btn-info button">
            search
          </button>
          <button type="submit" className="btn btn-info location">
            current location
          </button>
        </div>
      </form>
      <h1>London</h1>
      <p>Clear Skies</p>
      <div className="text">
        <span className="temperature">5</span>
        °C
      </div>
      <ul>
        <li>
          Humidity: <span> 4%</span>%
        </li>
        <li>
          Wind: <span>0</span>mph
        </li>
      </ul>
      <small className="footer">
        <a
          href="https://github.com/rae8108/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Rayan
      </small>
    </div>
  );
}
