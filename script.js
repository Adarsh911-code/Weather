const apiKey = "56c911ffa096fc54e0a1f5f7dbbbb4ab";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.main.temp +"°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "clouds.png"
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "clear.png"
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "rain.png"
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "drizzle.png"
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "mist.png"
}
else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "snow.png"
}

document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})