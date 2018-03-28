var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=832d64ba54b9c714ab80aba3847d8bb9&units=metric';

// API key: 832d64ba54b9c714ab80aba3847d8bb9


module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            // debugger;
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } 
            else {
                return res.data.main.temp;
            }
        }, function (err) {
            throw new Error('Unable to fetch weather for that location.');
        });
    }
}