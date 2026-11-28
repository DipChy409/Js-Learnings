class CreateUser{
    constructor(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

//using static block
static {
    this.hi = "HELLO"
    this.getFullName = function(){
    return this.firstName + " " + this.lastName
}
}

static run = "running"
//using static keyword
static h1 = "DIP"//Add property into class constructor
age1 = 56



getBirthyear() {
    return new Date().getFullYear() - this.age;
}
}

CreateUser.myName = "DIPTO"//Add property into class constructor


const user1 = new CreateUser("Badahan", "Chakraborthy", 45)
const user2 = new CreateUser("Dip", "CHowdhury", 21)

