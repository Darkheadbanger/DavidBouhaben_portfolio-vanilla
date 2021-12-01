let pageState = null;
let ProgressPercentage = null;
let animationInterval = 33;

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
  if (pageState == "complete") {
    document.querySelector("percentage").innerHTML = 100;
    console.log(cent);
    setTimeout(() => {
      // Si le pourcentage arrive à 100% alors on efface la page et on remet une autre page
      document.querySelector("percentage").style.display = "none";
    }, 700);
  } else {
    if (ProgressPercentage == null) {
      ProgressPercentage = 1;
    }
    ProgressPercentage = ProgressPercentage + 1;
    if (ProgressPercentage >= 0 && ProgressPercentage <= 30) {
      animationInterval += 1;
      document.querySelector("percentage").innerHTML = ProgressPercentage;
    } else if (ProgressPercentage > 30 && ProgressPercentage <= 60) {
      animationInterval += 2;
      document.querySelector("percentage").innerHTML = ProgressPercentage;
    } else if (ProgressPercentage > 60 && ProgressPercentage <= 80) {
      animationInterval += 3;
      document.querySelector("percentage").innerHTML = ProgressPercentage;
    } else if (ProgressPercentage > 80 && ProgressPercentage <= 90) {
      animationInterval += 4;
      document.querySelector("percentage").innerHTML = ProgressPercentage;
    } else if (ProgressPercentage > 90 && ProgressPercentage <= 95) {
      animationInterval += 80;
      document.querySelector("percentage").innerHTML = ProgressPercentage;
    } else if (ProgressPercentage > 95 && ProgressPercentage <= 99) {
      animationInterval += 150;
      document.querySelector("percentage").innerHTML = ProgressPercentage;
    } else if (ProgressPercentage >= 100) {
      document.querySelector("percentage").innerHTML = 99;
    }
    setTimeout(updateProgress, animationInterval);
  }
}

let elementLoadingBox = document.querySelector(".loading--box");
let percentageDiv = document.createElement("div");
percentageDiv.className = "percentage";
let percentageText = document.createTextNode("%");
percentageDiv.appendChild(percentageText);
elementLoadingBox.appendChild(percentageDiv);

let intervalObject = setInterval(() => {
  // Si le body different de undefined
  // if (elementLoadingBox != undefined) {
  //   clearInterval(elementLoadingBox);
  //   elementLoadingBox.appendChild(percentageClass);
  //   document.elementLoadingBox.appendChild(percentageDiv);
  //   updateProgress();
  // }
}, 50);
