const iconBtn = document.querySelector("#iconBtn");
const itemsNavbar = document.querySelector(".items");

// iconBtn.addEventListener(onclick, (event) => {
//   console.log("test");
// });
iconBtn.onclick = () => {
  console.log("test");
  itemsNavbar.classList.toggle("open");
};
