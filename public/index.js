const menuBtn = document.getElementById("menu-btn");
const navSection = document.getElementById("navigators-section");
const navWindow = document.getElementById("nav-window");
document.addEventListener("click", (e) => {
  const closest = e.target.closest("#menu-btn");
  if (e.target !== document.getElementById("menu-icon") || closest === null) {
    if (navWindow.classList.contains("active"))
      navWindow.classList.remove("active");
    return;
  }
  navWindow.classList.toggle("active");
});
