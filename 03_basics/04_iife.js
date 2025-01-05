//Immediately Invoked Function Expressions (IIFE)
// IIFE global scope pollution ko kaam karne ke liye use karte hai

(function chai() {
    // named IIFE bcoz function ka name hai
    console.log(`DB CONNECTED`);
})(); // semicolon dena compalsory hai agar do IIFE ek sath likna hai tho

((name) => {
    // normal IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Rahul');
