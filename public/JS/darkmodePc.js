(() => {
  window.addEventListener("load", () => {
    let checkboxPc = document.querySelector("#darkmode-pc");
    let bodyIdPc = document.querySelector("#bodyId");
    let darkmodeTextSombrePc = document.querySelector("#darkmode-Text-pc");
    let darkmodeTextClairePc = document.querySelector("#darkmode-Text-pc");
    if (localStorage.getItem("darkmode") === null) {
      localStorage.setItem("darkmode", false);
    }
    setInterval(() => {
      checkDarkmode();
    });

    function checkDarkmode() {
      if (checkboxPc.checked) {
        localStorage.setItem("darkmode", true);
        bodyIdPc.classList.add("bodyDark");
        darkmodeTextSombrePc.innerHTML = `<i class="fas fa-lightbulb sombre"></i>Mode sombre`;
      } else {
        localStorage.setItem("darkmode", false);
        bodyIdPc.classList.remove("bodyDark");
        darkmodeTextClairePc.innerHTML = `<i class="far fa-lightbulb claire"></i>Mode claire`;
      }
    }
    function darkmodePc() {
      if (checkboxPc.checked) {
        localStorage.setItem("darkmode", true);
        bodyIdPc.classList.add("bodyDark");
        darkmodeTextSombrePc.innerHTML = `<i class="fas fa-lightbulb sombre"></i>Mode sombre`;
      } else {
        localStorage.setItem("darkmode", false);
        bodyIdPc.classList.remove("bodyDark");
        darkmodeTextClairePc.innerHTML = `<i class="far fa-lightbulb claire"></i>Mode claire`;
      }
    }

    checkboxPc.addEventListener("click", darkmodePc);
  });
})();
