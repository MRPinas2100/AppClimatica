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
        {temperature} {temperature && <span>°C</span>}
      </h2>
      <p className="description">{description}</p>
      {name && (
        <p className="city-and-region">
          {name ? name : "No weather"} - {region ? region : "information"}
        </p>
      )}
    </div>
  )
}
