"use strict";

var elButton = document.querySelector(".site-header__button");
var elContent = document.querySelector(".menu");
elButton.addEventListener("click", function () {
  elContent.classList.toggle("menu--open");
});