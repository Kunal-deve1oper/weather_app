import React, { useState } from "react";
import Weather from "./Weather";

function Weathercard() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [weather, setWeather] = useState({});
  const [weatherInfo, setWeatherInfo] = useState({});

  const apiKey = "8239ded91551932134dc4887f19d3731";

  const getName = (e) => {
    setName(e.target.value);
  };

  const getData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`;
    let data = await fetch(url);
    if (data.ok) {
      let value = await data.json();
      setWeather(value);
      setLoading(true);
      setWeatherInfo(value.weather[0]);
    } else {
      alert("Enter correct city name");
    }
  };

  return (
    <div>
      <div className="search-area">
        <h1 className="heading">WEATHER APP</h1>
        <input
          type="text"
          id="formGroupExampleInput"
          placeholder="Enter City Name"
          onChange={getName}
        />
        <button type="submit" onClick={getData}>
          Search
        </button>
      </div>
      {loading ? (
        <Weather
          temperature={weather.main.temp}
          city={weather.name}
          icon={weatherInfo.icon}
          category={weatherInfo.main}
          min={weather.main.temp_min}
          max={weather.main.temp_max}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Weathercard;
