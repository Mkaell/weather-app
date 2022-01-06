const SEARCH_FORM = document.querySelector('.search-location');
const CITY_VALUE = document.querySelector('.search-location input');
const CITY_NAME = document.querySelector('.city-name p');
const CARD_BODY = document.querySelector('.card-body');
const TIME_IMG = document.querySelector('.card-top img');
const CARD_INFO = document.querySelector('.back-card');


const splitOutCelius=(kelvin) => {
 let celcius = Math.round(kelvin - 273.15);
 return celcius;
};

const isDayTime = (icon) => {
    if(icon.includes('d')){
        return true;
    } else {
        return false;
    }
};

const updateWeatherApp = (city) => {
    const IMAGE_NAME = city.weather[0].icon;
    const ICONS_SRC = `https://openweathermap.org/img/wn/${IMAGE_NAME}@2x.png`;
    CITY_NAME.textContent = city.name;
    CARD_BODY.innerHTML = `
    <div class="card-mid row">
        <div class="col-8 text-center temp">
            <span>${splitOutCelius(city.main.temp)}&deg;C</span>
        </div>
        <div class="col-4 conditional-temp">
            <p class="condition">${city.weather[0].description}</p>
            <p class="high">${splitOutCelius(city.main.temp_max)}&deg;C</p>
            <p class="low">${splitOutCelius(city.main.temp_min)}&deg;C</p>
        </div>  
    </div>

    <div class="icon-container card shadow mx-auto">
        <img src="${ICONS_SRC}" alt="cloud_image">
    </div>
        <div class="card-bottom px-5 py-4 row">
        <div class="col text-center">
            <p>${splitOutCelius(city.main.feels_like)}&deg;C</p>
            <span>Feels Like</span>
        </div>
        <div class="col text-center">
            <p>${city.main.humidity}%</p>
            <span>Humiduty</span>
        </div>
    </div>
    `;

    if(isDayTime(IMAGE_NAME)){
        TIME_IMG.setAttribute('src', 'img/day_image.svg');
        if(CITY_NAME.classList.contains('text-white')){
            CITY_NAME.classList.remove('text-white');
            
        } else {
            CITY_NAME.classList.add('text-black');
        }
    } else {
        TIME_IMG.setAttribute('src', 'img/night_image.svg');
        if(CITY_NAME.classList.contains('text-black')){
            CITY_NAME.classList.remove('text-black');
            
        } else {
            CITY_NAME.classList.add('text-white');
        }
    }

    CARD_INFO.classList.remove('d-none');

};

//add an event listener to the form
SEARCH_FORM.addEventListener('submit', (e) => {
    e.preventDefault();

    const CITY_SEARCHED = CITY_VALUE.value.trim();
    console.log(CITY_SEARCHED);
    SEARCH_FORM.reset();

    requestCity(CITY_SEARCHED)
        .then((data) => {
            updateWeatherApp(data);
        })
        .catch((error) => {console.log(error);});

});