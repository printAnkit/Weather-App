const apiKey = "900e14125b94b0ba345bbc1e3c3ce818";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')
const weather_icon = document.querySelector('.weather-icon');

async function checkWeather(city){
    try {
        const response = await fetch(apiUrl +city+ '&appid=' + apiKey);
        data = await response.json();
    } catch (error) {
        console.log("Something Went Wrong. ", error);
    }
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temprature').innerHTML = data.main.temp + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "Km/h";
    
    const type = (data.weather[0].main);
    
    if(type == 'Clear'){
        weather_icon.src = "images/clear.png";
    }else if(type == 'Clouds'){
        weather_icon.src = "images/clouds.png";
    }else if(type == 'Drizzle'){
        weather_icon.src = "images/drizzle.png";
    }else if(type == 'Humidity'){
        weather_icon.src = "images/humidity.png";
    }else if(type == 'Mist'){
        weather_icon.src = "images/mist.png";
    }else if(type == 'Rain'){
        weather_icon.src = "images/rain.png";
    }else if(type == 'Snow'){
        weather_icon.src = "images/snow.png";
    }
}

searchButton.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
