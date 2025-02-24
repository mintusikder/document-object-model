document.getElementById("product-btn").addEventListener("click", function () {
  const productName = document.getElementById("product-name").value;
  const productImage = document.getElementById("product-img").value;
  const productPrice = document.getElementById("product-price").value;
  console.log(productName, productImage, productPrice);

  const mainContainer = document.getElementById("product-list");

  const createDiv = document.createElement("div");
  createDiv.innerHTML = `
               <h3>${productName}</h3>
                <p>${productImage}</p>
                <p>${productPrice}</p>
    
    `;
    mainContainer.appendChild(createDiv)
});
