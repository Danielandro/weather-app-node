// function to make geolocation call
const request = require('request');

let geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);
    let apiKey;
    
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`,
        json: true
    }, (error, response, body) => {

        if (error || !body.status) {
            callback('Unable to connect to Google servers');            
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');                        
        }
        else if (body.status === 'OK' && response.statusCode === 200) {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });            
        }

    });

};

module.exports = {
    geocodeAddress
};


