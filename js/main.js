/* JAVASCRIPT FOR HAMBURGERMENU*/
// Help through W3 schools - Accessed: 18-02-25 https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
function openHamburgerNav() {
  document.getElementById("myhamburgermenu").style.display = "block";
}

function closeHamburgerNav() {
  document.getElementById("myhamburgermenu").style.display = "none";
}
// Help from w3 schools ended

/* JAVASCRIPT FOR CART ITEMS */
function openShoppingNav() {
  document.getElementById("myshoppingcart").style.display = "block";
}

function closeShoppingNav() {
  document.getElementById("myshoppingcart").style.display = "none";
}

/* JAVASCRIPT FOR BUTTONS ON THE CHAIR PAGE */
/* Measurements button*/
const measurmentsButton = document.getElementById("information1");
const textElement1 = document.getElementById("measurments");

measurmentsButton?.addEventListener("click", function () {
  textElement1.classList.toggle("visible");
});

/* Descrition button */
const descriptionButton = document.getElementById("information2");
const textElement2 = document.getElementById("description");

descriptionButton?.addEventListener("click", function () {
  textElement2.classList.toggle("visible");
});

/* BASKET */
const purchaseButton = document.getElementById("purchase-button");
const orderProducts = document.getElementById("order-products");
const trashcanButton = document.getElementById("trashcan");

purchaseButton?.addEventListener("click", function () {
  orderProducts.style.display = "block";
  // 2024-03-10 Start help from second year NMD student, Erik sandqvist
  localStorage.setItem("product", "true");
  // End help from second year NMD student, Erik sandqvist
});

trashcanButton?.addEventListener("click", function () {
  orderProducts.style.display = "none";
  localStorage.setItem("product", "false");
});

// 2024-03-10, Start help from ChatGPT, link: https://chatgpt.com/share/67cf5c15-5358-8007-aff5-362d088bca4b

const productInCart = localStorage.getItem("product");

if (productInCart === "true") {
  orderProducts.style.display = "block"; // Show cart
} else {
  orderProducts.style.display = "none"; // Hide cart
}
// End help, ChatGPT

const paymentButton = document.getElementById("payment");

paymentButton?.addEventListener("click", function () {
  orderProducts.style.display = "block";
  localStorage.clear(); // this clears the entire localStorage
});
