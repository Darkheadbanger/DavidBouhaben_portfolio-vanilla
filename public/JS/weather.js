window.addEventListener("load", () => {
  // weather api
  let keyWeather = "514eb68bb2feadc6869bbd11dde4c5c3";
  let unit = "metric";
  let lang = "fr";

  // ipApi
  let proxyHeroku = "https://cors-anywhere.herokuapp.com/";
  // let keyIp = "17cb1786a2a12deb27be3edee3b6936e";
  // let apiIp = `http://api.ipstack.com/check?access_key=${keyIp}`;

  let apiIp = `https://www.cloudflare.com/cdn-cgi/trace`;
  console.log(apiIp);

  function foundLocationByIp() {
    axios(apiIp, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(response);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log("Success");
        console.log(data);
      })
      .catch((error) => {
        if (typeof error.json === "function") {
          error
            .json()
            .then((jsonError) => {
              console.error("Json error from API openweathermap");
              console.error(jsonError.message);
            })
            .catch((genericError) => {
              console.log("Generic error from API");
              console.error(genericError.message);
            });
        } else {
          console.log("fetch error");
          console.error(error.message);
        }
      });
  }
  foundLocationByIp();

  function storeCoordinatesSucces(position) {
    console.log("Votre position actuelle est :");
    console.log(`Latitude : ${position.coords.latitude}`);
    console.log(`Longitude : ${position.coords.longitude}`);
    console.log(`La précision est de ${position.coords.accuracy} mètres.`);
  }

  if (navigator.geolocation) {
    function foundLocation(position) {
      let long = position.coords.longitude;
      let lat = position.coords.latitude;
      console.log(long, lat);
      let weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${keyWeather}&units=${unit}&lang=${lang}`;
      fetch(weatherApi)
        .then((response) => {
          if (!response.ok) {
            return Promise.reject(response);
          } else {
            return response.json();
          }
        })
        .then((data) => {
          console.log("Success");
          console.log(data);
        })
        .catch((error) => {
          switch (error) {
            case GeolocationPositionError.TIMEOUT:
              doFallback();
              console.log("Erreur de connexion dépassée");
              // Handle timeout.
              break;
            case GeolocationPositionError.PERMISSION_DENIED:
              console.log(
                "L'utilisateur a refusé la demande de la localisation"
              );
              // User denied the request.
              break;
            case GeolocationPositionError.POSITION_UNAVAILABLE:
              console.log("La position n'est pas disponible");
              // Position not available.
              break;
          }
        });
      console.log(weatherApi);
    }
  } else {
    console.log("Geolocalisation n'est pas disponible");
  }

  function errorHandler(err) {
    console.error(`ERREUR (${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(
    storeCoordinatesSucces,
    errorHandler,
    foundLocation,
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: Infinity,
    }
  );
  function doFallback() {}
});
