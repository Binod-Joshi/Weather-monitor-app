import React from "react";
import { UserContext } from "../../context/Context";
import "./Forecast.css";

const Forecast = ({ title }) => {
  const { dayList } = UserContext();
  

  const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  const dayInWeek = new Date().getDay();
  const afterDay = dayNames.slice(dayInWeek,dayNames.length).concat(dayNames.slice(0,dayInWeek));

  return (
    <div>
      <div className="hourForecast">
        <p className="p">{title}</p>
      </div>
      <hr/>
      <div className="hfs">
        
        {dayList.map((day,idx) => {
            const{temp,weather} = day;
          return (
          
            <div className="hour" key={idx}>
              <p className="dayafter">{afterDay[idx]}</p>
              <p className="cloudcheck1">{weather[0].main}</p>
              <img
                className="cloudcheckimg"
                src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
                alt=""
              />
              <p className="ptem">{temp.min} °C - {temp.max} °C</p>
              

            </div>
                  

          );
        })}

      </div>
    </div>
  );
};

export default Forecast;
