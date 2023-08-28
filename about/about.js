document.addEventListener("DOMContentLoaded", function () {
  const barIcons = document.querySelector(".bar-icons");
  const closeIcon = document.querySelector(".close-icon");
  const navbarList = document.querySelector(".navbar-nav");

  barIcons.addEventListener("click", function (event) {
    event.preventDefault();
    navbarList.classList.toggle("show");
    closeIcon.classList.toggle("show");
  });

  closeIcon.addEventListener("click", function (event) {
    event.preventDefault();
    navbarList.classList.remove("show");
    closeIcon.classList.remove("show");
  });
  window.addEventListener("scroll", function () {
    const parallaxSections = document.querySelectorAll(".parallax-section");
    parallaxSections.forEach((section) => {
      const speed = parseFloat(section.getAttribute("data-speed"));
      const yOffset = window.scrollY * speed;
      section.style.backgroundPositionY = `calc(50% + ${yOffset}px)`;
    });
  });
});
