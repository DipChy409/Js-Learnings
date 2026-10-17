const h1 = document.querySelector("h1")

function sayHi(){
    console.log("Hello World");
}

function io(){
    console.log("Hello World");
}

// console.dir(h1.onclick);
// h1.onclick = sayHi
// h1.onclick = io

// h1.addEventListener("click", sayHi)
// h1.addEventListener("click", function(){
//     console.log("second Hello world");
// })


//Practise Exercise.............

let bakSha = document.querySelector(".add")
let container = document.querySelector(".container")


// bakSha.addEventListener("click", ()=>{
//     console.log("hi");
// })

let anotherCard=document.createElement("div")
anotherCard.classList.add("card","add-cards")


let i =0


bakSha.addEventListener("click", ()=>{
anotherCard.innerText = ++i
let x= anotherCard.cloneNode(true)
    container.append(x)
})

