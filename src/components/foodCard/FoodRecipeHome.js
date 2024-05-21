import { FoodCard } from "./foodCard.js";

// load css
const url = "../../components/foodCard/foodCard.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = url;
document.head.appendChild(link);

// logic for binding to home
const recipesHome = [
  new FoodCard("waffle.jpg", "Sweet Waffle", ""),
  new FoodCard("burger.jpg", "Cruncy Burger", ""),
  new FoodCard("spagetti.jpg", "Aglio Olio Spagetti", ""),
];
let recipesContainer = document.getElementsByClassName(
  "popular-recipes-card-container"
)[0];
recipesHome.forEach((r) => {
  recipesContainer.innerHTML += r.getFoodCardElement();
});
