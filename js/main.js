/* JavaScript for hamburgermenu */
function openHamburgerNav() {
  document.getElementById("myhamburgermenu").style.display = "block";
}

function closeHamburgerNav() {
  document.getElementById("myhamburgermenu").style.display = "none";
}

/* JavaScript for cart items */
function openShoppingNav() {
  document.getElementById("myshoppingcart").style.display = "block";
}

function closeShoppingNav() {
  document.getElementById("myshoppingcart").style.display = "none";
}

/* Measurments button */
const measurmentsButton = document.getElementById("information1");
const textElement1 = document.getElementById("measurments");

measurmentsButton.addEventListener("click", function () {
  textElement1.classList.toggle("visible");
});

/* Descrition button */
const descriptionButton = document.getElementById("information2");
const textElement2 = document.getElementById("description");

descriptionButton.addEventListener("click", function () {
  textElement2.classList.toggle("visible");
});

/*Basket*/
