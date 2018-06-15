const request = require('request');
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
};



module.exports.getWeather = getWeather;
