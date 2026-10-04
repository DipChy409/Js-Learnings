//Map .......................................................................

// var arr=[1,2,3,4,5]

// arr.map((a) => {
//     console.log(a);
//     return a**2
// })//retrurn new array with the same length as the original
//array but with the values modified according to the
// function provided. In this case,
// it will return a new array with the squares of the original values.

// arr.forEach((a) => {
//     console.log(a);
//     return a**2
// })//return Undefined

const months = ["January", "February", "March", "April", "May", "June"];

// let capiTalmonth= months.map((month,index,array) => {
//     // console.log(array);
//     // console.log(`${month} has ${index} index on [${array}]`);
//       return month.toUpperCase()
// })
// console.log(capiTalmonth);

// let filtermonth= months.filter((month,index,array) => {
//     // console.log(array);
//     // console.log(`${month} has ${index} index on [${array}]`);
//     // console.log(month.includes("M"))
//     return month.toLowerCase().includes("m")

// })





//FILTER .....................................................................

let filtermonth = months.filter((month, index, array) => {
  // console.log(array);
  // console.log(`${month} has ${index} index on [${array}]`);
  // console.log(month.includes("M"))
  return index >= 3;
});



const students = [
  { name: "Akash", age: 17 },
  { name: "Protik", age: 20 },
  { name: "Priyom", age: 18 },
  { name: "Raman", age: 16 },
  { name: "youdi", age: 56 },
];

let FilterOUT = students
  .filter((name, i, arr) => {
    return name.age >= 18;
  }) .map(a=>{
    return a.name
  }).filter(a=>{
    return a.includes("P")
  })

// function a(x) {
//   return x.name;
// }

// let y=FilterOUT.map(a=>{
// return a.name
// })



