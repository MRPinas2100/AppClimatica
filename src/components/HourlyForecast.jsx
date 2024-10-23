import { WeatherListElement } from "./WeatherListElement"

export const HourlyForecast = ({ hourlyForecast }) => {
  return (
    <div className="hourly-forecast">
      <ul className="weather-list">
        {hourlyForecast.map((hour) => {
          const { time_epoch, temp_c, time, condition } = hour
          const { code } = condition
          const roundedTemp = Math.floor(temp_c)
          const showTime = time.split(" ")[1].substring(0, 5)

          return (
            <WeatherListElement
              key={time_epoch}
              roundedTemp={roundedTemp}
              showTime={showTime}
              code={code}
            />
          )
        })}
      </ul>
    </div>
  )
}
