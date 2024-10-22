function App() {
  return (
    <div className="container">
      {/* search section */}
      <section className="search-section">
        <form action="#" className="search-form">
          <span className="material-symbols-outlined">search</span>
          <input
            type="search"
            className="search-input"
            placeholder="Enter a city name"
            required
          />
        </form>
        <button className="location-btn">
          <span className="material-symbols-outlined">my_location</span>
        </button>
      </section>

      {/* weather section */}
      <section className="weather-section">
        <div className="current-weather">
          <img
            src="icons/clouds.svg"
            alt="clouds icon"
            className="weather-icon"
          />
          <h2 className="temperature">
            20 <span>°C</span>
          </h2>
          <p className="description">Partly Cloudy</p>
        </div>

        {/* Hourly weather forecastlist */}
        <div className="hourly-forecast">
          <ul className="weather-list">
            <li className="weather-item">
              <p className="time">00:00</p>
              <img
                src="icons/clouds.svg"
                alt="clouds icon"
                className="weather-icon"
              />
              <p className="temperature">20°</p>
            </li>

            <li className="weather-item">
              <p className="time">00:00</p>
              <img
                src="icons/clouds.svg"
                alt="clouds icon"
                className="weather-icon"
              />
              <p className="temperature">20°</p>
            </li>

            <li className="weather-item">
              <p className="time">00:00</p>
              <img
                src="icons/clouds.svg"
                alt="clouds icon"
                className="weather-icon"
              />
              <p className="temperature">20°</p>
            </li>

            <li className="weather-item">
              <p className="time">00:00</p>
              <img
                src="icons/clouds.svg"
                alt="clouds icon"
                className="weather-icon"
              />
              <p className="temperature">20°</p>
            </li>

            <li className="weather-item">
              <p className="time">00:00</p>
              <img
                src="icons/clouds.svg"
                alt="clouds icon"
                className="weather-icon"
              />
              <p className="temperature">20°</p>
            </li>

            <li className="weather-item">
              <p className="time">00:00</p>
              <img
                src="icons/clouds.svg"
                alt="clouds icon"
                className="weather-icon"
              />
              <p className="temperature">20°</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default App
