console.log("1");
async function makeAsyncRequest() {
  console.log(3);
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  response = await fetch(url)
  const data = await response.json()
  return data;
}
makeAsyncRequest().then(console.log)
// makeRequest()
// // function cc() {
// //   console.log("HI");
// //   throw new Error("HIIII")
// //   console.log("HELLO");
// // }

// // cc()

// async function getData() {
//   return "Hello";
// }

// console.log(getData());
