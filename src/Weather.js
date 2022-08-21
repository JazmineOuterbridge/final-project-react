import React from "react";
import "./Weather.css";

export default function Weather(){
return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="Search"
             placeholder="Enter City"
              className="form-control"
              autoFocus="on"/>
            </div>
            <div className="col-3">
                <input type="submit" 
                value="Search"
                 className="btn btn-primary w-100"/>
        </div>
        </div>
        </form>
    <h1>Bermuda</h1>
    <ul>
        <li>Friday 09:00</li>
        <li>Mostly Cloudy</li>
    </ul>
    <div className="row mt-3">
<div className="col-6">
    <div className="clearfix">
    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
     alt="mostly cloudy"
     className="float-left"/>
    <span className="temperature">25</span>
    <span className="unit">°C</span>
</div></div>
<div className="col-6">
    <ul>
        <li>Percipitation: 15%</li>
        <li>Humidity: 75%</li>
        <li>Wind: 10km/h%</li>
    </ul>
</div>
    </div>
</div>);
}