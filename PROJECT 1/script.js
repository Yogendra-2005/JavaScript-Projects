const apiKey = "be127a72048135e1363ca2deef6def2e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&unit=standard&q= " ;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
async function checkweather(city) {
  const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
  var data = await response.json();
  
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =Math.round(data.main.temp) +  "°C";

  document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
  document.querySelector(".Wind").innerHTML = data.wind.speed+"km/h";

if(data.weather[0].main =="Clouds"){
    weatherIcon.src ="clouds.png";
}
else if(data.weather[0].main =="Rain"){
    weatherIcon.src="rain.png";
}
else if(data.weather[0].main =="Drizzle"){
    weatherIcon.src="drizzle.png";
}
else if(data.weather[0].main =="Mist"){
    weatherIcon.src="mist.png";
}
else if(data.weather[0].main =="Clear"){
    weatherIcon.src="clear.png";
}
else if(data.weather[0].main =="Haze"){
    weatherIcon.src="haze.png";
}
}
checkweather();
