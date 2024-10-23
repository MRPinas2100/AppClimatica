import { useEffect, useState } from "react"
import { SearchSection } from "./components/SearchSections"
import { WeatherSection } from "./components/WeatherSection"
import { fetcher } from "./services/fetcher"
import { weatherCodes } from "../constants/weatherCodesIcons"
import { filterHourlyForecast } from "./utils/filterHourlyForecast"
import { getLocation } from "./services/getGlobalPositionUser"

function App() {
  const [currentWeather, setCurrentWeather] = useState({})
  const [hourlyForecast, setHourlyForecast] = useState([])

  useEffect(() => {
    getDataGeoPosition()
  }, [])

  const getDataGeoPosition = async () => {
    const data = await getLocation()
    const { latitude, longitude } = data
    getApiData({ value: { latitude, longitude }, geo: true })
  }

  const getApiData = async ({ value, geo }) => {
    const data = await fetcher({ queryValue: value, geo })
    if (data) {
      const { current, forecast, location } = data
      const { name, region } = location
      const { forecastday } = forecast
      const temperature = Math.floor(current.temp_c)
      const description = current.condition.text
      const codeIcon = current.condition.code
      const weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(codeIcon)
      )
      const arrayOfDaysForecast = forecastday.map((array) => array.hour).flat()
      const arrayFiltered = filterHourlyForecast({ arrayOfDaysForecast })
      //Set states for the app
      setCurrentWeather({ name, region, temperature, description, weatherIcon })
      setHourlyForecast(arrayFiltered)
    } else {
      setCurrentWeather({})
      setHourlyForecast([])
    }
  }

  return (
    <div className="container">
      <SearchSection getApiData={getApiData} />
      <WeatherSection
        currentWeather={currentWeather}
        hourlyForecast={hourlyForecast}
      />
    </div>
  )
}

export default App
