import { useState } from "react";
import { WeatherInfo } from "./WeatherInfo";

export const WeatherDay = ({days}) => {
  const [tittle, setTittle] = useState("No hay día seleccionado");
  const changeTittle = (tittle) => {
    setTittle(tittle)
  }
  return (
    <div className="clima">
      <span>
        <h2>{tittle}</h2>
      </span>
      {
      days.map((day) => {
        return (
          <WeatherInfo 
          weather = {day.weather} 
          key={day.number}
          onClick ={changeTittle}/>
        );
      })
      }
    </div>
  );
};