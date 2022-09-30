import { WeatherDay } from "./WeatherDay";

export const WeatherList = () => {
  return (
    <>
      <WeatherDay
        days = {[
          {
            number: 1,
            weather: "Sunny 🌞",
          },
          {
            number: 2,
            weather: "Foggy ⛅",
          },
          {
            number: 3,
            weather: "Rainy ☔",
          },
        ]}
      />
    </>
  );
};