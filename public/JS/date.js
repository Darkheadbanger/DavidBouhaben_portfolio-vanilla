window.onload = () => {
  // Array pour nom de jours
  let date = new Date();
  let jour = date.getDate();
  let mois = date.getMonth();
  let annee = date.getFullYear();
  const joursNoms = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
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

  let o = document.querySelector(".currentTime");
  o.innerHTML = nomJour + ", " + jour + " " + nomMois + " " + annee;
};
