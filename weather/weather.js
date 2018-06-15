const request = require('request');
<<<<<<< HEAD

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
=======
let weatherKey;
let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${weatherKey}/${lat},${lng}?units=uk2`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {            
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }else {            
            callback('Unable to fetch weather');
        }
    });
>>>>>>> 92a83ccd04931e10113884fd7ff7c6650d3c4622
};



module.exports.getWeather = getWeather;
