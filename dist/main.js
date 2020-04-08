

let modal = document.querySelector('.login');
let open = document.querySelector('.log');
let close = document.querySelector('.close');
open.onclick = function() {
  modal.style.opacity="1";
}
close.onclick = function() {
   modal.style.opacity="0";
}

let secondMenu = document.querySelector('.second-menu');
let burger = document.querySelector('.burger');
let closeMenu = document.querySelector('.close-menu');

burger.onclick = function() {
  secondMenu.style.display = "block";
  
}
closeMenu.onclick = function() {
  secondMenu.style.display = "none";
}
