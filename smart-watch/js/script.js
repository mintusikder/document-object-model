const ringBtn = document.querySelectorAll(".ring-button");
let productImageBase = "./images/";
for (const ringButton of ringBtn) {
  ringButton.addEventListener("click", function (event) {
    const color = event.target.id.replace("-color", "");
    for (const ringColor of ringBtn) {
      ringColor.classList.remove("border-purple-600");
      ringColor.classList.add("border-gray-300");
    }
    event.target.classList.add("border-purple-600");
    event.target.classList.remove("border-gray-300");

    const productImage = document.getElementById("product-image");
    productImage.src = productImageBase + color + ".png";
  });
}

//function
function selectWristSize(size) {
  const sizes = ["S", "M", "L", "XL"];
  for (const element of sizes) {
    const button = document.getElementById("size-" + element);
    if (size === element) {
      button.classList.add("border-purple-600");
    } else {
      button.classList.remove("border-purple-600");
    }
  }
}

//quantity element -------------

const quantityElement = document.querySelectorAll(".quantity-button");

for (const btn of quantityElement) {
  btn.addEventListener("click", function (event) {
    const amount = event.target.innerText === "+" ? 1 : -1;
    const quantityElement = document.getElementById("quantity");
    const currentQuantity = parseInt(quantityElement.innerText);
    // const currentQuantity =
    const newQuantity = Math.max(0, currentQuantity + amount);
    quantityElement.innerText = newQuantity;
  });
}

//add to cart
let cartCount = 0;
let cartItem = [];
document.getElementById("add-to-cart").addEventListener("click", function () {
  const quantity = parseInt(document.getElementById("quantity").innerText);

  if (quantity > 0) {
    document.getElementById("checkout-container").classList.remove("hidden");
    cartCount = cartCount + quantity;
    document.getElementById("cart-count").innerText = cartCount;

    const selectedColorBtn = document.querySelector(
      "button.border-purple-600.w-6"
    );
    const selectedColor = selectedColorBtn.id.split("-")[0];

    const selectedSizeBtn = document.querySelector(
      "button.border-purple-600:not(.w-6)"
    );
    const selectedSize = selectedSizeBtn.innerText.split(" ")[0];
    const selectedPrice = selectedSizeBtn.innerText.split(" ")[1].split("$")[1];

    cartItem.push({
      image: selectedColor + ".png",
      title: "Smart Watch",
      color: selectedColor,
      size: selectedSize,
      price: selectedPrice,
      quantity: quantity,
    });
  } else {
    alert("Please Select a quantity");
  }
});

document.getElementById("checkout-btn").addEventListener("click", function () {
  const cartModal = document.getElementById("cart-modal");
  cartModal.classList.remove("hidden");
  const cartContainer = document.getElementById("cart-items");

  for (let i = 0; i < cartItem.length; i++) {
    const item = cartItem[i];
    const row = document.createElement("tr");
    row.classList.add("border-b");
    row.innerHTML = `
    <td  class="py-2 px-4">
  <div class="flex items-center space-x-2">
    <img class="h-12 w-12 object-cover rounded" src="${productImageBase}${item.image}" alt="">
<span class="font-semibold">${item.title}</span>
  </div>
</td>
<td  class="py-2 px-4">${item.color}</td>
<td  class="py-2 px-4">${item.size}</td>
<td  class="py-2 px-4">${item.quantity}</td>
<td  class="py-2 px-4">${item.price}</td>
    `;
    cartContainer.appendChild(row);
  }
});

document
  .getElementById("continue-shopping")
  .addEventListener("click", function () {
    const cartModal = document.getElementById("cart-modal");
    cartModal.classList.add("hidden");
  });
