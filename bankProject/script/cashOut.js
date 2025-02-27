document.getElementById("cashOut-btn").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("dd")
  const pin = document.getElementById("cashOut-pin").value;
  const convertPin = parseInt(pin);
  const amount = document.getElementById("cashOut-amount").value;
  const convertAmount = parseFloat(amount);
  const mainBalance = document.getElementById("main-balance").innerText;
  const convertMainBalance = parseFloat(mainBalance);

  const sum = convertMainBalance - convertAmount;
  document.getElementById("main-balance").innerText = sum;
});
