const iconMenu = document.querySelector("#iconMenu");
const navItems = document.querySelector(".navItems");

iconMenu.onclick = () => {
  console.log("test icon");
  navItems.classList.toggle("open");
};
