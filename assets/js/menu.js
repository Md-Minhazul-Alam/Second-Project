document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileSidebar = document.querySelector(".mobile-sidebar");
  const overlay = document.querySelector(".overlay");
  const closeButton = document.querySelectorAll(
    ".close-button, .overlay"
  );

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      mobileSidebar.classList.add("active");
      overlay.classList.add("active");
    });
  }

  closeButton.forEach(function (el) {
    el.addEventListener("click", function () {
      mobileSidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
});
