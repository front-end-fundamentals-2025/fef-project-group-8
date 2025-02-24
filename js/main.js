/* JavaScript for hamburgermenu */
function openHamburgerNav() {
  document.getElementById("myhamburgermenu").style.display = "block";
  console.log("hej");
}

function closeHamburgerNav() {
  document.getElementById("myhamburgermenu").style.display = "none";
  console.log("hej");
}

/* JavaScript for cart items */
function openShoppingNav() {
  document.getElementById("myshoppingcart").style.display = "block";
  console.log("hej");
}

function closeShoppingNav() {
  document.getElementById("myshoppingcart").style.display = "none";
  console.log("hej");
}

const descriptionButton = document.getElementById("information");
const textElement = document.getElementById("description");

descriptionButton.addEventListener("click", function () {
  textElement.classList.toggle("visible");
});
