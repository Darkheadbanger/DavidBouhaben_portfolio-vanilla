(() => {
  let checkbox = document.getElementById("darkmode");
  let bodyId = document.getElementById("bodyId");
  let darkmodeTextSombre = document.getElementById("darkmode-Text");
  let darkmodeTextClaire = document.getElementById("darkmode-Text");


  function darkmode() {
    console.log("darkmode entrée");
    // checked == true
    if (checkbox.checked) {
      // darkmodePc();
      bodyId.classList.add("bodyDark");
      darkmodeTextSombre.innerHTML = `<i class="fas fa-lightbulb sombre"></i>Mode sombre`;
      // bodyDarkPc.classList.add("bodyDark");
      // darkmodeTextSombrePc.innerHTML = `<i class="fas fa-lightbulb sombre"></i>Mode sombre`;
    } else {
      bodyId.classList.remove("bodyDark");
      darkmodeTextClaire.innerHTML = `<i class="far fa-lightbulb claire"></i>Mode claire`;
      // bodyDarkPc.classList.remove("bodyDark");
      // darkmodeTextClairePc.innerHTML = `<i class="far fa-lightbulb claire"></i>Mode claire`;
    }
  }
  checkbox.addEventListener("click", darkmode);

})();
