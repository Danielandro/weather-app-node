const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            describe: 'Address to fetch weather for',
            demand: true,
            alias: 'address',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// call to Google Maps Geocode API    
geocode.geocodeAddress(argv.a).then((location) => {
    console.log(location.address);
    // call to DarkSky API
    return weather.getWeather(location.latitude, location.longitude);

}).then((weatherResults) => {
    console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
}).catch((errorMessage) => {
    console.log(errorMessage);
});
