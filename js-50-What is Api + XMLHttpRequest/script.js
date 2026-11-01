
const image = document.querySelector("img");
const btn = document.querySelector("button");

// btn.addEventListener("click", ()=>{
// // fetch("https://dog.ceo/api/breeds/image/random")
// //   .then((response) => response.json())
// //   .then((json) => {
// //     image.src = json.message
// //   });

// })



//What is XMLHttpRequest...class...........
btn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();


// console.log(xhr);
  xhr.responseType = 'json'

//   xhr.addEventListener("load", () => {
//     image.src = xhr.response.message
//     // console.log( xhr.response);
//       // console.log(typeof JSON.parse(xhr.response));
//   console.log(xhr);
// });

xhr.onload =()=>{
    image.src = xhr.response.message
  console.log(xhr);
}



  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
});
