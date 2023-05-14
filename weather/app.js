const request = require("request");
const geocode = require("./geocode");
const forecast = require("./forecast");

console.log("Hello");

// const key = "8e79aceedfbd7f82837e65e476e6dc40";

geocode("Muranga", (error, { latitude, longitude, location }) => {
  if (error) {
    return console.log(error);
  }
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }

    const unixTimestamp = forecastData.weather.dt;
    const dateObj = new Date(unixTimestamp * 1000); // multiply by 1000 to convert seconds to milliseconds
    const humanReadableTime = dateObj.toLocaleString(); // returns the date and time in a human-readable format
    console.log(humanReadableTime);

    console.log(location);
    console.log("Data", forecastData);
  });
});
