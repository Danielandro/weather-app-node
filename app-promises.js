const yargs = require('yargs');
const axios = require('axios');
require('dotenv').config();


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

let encodedAddress = encodeURIComponent(argv.a);

let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env.GEOCODE_KEY}`;

axios(geocodeURL).then((response) => {
    // can't find address
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address');
    }    
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherURL = `https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${lat},${lng}?units=uk2`;


    console.log(response.data.results[0].formatted_address);

    return axios(weatherURL);
   
}).then((weatherResponse) => {    
    let temperature = weatherResponse.data.currently.temperature;
    let apparentTemperature = weatherResponse.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
    // can't connect to API server
    if(e.code === 'ECONNREFUSED'){
        console.log('Unable to connect to API servers');        
    }else{
        // console.log('ERROR---',e);
        console.log(e.message);
        
                
    }
    
});

