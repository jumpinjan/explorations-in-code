import  { getData }  from "./apicalls";
//import getTime from "./apicalls";


const weatherData =  getData('http://api.openweathermap.org/data/2.5/weather?q=US-DC');
console.log("the weather is ", weatherData);