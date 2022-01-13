(() => {
  let checkboxPc = document.querySelector("#darkmode-pc");
  let bodyDarkPc = document.querySelector("#bodyId");
  let darkmodeTextSombrePc = document.querySelector("#darkmode-Text-pc");
  let darkmodeTextClairePc = document.querySelector("#darkmode-Text-pc");

  function darkmodePc() {
    if (checkboxPc.checked) {
      bodyDarkPc.classList.add("bodyDark");
      darkmodeTextSombrePc.innerHTML = `<i class="fas fa-lightbulb sombre"></i>Mode sombre`;
    } else {
      bodyDarkPc.classList.remove("bodyDark");
      darkmodeTextClairePc.innerHTML = `<i class="far fa-lightbulb claire"></i>Mode claire`;
    }
  }

  checkboxPc.addEventListener("click", darkmodePc);
})();
