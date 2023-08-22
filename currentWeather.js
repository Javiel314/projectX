import { displayCountryFlag } from "./countryFlag.js";
import {
  getCloudCoverData,
  getWindspeedData,
  getWindDirectionIcon,
  getWeatherTypeIcon,
  getWeatherTypeDescription,
} from "./weatherData.js";

/*** retrieve data for getting the weatherinformation***/

const getCoords = async (city) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${city}&format=json`
  );
  if (!response.ok) return null;

  const [coords] = await response.json();

  return coords;
};

const getWeatherdata = async (lat, lng) => {
  const response = await fetch(
    `http://www.7timer.info/bin/api.pl?lon=${lng}&lat=${lat}&product=civil&output=json`
  );
  if (!response.ok) return null;

  const dataCollection = await response.json();
  const data = dataCollection.dataseries[33];

  return data;
};

export const displayCurrentWeather = async (city) => {
  try {
    if (!isNaN(city)) throw new Error("Type again! Only letters aloud!");

    const weatherDisplayContainer = document.querySelector(
      ".weather-display-container"
    );
    const coords = await getCoords(city);
    if (!coords)
      throw new Error(
        "Could not get coordinates for the city. City may not exiset. Watch out for typos! "
      );

    const { lat, lon: lng } = coords;

    const weatherData = await getWeatherdata(lat, lng);
    if (!weatherData)
      throw new Error(
        "Something went wrong,could not get weather data. Please try again later!"
      );

    const {
      cloudcover: cloudCover,
      rh2m: relativeHumidity,
      temp2m: temperature,
      weather: weatherType,
    } = weatherData;
    
    const { direction: windDirection, speed: windSpeed } = weatherData.wind10m;

    const weatherIcon = getWeatherTypeIcon(weatherType);
    const weatherTypeDescription = getWeatherTypeDescription(weatherType);
    const cloudCoverInfo = getCloudCoverData(cloudCover);
    const windDirectionIcon = getWindDirectionIcon(windDirection);
    const windSpeedInfo = getWindspeedData(windSpeed);
    const countryFlagAddress = await displayCountryFlag(lat, lng);

    const html = `
          <h1>Current Weather for ${city}
              <!-- <div class="weather-flag-container"> -->
              <img class="weather-flag"
                  src="${countryFlagAddress}">
              <!-- </div> -->
          </h1>
          <article class="weather-information">
              <img class="weather-img"
                  src="${weatherIcon}">
              <p>${weatherTypeDescription}</p>
          </article>
          <article class="weather-information">
              <h2>Temperature:</h2>
              <p>${temperature} °C</p>
          </article>
          <article class="weather-information">
              <h2>Cloud Coverage:</h2>
              <p>${cloudCoverInfo}</p>
          </article>
          <article class="weather-information">
              <h2>Humidity:</h2>
              <p>${relativeHumidity}</p>
          </article>
          <article class="weather-information">
              <h2>Wind:</h2>
              <p>Direction: <img class="weather-flag"
              src="${windDirectionIcon}"> <img class="weather-speed"
                      src="https://cdn2.iconfinder.com/data/icons/scenarium-vol-1-2/128/027_fast_speed_performance_dashboard_speedometer_gauge-64.png">: ${windSpeedInfo}
              </p>
          </article>`;

    weatherDisplayContainer.innerHTML = html;

  } catch (err) {
    alert(err.message);
  }
};
