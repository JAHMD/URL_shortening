const menuBtn = document.getElementById("menu-btn");
const navSection = document.getElementById("navigators-section");

document.addEventListener("click", (e) => {
  const closest = e.target.closest("#menu-btn");
  if (e.target !== document.getElementById("menu-icon") || closest === null) {
    if (navSection.classList.contains("active"))
      navSection.classList.remove("active");
    return;
  }
  navSection.classList.toggle("active");
});
