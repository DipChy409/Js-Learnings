// const user = {
//   name: "DIP",
//   age: 30,
// };

// try {
//   console.log(user.address.city);
// } catch (err) {
//   console.log(err.message);
// } 
// console.log(3 + 7);


async function makeAsyncRequest() {
    try{
        const url = 'https://jsonplaceholer.typicode.com/todos/1'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data
    }
    catch(err){
        console.error(err);
    }
    

    console.log("hi");
}
makeAsyncRequest().then((data)=>{
    console.log(data);
})

