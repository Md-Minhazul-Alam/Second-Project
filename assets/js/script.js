const menuItems = [
  {
    name: "Americano",
    price: 5.5,
    image: "assets/image/Americano.jpg",
    description: "Double espresso topped with hot water. Served in a cup."
  },
  {
    name: "Caffè Latte",
    price: 6.5,
    image: "assets/image/Latte.jpg",
    description: "Espresso topped with creamy steamed milk."
  },
  {
    name: "Cappuccino",
    price: 6.5,
    image: "assets/image/cappuccino.jpg",
    description: "Double espresso topped with extra creamy steamed milk."
  },
  {
    name: "Iced Caffè Americano",
    price: 6.5,
    image: "assets/image/Iced-americano.jpg",
    description: "Espresso with cold water over ice."
  },
  {
    name: "Iced Latte",
    price: 6.5,
    image: "assets/image/Iced-latte.jpg",
    description: "Espresso with milk and ice."
  },
  {
    name: "Iced Mocha",
    price: 6.5,
    image: "assets/image/Iced-mocha.jpg",
    description: "Espresso, chocolate sauce, milk, and ice."
  },
  {
    name: "Green Smoothie",
    price: 9.5,
    image: "assets/image/Green-smoothie.jpg",
    description: "A quick, creamy, naturally sweet smoothie."
  },
  {
    name: "Raspberry Smoothie",
    price: 9.5,
    image: "assets/image/Raspberry.jpg",
    description: "Sweet, tart, creamy raspberry blend."
  },
  {
    name: "Tropical Smoothie",
    price: 9.5,
    image: "assets/image/Tropical-Smoothie.jpg",
    description: "Tropical fruits with coconut milk or yogurt."
  }
];

const menuGrid = document.getElementById("menuGrid");
const modal = document.getElementById("orderDeliveryModel");
const closeBtn = document.querySelector(".close");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");

// Create a description element inside the modal
let modalDescription = document.createElement("p");
modalDescription.id = "modalDescription";
modalDescription.style.marginTop = "8px";
modalDescription.style.color = "#555";
document.getElementById("modalProduct").appendChild(modalDescription);

// Render menu items (no description here)
menuItems.forEach((item, index) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("special-menu-item");
  menuItem.innerHTML = `
      <img class="cropped-image" src="${item.image}" alt="${item.name}" loading="lazy" />
      <h4>${item.name}</h4>
      <div class="special-menu-item-price">€${item.price.toFixed(2)}</div>
      <button class="order-button" data-index="${index}">Order Now</button>
    `;
  menuGrid.appendChild(menuItem);
});

// Event delegation for order buttons
menuGrid.addEventListener("click", function (e) {
  if (e.target.classList.contains("order-button")) {
    const index = e.target.getAttribute("data-index");
    const product = menuItems[index];

    // Populate modal
    modalImage.src = product.image;
    modalName.textContent = product.name;
    modalPrice.textContent = `€${product.price.toFixed(2)}`;
    modalDescription.textContent = product.description; // Show description in modal

    // Show modal
    modal.style.display = "block";
  }
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicked outside content
window.addEventListener("click", (e) => {
  if (e.target.id === "orderDeliveryModel") {
    modal.style.display = "none";
  }
});

