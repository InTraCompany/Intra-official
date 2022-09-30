//Ham menu
function hamMenu(menu) {
  var nav = document.getElementById("navigation header");
  nav.classList.toggle("active");
  var active = nav.classList.contains("active");
  menu.setAttribute("aria-expanded", active);
  if (active) {
    menu.setAttribute("aria-label", "Fechar Menu");
  } else {
    menu.setAttribute("aria-label", "Abrir Menu");
  }
}
