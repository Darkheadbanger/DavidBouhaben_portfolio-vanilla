// Je dois pointer vers la classe hamburger
let hamburgerBtn = document.querySelector(".hamburger-toggle");
let currentTime = document.querySelector("#currentTime");
// let isOpen = false;

function openCurrentTimeColorChange(openColorTime, blackColorTime) {
  // this.classList.toggle("currentTimeBlack");
  let color = document.getElementsByClassName(openColorTime);
  for (i = 0; i < color.length; i++) {
    color[i].style.color = blackColorTime;
  }
}

function closeCurrentTimeColorChange(closeColorTime, whiteColorTime) {
  // this.classList.toggle("currentTimeBlack");
  let color = document.getElementsByClassName(closeColorTime);
  for (i = 0; i < color.length; i++) {
    color[i].style.color = whiteColorTime;
  }
}

function hamburgerClicked(event) {
  // Pour changer couleur currentTime
  event.preventDefault();
  let open = this.classList.toggle("opened");
  console.log(open);

  if (open) {
    setTimeout(() => {
      openCurrentTimeColorChange("currentTime__element--modifier", "black");
    }, 400);
  } else {
    setTimeout(() => {
      closeCurrentTimeColorChange("currentTime__element--modifier", "white");
    }, 600);
  }
}
// Je dois créer un evenement cloique qui va communiuqer avec la classe hamburger toggle pour ensuite lui dire d'exectuer le css pour qu'il deviens X
hamburgerBtn.addEventListener("click", hamburgerClicked);
