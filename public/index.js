const menuBtn = document.getElementById("menu-btn");
const navWindow = document.getElementById("nav-window");
const shortenLinkField = document.getElementById("shorten-link-field");
const getStartedBtn = document.querySelectorAll(".get-started-btn");

// toggling the nav window
menuBtn.addEventListener("click", (e) => {
  const menuIcon = menuBtn.querySelector("i");
  menuIcon.className = menuIcon.classList.contains("fa-bars")
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
  navWindow.classList.toggle("active");
});

// go the shorten field
getStartedBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    shortenLinkField.focus();
  });
});
