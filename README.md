# Weather Finder Application

## Description

- My motivation for this project was to familiarize myself with server side API documentation and implementing that with jQuery.
- This application allows the user to get weather in real time, and expected weather for the next 5 days, in a particular city.
- The user also has their 10 most recent searches stored, but I did not figure out how to append search history buttons to repopulate the current search.
- During the process of creating this app, I learned that reading the API documentation thoroughly is the key to success, and that all server-side APIs are different.
- I unfortunately did not get the icons to display without an error in the DOM console, so I decided to comment them out for now.

## Usage

- Users can open the Weather Finder Application and enter the city name of their choice in the search bar.
- The user will then see the name of the city, today's date and time, and the current temperature, humidity, and wind speed in said city.
- Below that, on the web-app, they will see a 5-day forecast with the dates for the next 5 days, the temperature High and Low, and the humidity expected each day.

![An image of the Weather Finder Application](./Assets/images/Capture1.PNG?raw=true)

## License

Please refer to the project repository on Github for license information.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```
