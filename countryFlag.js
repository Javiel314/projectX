import { getGeolocation } from "./Geolocation.js";

/***  reatrive data of users contry and for the weather data ***/
const getCountryFlag = async (country) => {
  const response = await fetch(
    `https://countries-api-836d.onrender.com/countries/name/${country}`
  );

  if (!response.ok) return null;

  const [countryData] = await response.json();
  const flagAddress = countryData.flag;

  return flagAddress;
};

export const displayCountryFlag = async (latCity = null,lngCity = null) => {
  const navContainer = document.querySelector(".nav-container");
  let html;
  try {
    let geoData;
    let country;
    let flagAddress =
      "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_48-64.png";
    if (!latCity && !lngCity) {
      geoData = await getGeolocation();
      if (!geoData) {
        html = `
                  <img class="nav-flag" src="${flagAddress}" /> 
                   Please activate your location access on the browser`;
      } else {
        country = geoData.address.country;
        const city = geoData.address.city;

        flagAddress = await getCountryFlag(country);
        if (!flagAddress)
          throw new Error(
            "Something went wrong, could not get the Country Flag Address"
          );
        html = `
              <img class="nav-flag" src="${flagAddress}" /> 
               Your are located in ${city}, ${country}`;
      }
    } else {
      geoData = await getGeolocation(latCity, lngCity);
      country = geoData.address.country;

      flagAddress = await getCountryFlag(country);
      if (!flagAddress)
        throw new Error(
          "Something went wrong, could not get the Country Flag Address"
        );
      return flagAddress;
    }
  } catch (error) {
    alert(error.message);
  }

  navContainer.insertAdjacentHTML("beforeend", html);
};
