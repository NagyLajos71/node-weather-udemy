const request = require('postman-request');

const weatherInfo=(latitude, longitude, callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=003b259e598b2d5fd36a08e44bee53e1&query=${latitude},${longitude}&units=m`;
    request({url, json:true},(error, {body})=>{
        if(error){
            callback('unable to connect to weather service', undefined)
        }else if(body.error){
            callback('unable to use provided location, try with a different location',undefined)
        }else{
            callback(undefined,{
                temperature:body.current.temperature
            })
        }
    })
}
module.exports=weatherInfo;