// action on nav on the small screen
let toggleMenu = document.querySelector("#sec-1 ul.toggle-menu");
let mainNav = document.querySelector("#sec-1 ul.toggle-menu+div");
let counter = 0;
toggleMenu.addEventListener("click", () => {
  if (counter % 2 == 0) mainNav.className = "toggle-menu-display";
  else mainNav.className = "toggle-menu-hidden";
  counter++;
});
