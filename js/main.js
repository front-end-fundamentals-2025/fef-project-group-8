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

measurmentsButton?.addEventListener("click", function () {
  textElement1.classList.toggle("visible");
});

/* Descrition button */
const descriptionButton = document.getElementById("information2");
const textElement2 = document.getElementById("description");

descriptionButton?.addEventListener("click", function () {
  textElement2.classList.toggle("visible");
});

/*Basket*/
function toggleCart() {
  document.getElementById("myshoppingcart").classList.toggle("cart-visable");
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item) {
  let inCart = cart.find((cartItem) => item.name === cartItem.name);
  if (inCart) {
    inCart.amount += 1;
  } else {
    item.amount = 1;
    cart.push(item);
  }
  drawCart();
  saveCart();
}

// function addToCart(item) {
//   let inCart = cart.find((cartItem) => item.name === cartItem.name);

//   if (inCart) {
//     inCart.amount += 1;
//   } else {
//     item.amount = 1;
//     cart.push(item);
//   }

//   saveCart();
//   drawCart();
// }

// function drawCart() {
//   let html = document.getElementById("order-products");

//   html.innerHTML = "";

//   cart.forEach((item) => {
//     html.innerHTML +=
//       "<p>" +
//       item.name +
//       " " +
//       item.price +
//       "sek, " +
//       item.amount +
//       "</p>" +
//       <img src='"" + item.pictureImg + "'></img>;
//   });
// }

function drawCart() {
  let html = document.getElementById("order-products");
  html.innerHTML = ""; // Clear previous items

  cart.forEach((item) => {
    html.innerHTML += `
      <div class="cart-item">
        <img src="${item.pictureImg}" alt="${item.name}" width="100">
        <p>${item.name} ${item.price} sek, ${item.amount}</p> 
          <img src="img/trashcan.png" alt="remove" >
      </div>
    `;
  });
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

drawCart();
