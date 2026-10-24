const h1 = document.querySelector('h1')
const addCardButton = document.querySelector('.add-card')
const container = document.querySelector('.container')
const input = document.querySelector("input")
const form = document.querySelector("form")

let count = 1

addCardButton.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

const cardList= document.querySelectorAll(".card")


// addCardButton.click()
// input.focus()

// setTimeout(()=>{
//     input.focus();
//     console.log("input focused");
// },1000)
// setTimeout(()=>{
//     input.blur()
//     console.log("input Blurred");
// },3000)
// setTimeout(()=>{
//     form.submit()
//     console.log("input submit");
// },5000)
// setTimeout(()=>{
//     form.reset()
//     console.log("input submit");
// },2000)
// for(let x = 0;x<=1000;x++){
//     addCardButton.click()

// }

// const uniqueId= setInterval(()=>{
//     if(count > 999){
//         clearInterval(uniqueId)
//     }
//     addCardButton.click()
// },10)


