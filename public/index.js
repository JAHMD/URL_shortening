const BASE_URL = "https://api.shrtco.de/v2/shorten?url=";
const menuBtn = document.getElementById("menu-btn");
const navWindow = document.getElementById("nav-window");
const getStartedBtn = document.querySelectorAll(".get-started-btn");
const shortenLinkField = document.getElementById("shorten-link-field");
const shortenBtn = document.getElementById("shorten-link-btn");
const errorMsg = document.getElementById("error-msg");
const GeneratedLinksList = document.getElementById("generated-links");
const clearBtn = document.getElementById("clear-btn");

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

// start shorten
shortenBtn.addEventListener("click", () => {
  const regex = /(https?:\/\/)?(www\.)?\w+\.\w+.?([\w\W]+)?$/gi;
  const userLink = shortenLinkField.value;
  console.log(userLink.match(regex));
  if (regex.test(userLink)) {
    const originalLink = BASE_URL + shortenLinkField.value;
    errorMsg.classList.add("hidden");
    shortenLinkField.classList.remove("active");
    getTheShortenLink(originalLink);
  } else {
    errorMsg.innerText = `Please add a valid link`;
    errorMsg.classList.remove("hidden");
    shortenLinkField.classList.add("active");
  }
});

clearBtn.addEventListener("click", () => {
  GeneratedLinksList.textContent = "";
});

// functions go here -------------------------------------------
// fetching the api
async function fetchData(url) {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  return data;
}

// getting the shorten link
async function getTheShortenLink(url) {
  shortenBtn.value = "Loading...";
  const link = await fetchData(url);
  shortenBtn.value = "Shorten It!";
  if (link.ok) {
    errorMsg.classList.add("hidden");
    shortenLinkField.value = "";
    shortenLinkField.focus();
    createLink(link.result);
    copyLink(link.result);
  } else {
    errorMsg.innerText = `You can't shorten this link.`;
    errorMsg.classList.remove("hidden");
    shortenLinkField.classList.add("active");
  }
}

// create link item
function createLink(link) {
  const linkItem = document.createElement("li");
  linkItem.className = "link-item";
  //original link
  const originalLink = document.createElement("p");
  originalLink.className =
    "pb-2 md:pb-0 border-b-[1px] md:border-b-0 text-neutral-VeryDarkViolet text-ellipsis overflow-hidden";
  originalLink.innerText = link.original_link;
  // shortened link
  const shortenedLink = document.createElement("a");
  shortenedLink.className =
    "generated-link md:ml-auto inline-block text-primary-Cyan text-ellipsis overflow-hidden";
  shortenedLink.innerText = link.short_link;
  shortenedLink.href = `https://${link.short_link}`;
  shortenedLink.target = "_blank";
  // copy button
  const copyBtn = document.createElement("button");
  copyBtn.className = "py-2 px-6 primary rounded-lg";
  copyBtn.innerText = "Copy";
  // append the properties to the list item
  linkItem.append(originalLink, shortenedLink, copyBtn);
  GeneratedLinksList.prepend(linkItem);
}

// copy the generated link
function copyLink(link) {
  const copyBtns = document.querySelectorAll("#generated-links li button");
  copyBtns.forEach((btn) => {
    console.log(copyBtns);
    btn.addEventListener("click", () => {
      btn.classList.add("copied");
      btn.textContent = "Copied!";
      navigator.clipboard.writeText(link.short_link);
    });
  });
}
