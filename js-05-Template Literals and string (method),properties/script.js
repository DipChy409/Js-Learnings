const message = "Hello Bangladesh!"

const faltuMal =  '  Im Dipu Chowdhury   '
const finalMessageLowerCase = faltuMal.trim().toUpperCase().toLowerCase()
const finalMessage = faltuMal.trim()

// const concatMessage = message.concat(finalMessage)
// console.log(concatMessage);

// const replacedMessage = finalMessage.replaceAll("u", "U")
// console.log(replacedMessage);

const last4digit = "8532"
const bankBalance = "2000"

const last = faltuMal.trim()

const upperCaseMessage = message.toLocaleUpperCase()

const templateString =  `Last four digit of my bank account is ${last4digit.padStart(15, "*")}`
const templateLiterals = `I have ৳${bankBalance} in my account`
const notGooduse = "I have ৳" + bankBalance + ' in my account'

// console.log(templateString)


//Example of difference between toUppercase and toLocalUpperCase

// const touppercaseMessage =  "english"
// console.log(touppercaseMessage.toUpperCase())

// const toupperLocalcaseMessage =  "english"
// console.log(toupperLocalcaseMessage.toLocaleUpperCase("tr"))



const indexmessage = "iam a student".indexOf("student")

console.log(indexmessage)

const ooPs = "   I am a student   "
const templates = `The index of "student" in the string is ${ooPs.trim().indexOf("student")}`
console.log(templates);


let count = 5
let word = "String"
console.log(word.repeat(count));
