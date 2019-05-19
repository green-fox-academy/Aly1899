'use strict'
const f=require('./assets/forecast-data')
const forecasts=f.forecasts
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use('/',express.static(__dirname + '/assets'))


app.get('/', (req, res) => {
  // res.send('Hello')
  res.render('home',{forecasts:forecasts});
  });


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(forecasts)
});
  
function click(arr,elem){
  window.location.reload()
  app.get('/', (req, res) => {
    // res.send('Hello')
    let newForecast=filterForecats(arr,arr[elem].city)
    res.render('week',{
      forecasts:forecasts,
      newForecast:newForecast});
    });
}

// const dashboardArr=document.getElementsByClassName('dashboard')
// for (let i=0;i<dashboardArr.length;i++){
//   dashboardArr[i].addEventListener('click', function(){
//     let weekForecasts = filterForecats(forecasts,forecasts[i].city)

//     window.location.reload()
//     app.get('/', (req, res) => {
//     res.send('Hello')
//     res.render('week',{forecasts:weekForecasts});
//     });
//   })
// }


function filterForecats(forecastArr,city){
  return forecastArr.filter(e=>{
    return forecastArr.city=city
  })
}