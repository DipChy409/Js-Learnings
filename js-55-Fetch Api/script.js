//Sending GET request.....
// fetch("https://dummyjson.com/products").then((response)=>{
//   return  response.json()
// }).then((data)=>console.log(data))

//sending Post request.....
// fetch("https://dummyjson.com/products/add", {
//   method: "POST",
//   headers: {"Content-Type": "application/json"},
//   body: JSON.stringify({
//     title: "BMW Pencil",
//     category: "stationary",
//     /* other product data */
//   }),
// })
//   .then((res) => res.json())
//   .then(console.log)
//   .catch((err)=>{
//     console.log(err);
//   })
//Content-Type: application/json: "Hey server, the data I am sending you right now is JSON.
// "Accept: application/json: "Hey server, please make sure the data you send back to me is JSON."





//sending request (Practice)
async function cc(url) {
  // let xhr = new XMLHttpRequest();
  // xhr.responseType = "json";
  // xhr.open(method, url);
  // xhr.send();

  // xhr.onload = () => {
  //   console.log(xhr.response);
  //   callback(xhr);
  // };
  
//  print first response
  let x = await fetch(url)
  .then((wholeData)=> wholeData.json())
  .then((data)=>{
    console.log(data);
    return data
  })
  return x
  
}


async function runChain() {
  let x= await cc("https://dummyjson.com/users")
  console.log(x);

  let firstUserId = x.users[0].id
  let postsData = await cc(`https://dummyjson.com/posts/${firstUserId}`);

  const postId = postsData.id; // adjusting based on your structural logic
  await cc(`https://dummyjson.com/comments/${postId}`);
  
}

runChain()