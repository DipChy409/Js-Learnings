function makeHttpRequest(method, url ) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  const promise = new Promise((resolve,reject) => {
    xhr.addEventListener("load", () => {
        resolve(xhr.response)
    });
    xhr.addEventListener("error", () => {
        console.log("hi");
        reject("Request failed ")
        // re(xhr.response)
    });
  });

  xhr.open(method, url);
  xhr.send();

  return promise
}
//using callback Hell
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

//using Promises
makeHttpRequest("GET", "https://dummyjson.com/users")
.then((userData)=>{
     return makeHttpRequest("Get", `https://dummyjson.com/posts/user/${userData.users[0].id}`)
})

.then(postsData => makeHttpRequest("GET", `https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
.then((commentData) =>makeHttpRequest('GET', `https://dummyjson.com/users/${commentData.comments[0].user.id}`))
.then((userData)=>console.log(userData))
.catch((error)=> console.log(error))
