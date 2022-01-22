window.addEventListener("load", () => {
  // Array pournom de jours
  function clock() {
    let date = new Date();
    console.log(date);

    let jour = date.getDate();
    let jourNom = date.getDay();
    console.log(jour);
    let mois = date.getMonth();
    let annee = date.getFullYear();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    // let second = date.getSeconds();
    const joursNoms = [
      "Dimanche", //0
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];

    const moisNoms = [
      "janvier", //0
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre",
    ];

    let nomMois = moisNoms[mois]; //dans le tableau moisNoms, on nrécupère (a partir de 0) le getmonth récupéré depuis newDate
    let nomJour = joursNoms[jourNom];

    // let utcShort = { timeZone: "UTC", timeZoneName: "short" };
    // let GMT = date.toLocaleTimeString("fr", utcShort);
    //
    let currentTime = document.querySelector(".currentTime");
    currentTime.innerHTML =
      "<div class='heureCol'>" +
      `<span>${heure}:${minute}:${second} GMT+2</span>` +
      `<span> ${nomJour} ${jour} ${nomMois} ${annee}</span>`;
  }
  setInterval(clock, 1000);

  clock();
});
