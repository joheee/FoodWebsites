// load css
const url = "../../components/parallax/parallax.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = url;
document.head.appendChild(link);

// logic
const currentPath = window.location.pathname;
const pathSplit = currentPath.split("/");
const parallaxDic = {
  home: {
    image: "../../../assets/home-background.jpg",
    title: "VKellog's",
  },
  food: {
    image: "../../../assets/product-background.jpg",
    title: "Foods",
  },
  recipe: {
    image: "../../../assets/recipe-background.jpg",
    title: "Recipes",
  },
  about: {
    image: "../../../assets/about-background.jpg",
    title: "About Us",
  },
  contact: {
    image: "../../../assets/home-background.jpg",
    title: "Contact Us",
  },
};

// create element
const element = `
<div class="parallax-container">
    <div class="parallax-title">${parallaxDic[pathSplit[3]].title}</div>
    <div class="parallax-image-container">
    <div class="parallax-image-dark-layer"></div>
    <img
        class="parallax-image"
        src="${parallaxDic[pathSplit[3]].image}"
        alt=""
    />
    </div>
</div>
`;

let footer = document.getElementById("parallax-component-container");
footer.innerHTML = element;
