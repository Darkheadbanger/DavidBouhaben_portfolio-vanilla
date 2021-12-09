(() => {
  let hamburgerBtn = document.querySelector(".hamburger-toggle");
  hamburgerBtn.addEventListener("click", displayNav);
  let isOpen = false;
  function displayNav() {
    let navDisplay = document.getElementById("navId");
    if (isOpen) {
      navDisplay.classList.remove("nav-open");
      navDisplay.classList.add("nav-close");
    } else {
      navDisplay.classList.remove("nav-close");
      navDisplay.classList.add("nav-open");
    }
    // isOpen deviens son inverse : false = true, true = false
    isOpen = !isOpen;
  }
})();
