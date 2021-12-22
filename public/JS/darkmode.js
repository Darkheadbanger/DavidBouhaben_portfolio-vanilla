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
      darkmodeTextSombre.innerHTML = `<i class="fa-solid fa-circle-half-stroke"></i>Mode sombre`;
    } else {
      bodyId.classList.remove("bodyId");
      darkmodeTextClaire.innerHTML = `<i class="fa-solid fa-circle-half-stroke"></i>Mode claire`;
    }
  }
  checkbox.addEventListener("click", darkmode);
})();
