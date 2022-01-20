const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const app = express();
const cors = require("cors");
// const path = require("path");

//Pour lire le format application/JSON
app.use(bodyParser.json());
//Pour lire le format application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Helmet pour securiser les cookies
app.use(helmet());

app.use(
  cors({
    origin: "http://127.0.0.1:5500/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

app.get("/json?e790195a026076", (req, res) => {
  request(
    { url: "https://ipinfo.io/json?e790195a026076" },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

require("dotenv").config();

module.exports = app;
