//Some Method..........  behave like ||(OR) operator.

const evenNumbers= [2,4,6,8,10,11,12]
    // debugger

const result=evenNumbers.some((num,i)=> {
    // console.log(num*1);
    if(num%2 === 1){
        console.log(i)
    }
    return num%2 === 1


})///.some method checks if at least one element in the array passes the test implemented by the provided function.
// In this case, it checks if there is at least one odd number in the 'evenNumbers' array. 
//If there is at least one odd number, it will return true; otherwise, it will return false.







///Every Method...........Its behave like &&(AND) operator.
 
const evenNumbers2= [2,4,6,8,10,11,12]

const result2=evenNumbers2.every((num)=>{
   if(num%2 ===0){
    console.log(num, "passed");
   }
   return num%2 ===0
})