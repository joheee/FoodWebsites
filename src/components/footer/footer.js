// load css
const url = "../../components/footer/footer.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = url;
document.head.appendChild(link);

// create element
const element = `
<div class="footer-container">
    <div class="footer-first-item-container">
        <div class="logo">VKellog's</div>
        <div class="">
        On the other hand, we denounce with righteous indignation and
        dislike men who are so beguiled and demoralized by the charms of
        pleasure of the moment
        </div>
    </div>
    <div class="footer-second-item-container">
        <div class="footer-second-item-title">Details</div>
        <a href="../about/about.html" class="">About Us</a>
        <a href="../contact/contact.html" class="">Contact Us</a>
    </div>
</div>
`;

let footer = document.getElementsByTagName("footer")[0];
footer.innerHTML = element;