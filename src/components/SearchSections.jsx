import { useRef } from "react"

export const SearchSection = ({ getApiData }) => {
  const inputSearch = useRef(null)
  const handleCitySearch = (event) => {
    event.preventDefault()
    const searchInput = event.target.querySelector(".search-input")
    const { value } = searchInput
    getApiData({ value, geo: false })
  }

  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        getApiData({ value: { latitude, longitude }, geo: true })
      },
      () => {
        alert("Location access denied.")
      }
    )
    inputSearch.current.value = ""
  }

  return (
    <section className="search-section" onSubmit={handleCitySearch}>
      <form action="#" className="search-form">
        <span className="material-symbols-outlined">search</span>
        <input
          ref={inputSearch}
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
