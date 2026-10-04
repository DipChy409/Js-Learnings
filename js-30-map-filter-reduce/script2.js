
// REDUCE.........................................

const nums = [1,2,3]
let sums= nums.reduce((accumulator, currentValue,i,arr)=> {
    // console.log(i,arr);
    // console.log(i,currentValue);
    // console.log(accumulator,currentValue);

         return     accumulator*currentValue
},0)// it will return whatever written in the return statement.


    
