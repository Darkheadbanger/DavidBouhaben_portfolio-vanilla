(() => {
  let checkbox = document.getElementById("darkmode");
  let bodyId = document.getElementById("bodyId");

  function darkmode() { 
      // checked == true
    if (checkbox.checked) { 
      console.log(checkbox.checked)
        bodyId.classList.add("bodyId")
    }else{
        bodyId.classList.remove("bodyId")
    }
  }

  checkbox.addEventListener("click", darkmode);
})();
