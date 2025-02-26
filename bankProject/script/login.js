// step 1: Get element by id
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accNumber = document.getElementById("acc-number").value;
    const accPin = document.getElementById("acc-pin").value;
    if (accNumber.length === 11) {
      if (parseInt(accPin) === 1234) {
        alert("ok thik ache");
        window.location.href = "../main.html";
      } else {
        alert("pin thik nei");
      }
    } else {
      alert("need validate account number");
    }
  });
