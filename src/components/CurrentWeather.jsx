export const CurrentWeather = ({ currentWeather }) => {
  const { name, region, temperature, description, weatherIcon } = currentWeather

  return (
    <div className="current-weather">
      <img
        src={`icons/${weatherIcon ? weatherIcon : "no-result"}.svg`}
        alt="clouds icon"
        className="weather-icon"
      />
      <h2 className="temperature">
        {temperature} <span>°C</span>
      </h2>
      <p className="description">{description}</p>
      <p className="city-and-region">
        {name} - {region}
      </p>
    </div>
  )
}
