const request = require("request");

const forecast = (lat, lon, callback) => {
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8e79aceedfbd7f82837e65e476e6dc40&units=metric`;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=8e79aceedfbd7f82837e65e476e6dc40&units=metric`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.message) {
      callback("Unable to find Location", undefined);
    } else {
      callback(undefined, {
        weather: body,
        weatherList: body.list,
      });
    }
  });
};

module.exports = forecast;
