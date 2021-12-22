(() => {
  let checkbox = document.getElementById("darkmode");
  let bodyId = document.getElementById("bodyId");
  let darkmodeTextSombre = document.getElementById("darkmode-Text");
  let darkmodeTextClaire = document.getElementById("darkmode-Text");

  function darkmode() {
    // checked == true
    if (checkbox.checked) {
      console.log(checkbox.checked);
      bodyId.classList.add("bodyId");
      darkmodeTextSombre.innerHTML = `<i class="fas fa-lightbulb sombre"></i>Mode sombre`;
    } else {
      bodyId.classList.remove("bodyId");
      darkmodeTextClaire.innerHTML = `<i class="far fa-lightbulb claire"></i>Mode claire`;
    }
  }
  checkbox.addEventListener("click", darkmode);
})();
