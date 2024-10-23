export const filterHourlyForecast = ({ arrayOfDaysForecast }) => {
  const currentHour = new Date().setMinutes(0, 0, 0)
  const next24Hours = currentHour + 24 * 60 * 60 * 1000
  const next24HoursData = arrayOfDaysForecast.filter(({ time }) => {
    const forecastTime = new Date(time).getTime()
    return forecastTime >= currentHour && forecastTime <= next24Hours
  })
  return next24HoursData
}
