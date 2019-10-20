var link = document.querySelector(".contacts__btn");
var popup = document.querySelector(".write-us");
var closePopup = document.querySelector(".close-modal-cross-btn");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal--show")) {
      evt.preventDefault();
      popup.classList.remove("modal--show");
    }
  }
});