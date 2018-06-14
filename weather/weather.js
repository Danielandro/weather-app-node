const request = require('request');

let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/21db946f4fb4c006ae2f8cca60688c41/${lat},${lng}?units=uk2`,
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
