document
.getElementById("btn-update-title")
.addEventListener("click", function () {
  const pageTitleElement = document.getElementById("page-title");
 console.log(pageTitleElement)
 pageTitleElement.innerText = "Update page text"
});

document
.getElementById("btn-login")
.addEventListener("click", function () {
   const userInfo = document.getElementById("user-info")
   userInfo.innerText = "user login successful"
});