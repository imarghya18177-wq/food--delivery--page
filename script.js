
const cartButtons = document.querySelectorAll(".card button");


cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    
    
    const foodName =
      button.parentElement.querySelector("h2").innerText;

    
    alert(foodName + " added to cart!");
  });
});


const orderBtn = document.querySelector(".hero button");

orderBtn.addEventListener("click", () => {
  alert("Welcome to FoodExpress! Start ordering your favorite food.");
});