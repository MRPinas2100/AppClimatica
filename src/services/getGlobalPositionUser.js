const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords)
      },
      (error) => {
        reject(error)
      }
    )
  })
}

export const getLocation = async () => {
  try {
    const coords = await getPosition()
    return coords
  } catch (error) {
    console.error("Error al obtener la ubicación: ", error)
  }
}
