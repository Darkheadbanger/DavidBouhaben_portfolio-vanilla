(() => {
  let hamburgerBtn = document.querySelector(".hamburger-toggle");
  hamburgerBtn.addEventListener("click", displayNav);
  let isOpen = false;
  function displayNav() {
    let navDisplay = document.getElementById("navId");
    let navId = document.querySelector("nav");
    if (isOpen) {
      navDisplay.classList.remove("nav-open");
      navDisplay.classList.add("nav-close");
      navId.classList.remove("nav-animation");
    } else {
      navDisplay.classList.remove("nav-close");
      navDisplay.classList.add("nav-open");
      navId.classList.add("nav-animation");
    }
    // isOpen deviens son inverse : false = true, true = false
    isOpen = !isOpen;
  }
})();
