const KEY = 'c459ac6ff4f032910d7580c0f588537e';

// const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=c459ac6ff4f032910d7580c0f588537e';

// fetch(BASE_URL)
//     .then((data) => { console.log('response', data.json()); })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
    const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
    const QUERY = `?q=${city}&appid=${KEY}`;

    //make fetch call (promise call)
    const RESPONSE = await fetch(BASE_URL + QUERY);

    //promise data
    const DATA = await RESPONSE.json();
    return DATA;
};
