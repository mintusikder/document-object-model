document
.getElementById("btn-update-title")
.addEventListener("click", function () {
  const pageTitleElement = document.getElementById("page-title");
 console.log(pageTitleElement)
 pageTitleElement.innerText = "Update page text"
});