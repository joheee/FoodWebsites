import { Foods, Recipes } from "./foodCard.js";

// load css
const url = "../../components/foodCard/foodCard.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = url;
document.head.appendChild(link);

// binding recipes home
let recipesContainer = document.getElementsByClassName(
  "popular-recipes-card-container"
)[0];
Recipes.forEach((r) => {
  recipesContainer.innerHTML += r.getFoodCardElement();
});

// binding food home
let foodContainer = document.getElementsByClassName(
  "delicious-foods-card-container"
)[0];
Foods.forEach((r) => {
  foodContainer.innerHTML += r.getFoodCardElement();
});
