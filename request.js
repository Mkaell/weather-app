const KEY = 'c459ac6ff4f032910d7580c0f588537e';

const requestCity = async (city) => {
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const QUERY = `?q=${city}&appid=${KEY}`;

    //make fetch call (promise call)
    const RESPONSE = await fetch(BASE_URL + QUERY);

    //promise data
    const DATA = await RESPONSE.json();
    return DATA;
};

