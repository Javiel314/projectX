/*** initialize weather information ***/
const cloudCoverData = new Map();
const windSpeedData = new Map();
const windDirectionIconCollection = new Map();
const weatherTypeIconCollection = new Map();
const weatherTypeDescription = new Map();

const initCloudCoverData = () => {
  cloudCoverData.set(1, "0%-6%");
  cloudCoverData.set(2, "6%-19%");
  cloudCoverData.set(3, "19%-31%");
  cloudCoverData.set(4, "31%-44%");
  cloudCoverData.set(5, "44%-56%");
  cloudCoverData.set(6, "56%-69%");
  cloudCoverData.set(7, "69%-81%");
  cloudCoverData.set(8, "81%-94%");
  cloudCoverData.set(9, "94%-100%");
};

const initWindSpeedData = () => {
  windSpeedData.set(1, "Below 0.3ms/s (calm)");
  windSpeedData.set(2, "0.3-3.4ms/s (ligt) ");
  windSpeedData.set(3, "3.4-8.0m/s (moderate)");
  windSpeedData.set(4, "8.0-10.8m/s (fresh)");
  windSpeedData.set(5, "10.8-17.2m/s (strong)");
  windSpeedData.set(6, "17.2-24.5m/s (gale)");
  windSpeedData.set(7, "24.5-32.6m/s (storm)");
  windSpeedData.set(8, "Over 32.6m/s (hurricane)");
};


const iniweatherTypeIconCollection = () => {
  weatherTypeIconCollection.set(
    "clearday",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-64.png"
  );
  weatherTypeIconCollection.set(
    "clearnight",
    "https://cdn4.iconfinder.com/data/icons/weatherful/72/Moon-64.png"
  );
  weatherTypeIconCollection.set(
    "pcloudyday",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_49-64.png"
  );
  weatherTypeIconCollection.set(
    "pcloudynight",
    "https://cdn2.iconfinder.com/data/icons/weather-blue-filled-line/32/weather_cloud_moon_night_sleep_half_moon_crescent-64.png"
  );
  weatherTypeIconCollection.set("mcloudyday", "");
  weatherTypeIconCollection.set(
    "mcloudynight",
    "https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy_Moon-64.png"
  );
  weatherTypeIconCollection.set(
    "cloudyday",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_1-64.png"
  );
  weatherTypeIconCollection.set(
    "cloudynight",
    "https://cdn3.iconfinder.com/data/icons/climate-iconset/40/Cloudy-64.png"
  );
  weatherTypeIconCollection.set(
    "humidday",
    "https://cdn0.iconfinder.com/data/icons/weather-962/64/Humidity-64.png"
  );
  weatherTypeIconCollection.set(
    "humidnight",
    "https://cdn3.iconfinder.com/data/icons/home-appliances-color/735/humidifier-64.png"
  );
  weatherTypeIconCollection.set(
    "lightrainday",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_14-64.png"
  );
  weatherTypeIconCollection.set(
    "lightrainnight",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_15-64.png"
  );
  weatherTypeIconCollection.set(
    "oshowerday",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_7-64.png"
  );
  weatherTypeIconCollection.set(
    "oshowernight",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_8-64.png"
  );
  weatherTypeIconCollection.set(
    "ishowerday",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_17-64.png"
  );
  weatherTypeIconCollection.set(
    "ishowernight",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_18-64.png"
  );
  weatherTypeIconCollection.set(
    "lightsnowday",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_36-64.png"
  );
  weatherTypeIconCollection.set(
    "lightsnownight",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_37-64.png"
  );
  weatherTypeIconCollection.set(
    "rainday",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_16-64.png"
  );
  weatherTypeIconCollection.set(
    "rainnight",
    "https://cdn3.iconfinder.com/data/icons/climate-iconset/40/Cloudy__Snowy-64.png"
  );
  weatherTypeIconCollection.set(
    "snowday",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_35-64.png"
  );
  weatherTypeIconCollection.set(
    "snownight",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_37-64.png"
  );
  weatherTypeIconCollection.set(
    "rainsnowday",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_33-64.png"
  );
  weatherTypeIconCollection.set(
    "rainsnownight",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_34-64.png"
  );
  weatherTypeIconCollection.set(
    "tsday",
    "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-storm-64.png"
  );
  weatherTypeIconCollection.set(
    "tsnight",
    "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather09-64.png"
  );
  weatherTypeIconCollection.set(
    "tsrainday",
    "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_24-64.png"
  );
  weatherTypeIconCollection.set(
    "tsrainnight",
    "https://www.iconfinder.com/icons/4102318/cloud_heavy_rain_rain_storm_thunderbolt_thunderstorm_weather_icon"
  );
};

