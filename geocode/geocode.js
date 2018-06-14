// function to make geolocation call
const request = require('request');

let geocodeAddress = (address) => {
    let encodedAddress = encodeURIComponent(address);
    let apiKey = 'AIzaSyCVkWwXtkDo6G6DfyDAoRvF-JgRjCppJ-Q';
    
    return new Promise((resolve ,reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`,
            json: true
        }, (error, response, body) => {

            if (error || !body.status) {
                reject('Unable to connect to Google servers');
            }
            else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address');
            }
            else if (body.status === 'OK' && response.statusCode === 200) {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }

        });

    });
    
};

module.exports.geocodeAddress = geocodeAddress;

