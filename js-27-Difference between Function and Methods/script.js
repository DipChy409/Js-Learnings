let maths = {
    PI: 3.141592653589793,
    add: function(a,b) {
        return a+b
    },

    square: function(num){
        console.log(num* num);

    },
    subtract(a,b){
          return a-b
    },
    cube(a){
        console.log(arguments);
     return a**3
    }

}
console.log(maths.cube(5,2));
console.log(maths.subtract(3,2));


console.log(maths.square(2));


