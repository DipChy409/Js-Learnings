const h1 = document.querySelector("h1")
// const input = document.querySelector("input")

// h1.addEventListener("keypress", (e)=>{
//     console.log("Code:",e.code);
//     console.log("Value:",e.key);
// })

// h1.addEventListener("keyup", (e)=>{
//     console.log("Code:",e.code);
//     console.log("Value:",e.key);
// })

h1.addEventListener("keydown", (e)=>{
    console.log("Code:",e.code);
    console.log("Value:",e.key);
})


// input.addEventListener("keypress", (e)=>{
//     console.log(e);
//     console.log(e.key);
// })

//difference between keypress and keydown is that keypress is only for printable characters and
//  keydown is for all keys including control keys like shift, ctrl, alt, etc and
//  keyup is fired when the key is released. Keydown is fired when the key is pressed down. {Keypress is deprecated and should not be used in modern web development.}