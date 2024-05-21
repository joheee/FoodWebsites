// load css
const url = "../../components/parallax/parallax.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = url;
document.head.appendChild(link);

// create element
const element = `
<div class="parallax-container">
    <div class="parallax-title">VKellog's</div>
    <div class="parallax-image-container">
    <div class="parallax-image-dark-layer"></div>
    <img
        class="parallax-image"
        src="../../../assets/home-background.jpg"
        alt=""
    />
    </div>
</div>
`;

let footer = document.getElementById("parallax-component-container");
footer.innerHTML = element;
