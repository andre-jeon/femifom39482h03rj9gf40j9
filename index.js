const foldericonClosed = document.querySelector("#folderimgClosed");
const foldericonOpen = document.querySelector("#folderimgOpen");
const folderAnchor = document.querySelector(".folderAnchor");

folderAnchor.addEventListener("mouseenter", () => {
  foldericonClosed.classList.toggle("displayOff");
  foldericonOpen.classList.toggle("displayOff");
});

folderAnchor.addEventListener("mouseleave", () => {
  foldericonClosed.classList.toggle("displayOff");
  foldericonOpen.classList.toggle("displayOff");
});