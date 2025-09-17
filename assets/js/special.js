const specialMenuItems = [
  {
    name: "Iced Caramel Latte",
    price: 5.5,
    image: "assets/image/ICED_LATTE_CARAMEL.png",
    description:
      "Espresso, rippled caramel sauce, salted caramel syrup, cold milk and ice."
  },
  {
    name: "Iced Mango Mojito",
    price: 7.5,
    image: "assets/image/ICED_TEA_MANGO_MOJITO.png",
    description:
      "A refreshing iced tea with mango and lemon, flavored with mojito syrup. Topped with fresh mint and dried lime."
  },
  {
    name: "Iced Tea Strawberry Lemon",
    price: 9.5,
    image: "assets/image/ICED_TEA_STRAWBERRY_LEMON_MINT.png",
    description:
      "A refreshing iced tea with lemon, flavored with strawberry syrup. Topped with fresh lemon and mint."
  }
];

const specialMenuGrid = document.getElementById("specialMenuGrid");
const modal = document.getElementById("orderDeliveryModel");
const closeBtn = modal.querySelector(".close");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");

// Show Menu items
specialMenuItems.forEach((item, index) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("special-menu-item");
  menuItem.innerHTML = `
    <img src="${item.image}" alt="${item.name}" loading="lazy">
    <h4>${item.name}</h4>
    <p>${item.description}</p>
    <div class="special-menu-item-price">€${item.price.toFixed(2)}</div>
    <button class="order-button" data-index="${index}">Order Now</button>
  `;
  specialMenuGrid.appendChild(menuItem);
});

// Opening modal
specialMenuGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("order-button")) {
    const index = e.target.getAttribute("data-index");
    const product = specialMenuItems[index];

    modalImage.src = product.image;
    modalName.textContent = product.name;
    modalPrice.textContent = `€${product.price.toFixed(2)}`;
    modalDescription.textContent = product.description;

    modal.style.display = "block";
  }
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
