document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // amount
    const amount = document.getElementById("amount").value;
    const convertAmount = parseFloat(amount);
    //pin
    const pin = document.getElementById("acc-pin").value;
    const convertPin = parseInt(pin);
    //main balance
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertMainBalance = parseFloat(mainBalance);

    //pin validation
    if (amount) {
      if (convertPin === 1234) {
        //sum
        const sum = convertMainBalance + convertAmount;
        document.getElementById("main-balance").innerText = sum;
      } else {
        alert("enter your write pin");
      }
    } else {
      console.log("not ok");
    }
  });
