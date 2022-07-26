const request = require('request')
const geocode = (address, callback) =>{
    // //     // const url ='http://api.positionstack.com/v1/forward?access_key=6a451182ca14f8140359ea3f5e72e7ec&query='+encodeURIComponent(address)+'&limit=1'
      const url = 'https://api.geoapify.com/v1/geocode/search?text='+encodeURIComponent(address)+'&apiKey=2433b0e71c2c45ebb7b2418ef20eeadd&limit=1';
    
        request({url , json:true},(error,{body}={}) =>{
            if(error){
                callback('Unable to connect to location services',undefined)
            } else if(body.features.length ===0) {
                callback('Unable to find location',undefined);
            } else{
    
                callback(undefined,{
                    latitude: body.features[0].properties.lat,
                    longitude : body.features[0].properties.lon,
                    location :  body.features[0].properties.formatted
           
                })
            
        
             }
    
    });
    }
    


    module.exports = geocode;