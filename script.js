let basket = [];

const add = document.querySelector(".add");
const reset = document.querySelector(".reset");
const showItem = document.querySelector(".showItem");
const showOp = document.querySelector(".showOp");
const div = document.querySelector(".message");
const input = document.querySelector("input");

// Adding the preventDefault method so that the button
// doesn't refresh the page. Adding the entered value to the array.
const addOp = (e) => {
  e.preventDefault();
  const valueInput = input.value;
  basket.push(valueInput);
  window.alert("You added to your basket" + " " + valueInput);
  input.value = "";
};
add.addEventListener("click", addOp);

// Reset button clearing the array.
const resetOp = (e) => {
  e.preventDefault();
  basket = [];
  console.log(basket);
  input.value = "";
};
reset.addEventListener("click", resetOp);

// Selecting a random product from the array - basket
// by the index of the array.
const randomAdvice = (e) => {
  e.preventDefault();
  const index = Math.floor(Math.random() * basket.length);
  div.textContent = basket[index];
};
showItem.addEventListener("click", randomAdvice);

// Showing an alert with products in the basket.
const show = (e) => {
  e.preventDefault();
  window.alert(basket);
};
showOp.addEventListener("click", show);
