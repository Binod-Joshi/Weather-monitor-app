import React from "react";
import "./TemperatureDetails.css";
import {
  UilTear,
  UilWind,
  UilCelsius,
  UilSun,
  UilSunset,
  UilCompressArrows,
} from "@iconscout/react-unicons";
import { UserContext } from "../../context/Context";

const TemperatureDetails = () => {
  const { city, country, population, dayList } = UserContext();
  console.log(city);

  return (
    <div className="back">
      {dayList.slice(0, 1).map((day, id) => {
        const { temp, weather, humidity, speed, pressure, sunrise, sunset } =
          day;
        return (
          <div key={id}>
            <div className="maincloudyorWhatever">
              <p style={{ fontSize: "larger" }}>
                {city} , {country}
              </p>
              <p>Population: {population.toLocaleString()}</p>
              <p style={{ background: "none" }}>{weather[0].main}</p>
            </div>
            <div className="weather">
              <img className="img1"
                src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
                alt=""
              />
              <p className="mainTemp" >
                {temp.day} <UilCelsius  />
              </p>

              <div className="totalDetails">
                <div className="detail">
                  <UilCompressArrows style={{ background: "none" }} />
                  Atm pressure:
                  <span style={{ background: "none" }}>{pressure} hpa</span>
                </div>
                <div className="detail">
                  <UilTear style={{ background: "none" }} />
                  humidity:
                  <span style={{ background: "none" }}>{humidity}%</span>
                </div>
                <div className="detail">
                  <UilWind style={{ background: "none" }} />
                  Wind speed:
                  <span style={{ background: "none" }}> {speed} m/s N</span>
                </div>
              </div>
            </div>

            <div className="dayRiseSet" style={{ background: "none" }}>
              <UilSun style={{ background: "none" }} />
              <p style={{ background: "none" }}>
                Rise:{" "}
                <span style={{ background: "none" }}>
                  {new Date(sunrise * 1000).toLocaleTimeString().slice(0, 4)} AM
                </span>
              </p>
              <p style={{ background: "none" }} className="slicewalo">
                |
              </p>

              <UilSunset style={{ background: "none" }} />
              <p style={{ background: "none" }}>
                Set:{" "}
                <span style={{ background: "none" }}>
                  {new Date(sunset * 1000).toLocaleTimeString().slice(0, 4)} PM
                </span>
              </p>
              <p style={{ background: "none" }} className="slicewalo">
                |
              </p>

              <UilSun style={{ background: "none" }} />
              <p style={{ background: "none" }}>
                High: <span style={{ background: "none" }}>{temp.max}°C </span>
              </p>
              <p style={{ background: "none" }} className="slicewalo">
                |
              </p>

              <UilSun style={{ background: "none" }} />
              <p style={{ background: "none" }}>
                Low: <span style={{ background: "none" }}>{temp.min}°C </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TemperatureDetails;
