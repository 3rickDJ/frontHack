const getLatLng = (lat: number, lng: number) => {
  return { lat, lng };
}
const formatLocations = (locations: any) => {
  return locations.map((location: any) => {
    return {
      id: location.id,
      lat: location.attributes.latitud,
      lng: location.attributes.longitud,
      description: location.attributes.description,
      state: location.attributes.isEmpty
    }
  })
}

export {
  getLatLng,
  formatLocations
};