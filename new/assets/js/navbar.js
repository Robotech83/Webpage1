document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".nav-menu");

  // Toggle nav menu
  hamburger?.addEventListener("click", () => {
    navMenu?.classList.toggle("active");
  });

  // Close nav on link click
  document.querySelectorAll(".nav-menu li a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu?.classList.remove("active");
    });
  });
});

// Toggle search box
function toggleSearch(e) {
  e.preventDefault();
  const searchBox = document.getElementById("searchBox");
  if (searchBox) {
    searchBox.style.display = (searchBox.style.display === "block") ? "none" : "block";
  }
}



