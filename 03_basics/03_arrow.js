const user = {
    username: "Rahul",
    price: 999,

    welcomeMessage: function() {
        //console.log(`${this.username}, welcome to website`); // yaha pe this Rahul ko refer kar raha hai
        //console.log(this); // yaha pe this pure obj ko refer kar raha hai
        
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage() // this ke vaja se context change hone par bhi sam print hoga

//console.log(this);  // node environment ke andar this empty object ko refer karta hai 
// par website pe this Window ko refer karta hai

//function chai() {
//    let username = "Rahul"
//    console.log(this.username); // cannot use this method in funtion
//}

// chai()

//const chai = function() {
//    let username = "Rahul"
//    console.log(this.username); 
//}
//chai()


const chai = () => {  // arrow function ko aise likhte hai
    let username = "Rahul"
    console.log(this); 
}
//chai()

//const addTwo = (num1, num2) => {  // basic arrow function
//    return num1 + num2
//}
//console.log(addTwo(5,8));
 
//const addTwo = (num1, num2) =>  num1 + num2  // implicit return function hai isme return likhne ki jarurat nhi

//const addTwo = (num1, num2) =>  (num1 + num2) // hum parenthesis bhi use kar sakte hai  
// parenthesis use karne pe return use karne ki jarurat nhi hai

const addTwo = (num1, num2) => ({username: "Khushal"}) // object ko access karne ke liye parenthesis lagana hi padega

console.log(addTwo(5,8));