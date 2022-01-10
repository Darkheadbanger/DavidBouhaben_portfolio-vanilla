window.addEventListener("load", () => {
  // Array pournom de jours
  let date = new Date();
  let jour = date.getDate();
  let jourNom = date.getDay();
  console.log(jour);
  let mois = date.getMonth();
  let annee = date.getFullYear();
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

  let currentTime = document.querySelector(".currentTime");
  currentTime.innerHTML = nomJour + ", " + jour + " " + nomMois + " " + annee;
});