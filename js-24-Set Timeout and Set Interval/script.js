// setTimeout(`console.log("dip")`, 2000)

// const timer1=setTimeout(`console.log("Timer-1")`, 1000)
// const timer2=setTimeout(`console.log("Timer-2")`,2000)
// const timer3=setTimeout(a, 0, "dip", 5000, "chy", 600)           //It will run after the synchronous code
//  even though we have set the time to 0 because it is an asynchronous function 
// and it will run after the synchronous code is executed.


// clearTimeout(timer1)
function a(){
    // console.log(arguments);
    console.log("Hello World!");
}

// console.log("DIP CHY");                //This code is running first cause
//  it a synchronous code and setTimeout is a asynchronous 
// function which will run after the synchronous code is executed.



// let timer1=setInterval(a, 1000, "dip", 5000, "chy", 600 )
// let timer2=setInterval(a, 2000)
// const timer2=setInterval(`console.log("Timer-2")`,2000)
// const timer3=setInterval(a, 3000, "dip", 5000, "chy", 600) 



// setTimeout(function(){ // anonymous function

//     console.log("Pora print hba");
// } , 2000)
// console.log("Age console hba");

    

function a(){
    console.log("hi");
}
console.log(a());
