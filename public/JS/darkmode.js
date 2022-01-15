(() => {
  window.addEventListener("load", (event) => {
    let checkbox = document.getElementById("darkmode");
    let bodyId = document.getElementById("bodyId");
    let darkmodeTextSombre = document.getElementById("darkmode-Text");
    let darkmodeTextClaire = document.getElementById("darkmode-Text");
    if (localStorage.getItem("darkmode") === null) {
      localStorage.setItem("darkmode", false);
    }
    setInterval(() => {
      checkDarkmode();
    });
    // Checker si le localstorage existe ou non, si il existe alors baclground noir
    function checkDarkmode() {
      if (checkbox.checked) {
        localStorage.setItem("darkmode", true);
        bodyId.classList.replace("bodyLight", "bodyDark");
        darkmodeTextSombre.innerHTML = `<i class="fas fa-lightbulb sombre"></i>Mode sombre`;
      } else {
        localStorage.setItem("darkmode", false);
        // bodyId.classList.remove("bodyDark");
        darkmodeTextClaire.innerHTML = `<i class="far fa-lightbulb claire"></i>Mode claire`;
      }
    }
    // Cliquer toggle va faire apparaitre darkmode
    function darkmode() {
      // localStorage.setItem("darkmodeMobile", checkbox.checked); // checked == true
      if (checkbox.checked) {
        localStorage.setItem("darkmode", true);
        bodyId.classList.add("bodyDark");
        darkmodeTextSombre.innerHTML = `<i class="fas fa-lightbulb sombre"></i>Mode sombre`;
      } else {
        localStorage.setItem("darkmode", false);
        bodyId.classList.remove("bodyDark");
        darkmodeTextClaire.innerHTML = `<i class="far fa-lightbulb claire"></i>Mode claire`;
      }
    }
    checkbox.addEventListener("click", darkmode);
  });
})();
