(() => {
  let hamburgerBtn = document.querySelector(".hamburger-toggle");
  hamburgerBtn.addEventListener("click", displayNav);

  function displayNav() {
    let navDisplay = document.getElementById("navId");
    navDisplay.classList.toggle("nav-open");
    navDisplay.classList.toggle("nav-close");
  }
})();
