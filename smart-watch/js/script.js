const ringBtn = document.querySelectorAll(".ring-button");

for (const ringButton of ringBtn) {
  ringButton.addEventListener("click", function (event) {
    const color = event.target.id.replace("-color", "");
    console.log(color);
    for (const ringColor of ringBtn) {
      ringColor.classList.remove("border-purple-600");
      ringColor.classList.add("border-gray-300");
    }
    event.target.classList.add("border-purple-600");
    event.target.classList.remove("border-gray-300");

    const productImage = document.getElementById("product-image");
    productImage.src = "./images/" + color + ".png";
  });
}

//function
function selectWristSize(size) {
  const sizes = ["S", "M", "L", "XL"];
  for (const element of sizes) {
    const button = document.getElementById("size-" + element);
    console.log(button);
    console.log(element);
    if (size === element) {
      button.classList.add("border-purple-600");
    } else {
      button.classList.remove("border-purple-600");
    }
  }
}

//quantity element -------------

const quantityElement = document.querySelectorAll(".quantity-button");
console.log(quantityElement);

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
