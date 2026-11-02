const image = document.querySelector("img");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  // fetch("https://dog.ceo/api/breeds/image/random")
  //   .then((response) => response.json())
  //   .then((json) => {
  //     image.src = json.message
  //   });
});

// What is XMLHttpRequest...class...........
//AJAX............

btn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  // xhr.responseType = "json";
 console.log(xhr.response);
 
  xhr.onload = () => {
    image.src = JSON.parse(xhr.response).message;
    console.log(xhr.response);
  };
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random",false);
  xhr.send();
 
});

///Sync vs Async Code.........

// // setInterval(()=>console.log("HI"),3000)
// alert("HELlo")

console.log("hi");

const blockedBtn = document.querySelector(".blocked");




blockedBtn.addEventListener("click", () => {
  const startTime = Date.now(); //11
  let currentTime = startTime; //11
  // debugger
  while (startTime + 4000 > currentTime) {
    currentTime = Date.now();
  }
});
