export class FoodCard {
  constructor(image, title, desc) {
    this.image = image;
    this.title = title;
    this.desc = desc;
  }

  getFoodCardElement() {
    return `
        <div class="card-food-container">
            <div class="card-food-image-container">
            <img
                class="card-food-image-item"
                src="../../../assets/${this.image}"
                alt="${this.desc}"
                srcset=""
            />
            </div>
            <div class="card-content-container">
            <div class="card-content-title">${this.title}</div>
            <div class="">${this.desc}</div>
            <div class="card-content-rating-container">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            </div>
        </div>
    `;
  }
}
