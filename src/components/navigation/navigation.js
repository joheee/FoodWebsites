// load css
const url = "../../components/navigation/navigation.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = url;
document.head.appendChild(link);

// create element
const element = `
<div class="navigation-container">
  <a class="logo" href="../home/home.html">VKellog's</a>
  <div class="navigation-item-container">
    <a href="../food/food.html">Foods</a>
    <a href="../recipe/recipe.html">Recipes</a>
    <a href="../about/about.html">About Us</a>
    <a href="../contact/contact.html">Contact Us</a>
  </div>
  <div class="navigation-mobile-button">
    <div class="fa-solid fa-bars"></div>
    <div class="navigation-mobile-item-container">
      <a href="../food/food.html">Foods</a>
      <a href="../recipe/recipe.html">Recipes</a>
      <a href="../about/about.html">About Us</a>
      <a href="../contact/contact.html">Contact Us</a>
    </div>
  </div>
</div>
`;
let nav = document.getElementsByTagName("nav")[0];
nav.innerHTML = element;

// logic element
const bars = document.getElementsByClassName("fa-bars")[0];
const menu = document.getElementsByClassName(
  "navigation-mobile-item-container"
)[0].style;

bars.addEventListener("click", () => {
  if (menu.display != "none") {
    menu.display = "none";
  } else if (menu.display == "none") {
    menu.display = "grid";
  }
});
