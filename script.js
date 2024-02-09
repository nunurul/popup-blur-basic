let container = document.querySelector(".container");

document.querySelector("#open-popup").addEventListener("click", function () {
  container.classList.add("active-popup");
});

document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    container.classList.remove("active-popup");
  });

document.querySelector("#halo-popup").addEventListener("click", function () {
  container.classList.add("halo-popup");
});

document
  .querySelector(".popup-2 .close-btn")
  .addEventListener("click", function () {
    container.classList.remove("halo-popup");
  });
