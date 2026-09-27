var a = 23;
function abc(a,b) {//It is a higher order function because it takes a function as an argument

    // console.log(typeof a);
    console.dir(a);
    console.dir(b)
    a()//Callback function
    b()//Callback function
    // sayHI()
}

// abc("DIP")                  //it is not a callback function because it's not a function and a string
// abc({name: "DIP", age: 20}) //it is not a callback function because it's not a function just an object
// abc([1,2,3,4])              //it is not a callback function because it is an array and not a function




//Both are Callback Functions.........
function sayHI(){
    console.log("Helloooo");
}

abc(function (){        //anonymous Function
    console.log("HIIIIIII");
}, sayHI)