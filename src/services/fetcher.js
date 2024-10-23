import { API_URL } from "../../constants/urls"

export const fetcher = async ({ queryValue, geo }) => {
  const latitude = queryValue?.latitude
  const longitude = queryValue?.longitude
  const queryParam = geo ? `${latitude},${longitude}` : `${queryValue}`

  const url = `${API_URL}&q=${queryParam}&days=2`

  try {
    const response = await fetch(url)
    let data = {}
    if (response.ok) {
      data = await response.json()
    } else {
      data = null
    }
    return data
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
