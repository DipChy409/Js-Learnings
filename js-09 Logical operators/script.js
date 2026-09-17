const userAge = 22
// (userAge >= 18) && (userAge <=24) //true


const isSchoolStudent = (userAge >= 5) && (userAge <=18);
const isCollegeStudent = (userAge >= 18) && (userAge <=24);

const isStudent = isSchoolStudent|| isCollegeStudent//true

const andResult = 0 && 2 //0(Falsy)
const orResult = 0 || 2 //2 (truthy)

const andResult2 = '' && 'Hello'//'' (Falsy)
const orResult2 = '' || 'Hello'//'Hello' (Truthy)

const andResult3 = 'Hello' && null //null (False)
const orResult3 = 'Hello' || null //Hello (true)

const andResult4 = 'Hello' && -4 + 4 //0 (Falsy)
const orResult4 = undefined || 4 + 8 * 5 //44(truthy)

const logResult = console.log("Hello");

const andResult5 = 'Hello' && console.log('hello1')//undefined (Falsy)
const orResult5 = undefined || console.log('hello2')