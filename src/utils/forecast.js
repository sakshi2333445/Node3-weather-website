const request = require('request')
const forecast = (latitude,longitude, callback) =>{

      const url = 'http://api.weatherstack.com/current?access_key=6dbcd2f5aa2d3ef9ef406d951937f36c&query='+latitude+','+longitude;
    
        request({url, json:true},(error,{body}={}) =>{
            if(error){
                callback('Unable to connect to location services',undefined)
            } else if(body.error) {
                callback('Unable to find location',undefined);
            } else{
    
                callback(undefined,
                body.current.weather_descriptions+'. It is currently '+body.current.temperature+' degrees out. It feels like '+ body.current.feelslike+' degrees out. '
                + body.current.precip +'% chances of rain.'
           
                )
            
        
             }
    
    });
    }
    


    module.exports = forecast;