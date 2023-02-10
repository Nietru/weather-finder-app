var apiKey = e1fc2300851704e2cfd8faddcf2d77ec;
var city;

var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  APIKey;

fetch(queryURL);
