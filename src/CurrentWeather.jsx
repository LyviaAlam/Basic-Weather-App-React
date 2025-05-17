import React from "react";

export default function CurrentWeather() {
  const data = {
    city: "Paris",
    day: "Thursday",
    time: "12:52",
    condition: "moderate rain",
    humidity: 87,
    wind: 7.2,
    temp: 14,
  };

  return (
    <main>
      <div className="current-weather">
        <div>
          <h1>{data.city}</h1>
          <p>
            {data.day} {data.time}, {data.condition} <br />
            Humidity: <strong>{data.humidity}%</strong>, Wind:{" "}
            <strong>{data.wind}km/h</strong>
          </p>
        </div>
        <div className="main-temp">
          <span className="main-icon">☀️</span>
          <span className="main-number">{data.temp}</span>
          <span className="main-celc">°C</span>
        </div>
      </div>
    </main>
  );
}
