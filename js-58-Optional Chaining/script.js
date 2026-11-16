const user ={
    name: "DIP",
    age: 20,
    address: {
        city: "Chittagong"
    },
    getFullName(){
        return user.name +" "+ "age:" + user.age;
    }
}

// if(user.address){
//     console.log(user.address.city);

// }

    // console.log(user.address && user.address.city);
    console.log(user?.address?.["city"]);
//Optinal Chanining in function.....
console.log(user.getFullName?.());