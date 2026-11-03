// function makeHttpRequest(method, url,callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = "json";

//   xhr.addEventListener("load", () => {
//     callback(xhr.response)
//   });

//   xhr.open(method, url);
//   xhr.send();
// }

// makeHttpRequest("GET","https://dummyjson.com/users", (userData)=>{
//     makeHttpRequest("Get", `https://dummyjson.com/posts/user/${userData.users[0].id}`, (postsData)=>{
//        makeHttpRequest("GET", `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentData)=>{
//       console.log(commentData.comments[0].user.id);
//             makeHttpRequest('GET', `https://dummyjson.com/users/${commentData.comments[0].user.id}`, (userData)=>{
//               console.log(userData);
//         document.write(userData.firstName)
//       })
//     })
//   })
// })



// // makeHttpRequest()


function cc(){
let xhr =  new XMLHttpRequest()

xhr.responseType = "json"
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1")
xhr.send();

xhr.addEventListener("load", ()=>{
  console.log(xhr);
})
}

cc()