// if 
const isUserloggedin = true 
let temperature = 41

//if (temperature <= 41) {
//    console.log("executed")
//} else {
//    console.log("temperature is greater than 50");   
//}

// <, >, <=, >=, ==, !=, ===, !==
// === ye type of variable bhi check karta hai jaise string hai kya or number hai kya

//const score = 200

//if (score > 100) {
//    let power = "fly"
//    console.log(`user power:${power}`);
//}
//console.log(`user power:${power}`);
// error ana chahiye bcoz power scpe ke andar hai tho vo access nhi ho payega

//const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");
// bina scope diye bhi if statement likh sakte hai par achi practice bilkul nhi hai

//  if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }

const userloggedin = true
const debitcard = true
const loggedFromGoogle = false
const loggedFromEmail = true

if (userloggedin && debitcard && 2==3) {
    console.log("allow to buy course");
}

if (loggedFromEmail || loggedFromGoogle) {
    console.log("user logged in"); 
}