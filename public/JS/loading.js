// Creation des variables
// Ca ne fonctionne pas, il faut ajouter updateProgress en bas
let pageState = null;
let ProgressPercentage = null;
let animationInterval = 33;

// Creation d'un evenement, une fois que l'evenement du téléchargement de la page est complet (document.readyState == complete) alors on dit que l'état de la page est complet
window.document.addEventListener(
  "readystatechange",
  () => {
    if (document.readyState == "complete") {
      pageState = "complete";
    }
  },
  false
);

function updateProgress() {
  if (pageState == "complete" && ProgressPercentage != null) {
    document.querySelector(".percentage").textContent = "100%";
    document.querySelector(".wrapper").style.display = "none";
    setTimeout(() => {
      // Si le pourcentage arrive à 100% alors on efface la page et on remet une autre page
      document.querySelector(".loading--circle").style.display = "none";
    }, 700);
    setTimeout(() => {
      document.querySelector(".wrapper").style.display = "";
    }, 700);
  } else {
    if (ProgressPercentage == null) {
      ProgressPercentage = 1;
      ProgressPercentage = ProgressPercentage + 1;
    }
    if (ProgressPercentage >= 0 && ProgressPercentage <= 30) {
      animationInterval += 1;
      document.querySelector(".percentage").textContent =
        ProgressPercentage + "%";
    } else if (ProgressPercentage > 30 && ProgressPercentage <= 60) {
      animationInterval += 2;
      console.log("passe2");
      document.querySelector(".percentage").textContent =
        ProgressPercentage + "%";
    } else if (ProgressPercentage > 60 && ProgressPercentage <= 80) {
      animationInterval += 3;
      document.querySelector(".percentage").textContent =
        ProgressPercentage + "%";
    } else if (ProgressPercentage > 80 && ProgressPercentage <= 90) {
      animationInterval += 4;
      document.querySelector(".percentage").textContent =
        ProgressPercentage + "%";
    } else if (ProgressPercentage > 90 && ProgressPercentage <= 95) {
      animationInterval += 80;
      document.querySelector(".percentage").textContent =
        ProgressPercentage + "%";
    } else if (ProgressPercentage > 95 && ProgressPercentage <= 99) {
      animationInterval += 150;
      document.querySelector(".percentage").textContent =
        ProgressPercentage + "%";
    } else if (ProgressPercentage >= 100) {
      document.querySelector(".percentage").textContent = "99%";
    }
    setTimeout(updateProgress, animationInterval);
  }
}

let intervalObject = setInterval(() => {
  // Si le body different de undefined
  let elementBody = document.querySelector("body");
  let elementLoadingCircle = elementBody.querySelector(".loading--circle");
  let elementLoadingBox = elementLoadingCircle.querySelector(".loading--box");
  let percentageDiv = document.createElement("div");
  percentageDiv.className = "percentage";
  percentageDiv.textContent = "0%";
  if (elementBody != undefined) {
    setTimeout(() => {
      clearInterval(intervalObject);
      elementLoadingBox.appendChild(percentageDiv);
      updateProgress();
    });
  }
}, 50);