const initWeatherTypeDescreption = () => {
  weatherTypeDescription.set("clearday", "Clear Sky");
  weatherTypeDescription.set("clearnight", "Clear Sky");
  weatherTypeDescription.set("pcloudyday", "Partly Cloudy");
  weatherTypeDescription.set("pcloudynight", "Partly Cloudy");
  weatherTypeDescription.set("mcloudyday", "Cloudy");
  weatherTypeDescription.set("mcloudynight", "Cloudy");
  weatherTypeDescription.set("cloudyday", "Very Cloudy");
  weatherTypeDescription.set("cloudynight", "Very Cloudy");
  weatherTypeDescription.set("humidday", "Humid Day");
  weatherTypeDescription.set("humidnight", "Humid Day");
  weatherTypeDescription.set("lightrainday", " Light Rain");
  weatherTypeDescription.set("lightrainnight", "Light Rain");
  weatherTypeDescription.set("oshowerday", "Occasional Showers");
  weatherTypeDescription.set("oshowernight", "Occasional Showers");
  weatherTypeDescription.set("ishowerday", "Isolated Showers");
  weatherTypeDescription.set("ishowernight", "Isolated Showers");
  weatherTypeDescription.set("lightsnowday", " Light or Occasional Snow");
  weatherTypeDescription.set("lightsnownight", "Light or Occasional Snow");
  weatherTypeDescription.set("rainday", "Rain Day");
  weatherTypeDescription.set("rainnight", "Rain Day");
  weatherTypeDescription.set("snowday", "Snowy Day");
  weatherTypeDescription.set("snownight", "Snowy Day");
  weatherTypeDescription.set("rainsnowday", "Mixed Rain and Snow");
  weatherTypeDescription.set("rainsnownight", "Mixed Rain and Snow");
  weatherTypeDescription.set("tsday", "Thunderstorm possible");
  weatherTypeDescription.set("tsnight", "Thunderstorm possible");
  weatherTypeDescription.set("tsrainday", "Thunderstorm and Rain");
  weatherTypeDescription.set("tsrainnight", "Thunderstorm and Rain");
};

const initWindDirectionIconCollection = () => {
  windDirectionIconCollection.set(
    "N",
    "https://cdn2.iconfinder.com/data/icons/map-and-navigation-12/48/57-64.png"
  );
  windDirectionIconCollection.set(
    "NE",
    "https://cdn1.iconfinder.com/data/icons/smallicons-controls/32/614350-45_3-64.png"
  );
  windDirectionIconCollection.set(
    "E",
    "https://cdn2.iconfinder.com/data/icons/map-and-navigation-12/48/60-64.png"
  );
  windDirectionIconCollection.set(
    "SE",
    "https://cdn1.iconfinder.com/data/icons/smallicons-controls/32/614351-45_4-64.png"
  );
  windDirectionIconCollection.set(
    "S",
    "https://cdn2.iconfinder.com/data/icons/map-and-navigation-12/48/58-64.png"
  );
  windDirectionIconCollection.set(
    "SW",
    "https://cdn1.iconfinder.com/data/icons/smallicons-controls/32/614349-45_2-64.png"
  );
  windDirectionIconCollection.set(
    "W",
    "https://cdn2.iconfinder.com/data/icons/map-and-navigation-12/48/59-64.png"
  );
  windDirectionIconCollection.set(
    "NW",
    "https://cdn1.iconfinder.com/data/icons/smallicons-controls/32/614348-45_1-64.png"
  );
};

export const initWeatherData = () => {
  initCloudCoverData();
  initWindDirectionIconCollection();
  initWindSpeedData();
  iniweatherTypeIconCollection();
  initWeatherTypeDescreption();
};

/*** get weather information ***/
export const getCloudCoverData = (cloudCover) => {
  return cloudCoverData.get(cloudCover);
};

export const getWindspeedData = (windSpeed) => {
  return windSpeedData.get(windSpeed);
};
export const getWindDirectionIcon = (windDirection) => {
  return windDirectionIconCollection.get(windDirection);
};

export const getWeatherTypeIcon = (weatherType) => {
  return weatherTypeIconCollection.get(weatherType);
};

export const getWeatherTypeDescription = (weatherType) => {
  return weatherTypeDescription.get(weatherType);
};
