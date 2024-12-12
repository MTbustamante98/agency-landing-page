const btnMenu = document.querySelector("[data-menu]");
const nav = document.querySelector(".header nav");
const eventos = ["click", "touchstart"];

eventos.forEach((evento) => {
  btnMenu.addEventListener(evento, (event) => {
    event.preventDefault();
    nav.classList.toggle("active");
  });
});
