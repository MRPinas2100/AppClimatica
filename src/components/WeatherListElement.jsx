import { weatherCodes } from "../../constants/weatherCodesIcons"

export const WeatherListElement = ({ roundedTemp, showTime, code }) => {
  const weatherIcon = Object.keys(weatherCodes).find((icon) =>
    weatherCodes[icon].includes(code)
  )
  return (
    <li className="weather-item">
      <p className="time">{showTime}</p>
      <img
        src={`icons/${weatherIcon}.svg`}
        alt={`${weatherIcon} icon`}
        className="weather-icon"
      />
      <p className="temperature">{roundedTemp}°</p>
    </li>
  )
}
