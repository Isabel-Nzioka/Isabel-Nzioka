const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./weather/geocode");
const forecast = require("./weather/forecast");

const app = express();

// setup handlebars engine and views location
const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// set static directory to server
app.use(express.static(path.join(__dirname, "./utils")));

app.get("/", (req, res) => {
  res.render("index", {
    forecast: "It is raining",
    location: "Nairobi",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You Must provide an address",
    });
  }

  geocode(req.query.address, (error, { latitude, longitude, location }) => {
    if (error) {
      return res.send({ error });
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        forecast: forecastData.weatherList[0],
        // forecastlist: forecastData.weatherList[0],
        location,
        address: req.query.address,
      });
    });
  });
  // res.render("weather", {
  //   forecast: "About Weather App",
  //   name: "Isabel Nzioka",
  //   address: req.query.address,
  // });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Weather App",
    name: "Isabel Nzioka",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Page Not Found",
    name: "Isabel Nzioka",
    errorMessage: "Page not found",
  });
});

app.listen(8080, () => {
  console.log("Server is up on port 8080");
});
