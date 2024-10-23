import { CurrentWeather } from "./CurrentWeather"
import { HourlyForecast } from "./HourlyForecast"

export const WeatherSection = ({ currentWeather, hourlyForecast }) => {
  return (
    <section className="weather-section">
      <CurrentWeather currentWeather={currentWeather} />
      <HourlyForecast hourlyForecast={hourlyForecast} />
    </section>
  )
}
