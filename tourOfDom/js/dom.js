// console.log("hello form js")
// console.log(document.body)

const sections = document.querySelectorAll("section");
// console.log(sections);

for (const section of sections) {
  section.style.border = "2px solid red";
  section.style.marginBottom = " 5px";
  section.style.borderRadius = "5px";
  section.style.padding = "10px";
}

// const placeContainer = document.getElementById("place-container")
// placeContainer.style.backgroundColor = "yellow"

const placeContainer = document.getElementById("place-container")
placeContainer.classList.add("yellow-bg")

