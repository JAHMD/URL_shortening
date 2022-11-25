const menuBtn = document.getElementById("menu-btn");
const navWindow = document.getElementById("nav-window");

// toggling the nav window
menuBtn.addEventListener("click", (e) => {
  navWindow.classList.toggle("active");
});
