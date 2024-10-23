import { API_URL } from "../../constants/urls"

export const fetcher = async ({ queryValue, geo }) => {
  const latitude = queryValue?.latitude
  const longitude = queryValue?.longitude
  const queryParam = geo ? `${latitude},${longitude}` : `${queryValue}`

  const url = `${API_URL}&q=${queryParam}&days=2/`

  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
