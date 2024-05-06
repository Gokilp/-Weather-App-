const apikey = "3f4d00848b877ccc971f26ca481c6a84";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".Weather-icon");

async function gerateWeather(city) {
  const response = await fetch(url + city + "&appid=" + apikey);
  const data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML = data.wind.speed;
  if(data.weather[0].icon == "Clouds") 
    {
      weathericon.src = "images/cloud.png";
    } else if(data.weather[0].icon == "Clear") {
      weathericon.src = "images/clear.png";
  } else if (data.weather[0].icon == "Rain") {
    weathericon.src = "images/rain.png";
     }else if(data.weather[0].icon == "Drizzle") {
      weathericon.src = "images/drizzle.png";
  }
  else if (data.weather[0].icon == "Mist") {
    weathericon.src = "images/mist.png";
}
}

const handleCitySearch = () => {
  const city = searchBox.value.trim();
  if (city) {
    gerateWeather(city);
  } 
};

searchBtn.addEventListener("click", handleCitySearch);

searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleCitySearch();
  }
});
