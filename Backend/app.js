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

app.use(cors());

app.use((req, res, next) => {
  //CORS (cross origine ressources sharing) pour éviter l'attaque cross-site request forgery (CSRF) et pour respecter la sécurité OWASP
  //système de sécurité par défault pour bloqué les appelles HTTP de deux servers differents, mais on le désactive car on a 2 servers differents qui doivent pouvoir se communiquer
  res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_ORIGIN); //
  res.setHeader("Access-Control-Allow-Credentials", true);
  //d'ajouter les headers mentionnés aux requêtes envoyées vers notre API
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  //d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  ); //CRUD (create, read, update, delete)
  next();
});

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
