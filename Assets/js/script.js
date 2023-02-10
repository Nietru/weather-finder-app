var apiKey = e1fc2300851704e2cfd8faddcf2d77ec;
var city;
var zip;

var searchFormEl = document.querySelector("#search-form");

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector("#search-input").value;

  if (!searchInputVal) {
    console.error("You need a search input value!");
    return;
  }

  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" + city + zip + apiKey;

  location.assign(queryString);
}

searchFormEl.addEventListener("submit", handleSearchFormSubmit);
