const getUserLocation = () => {
  // Promise fullfiled and not fullfiled callback function
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

/*** retreaving data for user location ***/
export const getGeolocation = async (latCity, lngCity) => {
  try {
    let lat = latCity;
    let lng = lngCity;

    if (!latCity && !lngCity) {
      const location = await getUserLocation();

      const { latitude, longitude } = location.coords;
      lat = latitude;
      lng = longitude;
    }

    const GeoResponse = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    const dataGeo = await GeoResponse.json();

    return dataGeo;

  } catch (err) {
    alert(err.message);
  }

  return null;
};
