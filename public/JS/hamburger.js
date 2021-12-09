// C'st une fonctione qui appelle lui même, function ecursive
(() => {
  // Je dois pointer vers la classe hamburger
  let hamburgerBtn = document.querySelector(".hamburger-toggle");

  // Je dois créer un evenement cloique qui va communiuqer avec la classe hamburger toggle pour ensuite lui dire d'exectuer le css pour qu'il deviens X
  hamburgerBtn.addEventListener("click", function () {
    let open = this.classList.toggle("opened");
    console.dir(open);
  });
})();
