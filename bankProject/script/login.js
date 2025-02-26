// step 1: Get element by id
document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault()
    const accNumber = document.getElementById("acc-number").value 
    const accPin = document.getElementById("acc-pin").value 
    if(accNumber.length === 11){
        if(parseInt(accPin) === 1111){
            console.log("ok thik ache")
        }else{
            console.log("pin thik nei")
        }
    }else{
        console.log("need validate account number")
    }
});
