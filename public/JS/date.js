window.addEventListener("load", () => {
  // Array pournom de jours
  let date = new Date();
  let jour = date.getDate();
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
    "janvier",
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

  let nomMois = moisNoms[mois];
  let nomJour = joursNoms[jour];

  let currentTime = document.querySelector(".currentTime");
  currentTime.innerHTML = nomJour + ", " + jour + " " + nomMois + " " + annee;
});
