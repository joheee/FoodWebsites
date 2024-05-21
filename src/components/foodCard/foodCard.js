class FoodCard {
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
              <div class="card-content-desc">${this.desc}</div>
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

export const Recipes = [
  new FoodCard(
    "waffle.jpg",
    "Sweet Waffle",
    "Delicious golden waffles topped with fresh fruit and syrup."
  ),
  new FoodCard(
    "burger.jpg",
    "Crunchy Burger",
    "A juicy burger with a crispy coating, served with lettuce, tomato, and special sauce."
  ),
  new FoodCard(
    "spagetti.jpg",
    "Aglio Olio Spagetti",
    "Classic Italian spaghetti tossed with garlic, olive oil, and chili flakes."
  ),
  new FoodCard(
    "fish.jpg",
    "Grilled Fish",
    "Perfectly grilled fish fillet seasoned with herbs and lemon."
  ),
  new FoodCard(
    "waffle.jpg",
    "Sweet Waffle",
    "Delicious golden waffles topped with fresh fruit and syrup."
  ),
  new FoodCard(
    "burger.jpg",
    "Crunchy Burger",
    "A juicy burger with a crispy coating, served with lettuce, tomato, and special sauce."
  ),
  new FoodCard(
    "spagetti.jpg",
    "Aglio Olio Spagetti",
    "Classic Italian spaghetti tossed with garlic, olive oil, and chili flakes."
  ),
  new FoodCard(
    "fish.jpg",
    "Grilled Fish",
    "Perfectly grilled fish fillet seasoned with herbs and lemon."
  ),
  new FoodCard(
    "waffle.jpg",
    "Sweet Waffle",
    "Delicious golden waffles topped with fresh fruit and syrup."
  ),
  new FoodCard(
    "burger.jpg",
    "Crunchy Burger",
    "A juicy burger with a crispy coating, served with lettuce, tomato, and special sauce."
  ),
  new FoodCard(
    "waffle.jpg",
    "Sweet Waffle",
    "Delicious golden waffles topped with fresh fruit and syrup."
  ),
  new FoodCard(
    "burger.jpg",
    "Crunchy Burger",
    "A juicy burger with a crispy coating, served with lettuce, tomato, and special sauce."
  ),
  new FoodCard(
    "spagetti.jpg",
    "Aglio Olio Spagetti",
    "Classic Italian spaghetti tossed with garlic, olive oil, and chili flakes."
  ),
  new FoodCard(
    "fish.jpg",
    "Grilled Fish",
    "Perfectly grilled fish fillet seasoned with herbs and lemon."
  ),
  new FoodCard(
    "waffle.jpg",
    "Sweet Waffle",
    "Delicious golden waffles topped with fresh fruit and syrup."
  ),
  new FoodCard(
    "burger.jpg",
    "Crunchy Burger",
    "A juicy burger with a crispy coating, served with lettuce, tomato, and special sauce."
  ),
  new FoodCard(
    "spagetti.jpg",
    "Aglio Olio Spagetti",
    "Classic Italian spaghetti tossed with garlic, olive oil, and chili flakes."
  ),
  new FoodCard(
    "fish.jpg",
    "Grilled Fish",
    "Perfectly grilled fish fillet seasoned with herbs and lemon."
  ),
  new FoodCard(
    "waffle.jpg",
    "Sweet Waffle",
    "Delicious golden waffles topped with fresh fruit and syrup."
  ),
  new FoodCard(
    "burger.jpg",
    "Crunchy Burger",
    "A juicy burger with a crispy coating, served with lettuce, tomato, and special sauce."
  ),
];

export const Foods = [
  new FoodCard(
    "fish.jpg",
    "Grilled Fish",
    "Perfectly grilled fish fillet seasoned with herbs and lemon."
  ),
  new FoodCard(
    "waffle.jpg",
    "Sweet Waffle",
    "Delicious golden waffles topped with fresh fruit and syrup."
  ),
  new FoodCard(
    "shrimp.jpg",
    "Stirfried Shrimp",
    "Succulent shrimp stir-fried with garlic and fresh vegetables."
  ),
  new FoodCard(
    "burger.jpg",
    "Crunchy Burger",
    "A juicy burger with a crispy coating, served with lettuce, tomato, and special sauce."
  ),
  new FoodCard(
    "lamb.jpg",
    "Lamb's Rib",
    "Tender lamb ribs marinated in aromatic spices and grilled to perfection."
  ),
  new FoodCard(
    "spagetti.jpg",
    "Aglio Olio Spagetti",
    "Classic Italian spaghetti tossed with garlic, olive oil, and chili flakes."
  ),
  new FoodCard(
    "salad.jpg",
    "Healthy Salad",
    "A fresh mix of greens, topped with a light vinaigrette and nutritious toppings."
  ),
  new FoodCard(
    "fish.jpg",
    "Grilled Fish",
    "Perfectly grilled fish fillet seasoned with herbs and lemon."
  ),
  new FoodCard(
    "waffle.jpg",
    "Sweet Waffle",
    "Delicious golden waffles topped with fresh fruit and syrup."
  ),
  new FoodCard(
    "shrimp.jpg",
    "Stirfried Shrimp",
    "Succulent shrimp stir-fried with garlic and fresh vegetables."
  ),
  new FoodCard(
    "burger.jpg",
    "Crunchy Burger",
    "A juicy burger with a crispy coating, served with lettuce, tomato, and special sauce."
  ),
  new FoodCard(
    "lamb.jpg",
    "Lamb's Rib",
    "Tender lamb ribs marinated in aromatic spices and grilled to perfection."
  ),
  new FoodCard(
    "spagetti.jpg",
    "Aglio Olio Spagetti",
    "Classic Italian spaghetti tossed with garlic, olive oil, and chili flakes."
  ),
  new FoodCard(
    "salad.jpg",
    "Healthy Salad",
    "A fresh mix of greens, topped with a light vinaigrette and nutritious toppings."
  ),
  new FoodCard(
    "fish.jpg",
    "Grilled Fish",
    "Perfectly grilled fish fillet seasoned with herbs and lemon."
  ),
  new FoodCard(
    "waffle.jpg",
    "Sweet Waffle",
    "Delicious golden waffles topped with fresh fruit and syrup."
  ),
  new FoodCard(
    "shrimp.jpg",
    "Stirfried Shrimp",
    "Succulent shrimp stir-fried with garlic and fresh vegetables."
  ),
  new FoodCard(
    "burger.jpg",
    "Crunchy Burger",
    "A juicy burger with a crispy coating, served with lettuce, tomato, and special sauce."
  ),
  new FoodCard(
    "lamb.jpg",
    "Lamb's Rib",
    "Tender lamb ribs marinated in aromatic spices and grilled to perfection."
  ),
  new FoodCard(
    "spagetti.jpg",
    "Aglio Olio Spagetti",
    "Classic Italian spaghetti tossed with garlic, olive oil, and chili flakes."
  ),
  new FoodCard(
    "salad.jpg",
    "Healthy Salad",
    "A fresh mix of greens, topped with a light vinaigrette and nutritious toppings."
  ),
];