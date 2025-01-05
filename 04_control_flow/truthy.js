const userEmail = []

if (userEmail) {
    console.log("got user email");
}else {
    console.log("Dont have user email");
}

// Falsy values are as follows
// false, 0, -0, BigInt 0n, "" , null, undefined ,NaN

// Truthy values are as follows
// "0", "false", " ", [], {}, function() {}

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }
// to check array is empty or not

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }
// to check object is empty or not

// Nullish Coalescing Operator (??): null undefined
// ye operator agar koi variable ki value null ya undefined ho tho second value assign karta hai
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 5
// val1 = undefined ?? 4
val1 = null ?? undefined
// console.log(val1);

// Terniary Operator

// conditon ? true : flase

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");


