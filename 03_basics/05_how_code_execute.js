// Refer:- https://youtu.be/ByhtOgF6uYM?si=NgK7Sz2B4Me-BCqe
// code kaise execute hota hai aur uska flow kaisa hota hai

/* JAVASCRIPT EXECUTION CONTEXT
   3 hai
   1)Global execution context  sabse phle banta hai jab code likte hai aur isko (this) ke andar dal diya jata hai
   2)Function execution context
   3)Eval execution context

   Ek code 2 parts me run hota hai
    1)Memory Creation Phase
    2)Execution Phase
*/
let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,8)


function one() {
    console.log("one")
    two()
}
function two() {
    console.log("two")
    three()
}
function three() {
    console.log("three")
}
one()
two()
three()

// call stack 
/* stack ki property follow hota hai (LIFO) last in first out
 sabse phle GLOBAL EXECUTION HOTA hai then baki sab */