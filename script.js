const button = document.querySelector(".button");
const menu = document.querySelector(".menu-block");
const btn = document.querySelector("button");
let line = document.querySelector(".line");

button.addEventListener("click", function () {
  menu.classList.toggle("active");
  this.classList.toggle("push");
});
