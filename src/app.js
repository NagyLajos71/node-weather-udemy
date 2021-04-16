const static  = require('express');
const express=require('express');
const path=require('path');
const hbs=require('hbs');
const geocode=require('../utils/geocode');
const weatherInfo=require('../utils/weatherInfo')

//define path for express config
const viewsDirectoryPath=path.join(__dirname,'../templates/views' );
const publicDirectoryPath=path.join(__dirname, '../public');
// const partialPath=path.join(__dirname, '../templates/partials');

const app = express();
app.use(express.static(publicDirectoryPath))


//setup handlebars engine and views location
// app.set('view engine','hbs');//dynamic template
// app.set('views',viewsDirectoryPath);//dynamic template
// hbs.registerPartials(partialPath);

//dynamic page to serve
// app.get('',(req,res)=>{
//     res.render('index',{title:'Weather App', name:'Lajos'})
// })
// app.get('/about',(req,res)=>{
//     res.render('about',{title:'ABOUT page', description:'this page is a subset of the weather App', name:'Lajos'})
// })
// app.get('/help',(req,res)=>{
//     res.render('help',{title:'HELP page', message:'for help please see the documentation', name:'Lajos'})
// })
// app.get('/weather',(req,res)=>{
//     if(!req.query.address){
//         return res.send({error: 'you must provide your location'})}
    
//     // res.send({title: 'FORECAST page', forecast: '6C°', location:req.query.address, name:'Lajos'})
//     geocode(req.query.address,(error,{latitude, longitude, location})=>{
//         if(error){
//             return res.send({error})
//         }weatherInfo(latitude, longitude,(error,forecastData)=>{
//             if(error){
//                 return res.send({error})
//             }res.send({title: 'FORECAST page', forecast: forecastData, location:req.query.address, name:'Lajos'})
//         })
//     })
// })
// app.get('/products',(req,res)=>{
//     if(!req.query.search){
//         return res.send({error:'you must provide a search term'})
//     }
//     console.log(req.query.search)
//     res.send({products:[]})
// })
// app.get('/help/*',(re,res)=>{
//     res.render('404',{message:'help article not found...'})
// })
// app.get('*',(req,res)=>{
//     res.render('404',{message: 'page not found'})
// })

app.listen(3030,()=>{
    console.log('server is up on port 3000.')
})
