const apikey = "3f4d00848b877ccc971f26ca481c6a84";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function gerateWeather(city) {
    const response = await fetch(url + city + "&appid=" + apikey);
    const data = await response.json();
    console.log(data);
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity; 
    document.querySelector(".wind").innerHTML = data.wind.speed;
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim(); 
    if (city) {
        gerateWeather(city); 
    } else {
        alert("Please enter a city name.");
    }
});   

console.log(city);

