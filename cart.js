let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById("cart-count").textContent = cart.length;
  alert(`${name} added to cart!`);
}

function showCart() {
  const cartView = document.getElementById("cart-view");
  const items = document.getElementById("cart-items");
  items.innerHTML = "";

  if (cart.length === 0) {
    items.innerHTML = "<li>Your cart is empty.</li>";
  } else {
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.price}`;
      items.appendChild(li);
    });
  }

  cartView.style.display = cartView.style.display === "block" ? "none" : "block";
}
