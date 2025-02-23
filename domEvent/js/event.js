// option 2 js
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3 : get element by id

const btnMakeBlue = document.getElementById("btn-make-blue");
btnMakeBlue.onclick = function btnMakeBlue() {
  document.body.style.backgroundColor = "blue";
};
// option  3 different 

const btnMakePurple = document.getElementById("make-purple")
btnMakePurple.onclick = makePurple
function makePurple(){
   document.body.style.backgroundColor = "purple";
}