const request = require("request");

const geocode = (address, callback) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${address}&appid=8e79aceedfbd7f82837e65e476e6dc40`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to Connect to lacation services. Try Again", undefined);
    } else if (!response.body.length) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body[0].lat,
        longitude: response.body[0].lon,
        location: response.body[0].name,
      });
    }
  });
};

// const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;
// const url = `https://api.openweathermap.org/data/2.5/forecast?lat=lat=-0.7167&lon=37.15&appid=8e79aceedfbd7f82837e65e476e6dc40&units=metric`;
// const url = "https://api.openweathermap.org/data/2.5/weather?q=Murang'a&appid=8e79aceedfbd7f82837e65e476e6dc40&units=metric";
// `https://api.openweathermap.org/data/2.5/weather?lat=-0.7167&lonn=37.15&appid=8e79aceedfbd7f82837e65e476e6dc40&units=metric
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8e79aceedfbd7f82837e65e476e6dc40&units=metric`;
// const geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=muranga&appid=8e79aceedfbd7f82837e65e476e6dc40`;

module.exports = geocode;
