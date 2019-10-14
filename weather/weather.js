const request = require('request');

let getWeather = (lat, lng) => {

    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/${lat},${lng}?units=uk2`,
            json: true
        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve({
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                });
            } else {
                reject('Unable to fetch weather');
            }
        });
    });
};


module.exports.getWeather = getWeather;
