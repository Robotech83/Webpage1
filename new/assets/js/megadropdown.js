document.addEventListener("DOMContentLoaded", () => {
  const megaTrigger = document.querySelector(".mega-dropdown > a");
  const megaMenu = document.querySelector(".mega-dropdown .mega-menu");

  if (megaTrigger && megaMenu) {
    megaTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      megaMenu.classList.toggle("show-mega"); // You’ll control this class in CSS
    });
  }
});
