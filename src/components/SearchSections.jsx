import { useRef } from "react"
import { getLocation } from "../services/getGlobalPositionUser"

export const SearchSection = ({ getApiData }) => {
  const inputSearch = useRef(null)

  const handleCitySearch = (event) => {
    event.preventDefault()
    const searchInput = event.target.querySelector(".search-input")
    const { value } = searchInput
    getApiData({ value, geo: false })
  }

  const handleLocationSearch = async () => {
    const data = await getLocation()
    const { latitude, longitude } = data
    getApiData({ value: { latitude, longitude }, geo: true })
    inputSearch.current.value = ""
  }

  const handleChangeInput = (event) => {
    const { value } = event.target
    if (value === "") {
      handleLocationSearch()
    }
  }

  return (
    <section className="search-section" onSubmit={handleCitySearch}>
      <form action="#" className="search-form">
        <span className="material-symbols-outlined">search</span>
        <input
          ref={inputSearch}
          onChange={handleChangeInput}
          type="search"
          className="search-input"
          placeholder="Enter a city name"
          required
        />
      </form>
      <button className="location-btn" onClick={handleLocationSearch}>
        <span className="material-symbols-outlined">my_location</span>
      </button>
    </section>
  )
}
