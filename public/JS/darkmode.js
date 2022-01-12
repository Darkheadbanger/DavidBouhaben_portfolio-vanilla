(() => {
  let checkbox = document.getElementById("darkmode", "darkmode-desktop");
  let bodyId = document.getElementById("bodyId");
  let darkmodeTextSombre = document.getElementById("darkmode-Text");
  let darkmodeTextClaire = document.getElementById("darkmode-Text");
 
  function darkmode() {
    console.log("darkmode entrée");
    // checked == true
    if (checkbox.checked) {
      console.log("checkedbox", checkbox.checked);
      console.log(checkbox.checked);
      let addBody = bodyId.classList.add("bodyId");
      console.log("addBody", addBody);
      let iChange =
        (darkmodeTextSombre.innerHTML = `<i class="fas fa-lightbulb sombre"></i>Mode sombre`);
      console.log("iChangeSombre", iChange);
    } else {
      let removeBody = bodyId.classList.remove("bodyId");
      console.log("iChangeClaire", removeBody);
      let iChange =
        (darkmodeTextClaire.innerHTML = `<i class="far fa-lightbulb claire"></i>Mode claire`);
      console.log("iChangeClaire", iChange);
    }
  }
  let clickedDarkmode = checkbox.addEventListener("click", darkmode);
  console.log("clickedDarkmode", clickedDarkmode);
})();
