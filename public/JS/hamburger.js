(() => {
  let hamburgerToggle = document.querySelector(".hamburger-toggle");

  //   Creation de addeventlistener en cas de clique
  hamburgerToggle.addEventListener("click", function (event) {
    let open = this.classList.toggle("openned");
    console.log(open);
  });
})();
