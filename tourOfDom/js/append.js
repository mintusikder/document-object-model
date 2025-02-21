const placesList = document.getElementById("places-list");
const li = document.createElement("li");
li.innerText = "pahar toli";
placesList.appendChild(li);


const mainContainer = document.getElementById("main-container")

const section = document.createElement("section")
const h1 = document.createElement("h1")
h1.innerText = 'added new section'
section.appendChild(h1)

const ul = document.createElement("ul")
const li1 = document.createElement("li")
li1.innerText = "welcome"
ul.appendChild(li1)

section.appendChild(ul)

mainContainer.appendChild(section)

//set innerHtml 

const sectionDress = document.createElement("section")
sectionDress.innerHTML = `
<h1>My Dreass</h1>
<ul>
          <li>Mintu</li>
          <li>Sajib</li>
          <li>Rakib</li>
        </ul>
`
mainContainer.appendChild(sectionDress)