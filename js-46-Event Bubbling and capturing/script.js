const green = document.querySelector(".green")
const blue = document.querySelector(".blue")
const pink = document.querySelector(".pink")



//Event Bubbling
//First Method....
// window.addEventListener("click", ()=>{
//     console.log("6.window event listener");
// },true)
// document.addEventListener("click", ()=>{
//     console.log("5.Document event listener");
// },true)

// document.body.addEventListener("click", ()=>{
//     console.log("4.body event listener");
// },true)

// green.addEventListener("click", (e)=>{
//     // e.stopPropagation()
//     console.log("3.Green event listener");
// },true)
// pink.addEventListener("click", ()=>{
//     console.log("2.pink event listener");
// },true)
// blue.addEventListener("click", (e)=>{
//     // e.stopPropagation()
//     console.log("1.blue event listener");
// },true) 

//true as a third argument represent reverse bubbling
//false argument or without false(default beheviour)means bubbling 



//second method.....
window.addEventListener("click", ()=>{
    console.log("6.window event listener");
},{capture: true})
document.addEventListener("click", ()=>{
    console.log("5.Document event listener");
},{capture: true})

document.body.addEventListener("click", ()=>{
    console.log("4.body event listener");
},{capture: true})

green.addEventListener("click", (e)=>{
    // e.stopPropagation()
    console.log("3.Green event listener");
},{capture: true})
pink.addEventListener("click", ()=>{
    console.log("2.pink event listener");
},{capture: true})
blue.addEventListener("click", (e)=>{
    console.log("1.blue event listener")
},{capture: true}) 


// blue.addEventListener("click", (e)=>{
//     console.log("1.blue event listener")
// },{once: true}) 