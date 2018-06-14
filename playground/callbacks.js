// id = unique user; callback = function using id 
let getUser = function(id, callback){
    let user = {
        id: id,
        name: 'Jeffrey'
    };
    setTimeout(() =>{
        callback(user);
    }, 3000);
    
};


getUser(23, function(userObj){
    console.log(userObj);
});

// // Dark Sky API key 21db946f4fb4c006ae2f8cca60688c41
// 'https://api.darksky.net/forecast/21db946f4fb4c006ae2f8cca60688c41/42.3601,-71.0589'