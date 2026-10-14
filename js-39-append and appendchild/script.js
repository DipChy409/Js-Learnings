const h1= document.querySelector("h1")

const container = document.querySelector(".container")
const card = document.querySelector(".card")


// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))


// for(let i=2; i<=100; i++){
//     let newCard=card.cloneNode(true)
//     newCard.textContent =i
//     container.appendChild(newCard)
// }

// container.appendChild(h1.cloneNode(true))

// container.append()    //Return value undefined | we can add string and append will firstly make the string node than add it inside container
//container.appendChild(h1)  //Retrun value is h1 means whatever passed inside appendChild become the return value of it | we cannot add string cause its not a node

//It you want to add a string than firstly you have to convert it in TextNode
// let x = document.createTextNode('Hello')
// container.appendChild(x)
