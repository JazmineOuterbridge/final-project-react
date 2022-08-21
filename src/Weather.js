import React, {useState} from "react";
import "./Weather.css";
import axios from "axios"

export default function Weather(){
    const [weatherData, setweatherData] = useState({ready : false});
function handleResponse(response){
    console.log(response.data);
    setweatherData ({
        ready:true,
        temperature:response.data.main.temp,
        city: response.data.name,
        description: response.data.weather[0].description,
        iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        date:"Friday 08:00",
        feels:response.data.main.feels_like,
        percipitation: response.data.main,
        humidity: response.data.main.humidity,
        wind: response.data.wind.spped,
        sunrise: response.data.sys.sunrise,
        sunset:response.data.sys.sunset,

    });
}

if (weatherData.ready){
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
    <h1>{weatherData.city}</h1>
    <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
    </ul>
    <div className="row mt-3">
<div className="col-6">
    <div className="clearfix">
    <img src={weatherData.iconUrl}
     alt={weatherData.description}
     className="float-left"/>
    <span className="temperature">{Math.round(weatherData.temperature)}</span>
    <span className="unit">°C</span>
</div></div>
<div className="col-6">
    <ul>
        <li>Feels like: {weatherData.feels}</li>
        <li>Percipitation: {weatherData.percipitation}</li>
        <li>Humidity: {weatherData.humidity}</li>
        <li>Wind: {weatherData.wind}</li>
        <li>Sunrise: {weatherData.sunrise}</li>
        <li>Sunset: {weatherData.sunset}</li>
    </ul>
</div>
    </div>
</div>);
}

else {
    const apiKey ="4424f47a7ba13df2c5f786dc0f0a7049";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${weatherData.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return(
      <h1>  "Loading.....";</h1>
    )
}
}