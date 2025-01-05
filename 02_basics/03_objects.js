// literals ki tara declare karne pe singleton nhi banta hai
// constructor ki tara declare karne par singleton banta hai
//Object.create  constructor ka tarika

//singleton

//objects literals

const mySym = Symbol("Key1")  //Symbol ko aise declare karte hai.

const JsUser = {
    name : "Rahul",
    "full name" : "RAhul Aitla",
    [mySym] : "mykey1",
    age : 20,
    location : "Thane",
    email : "Rahul@google.com",
    isLoggedIn : false,
    LastLogindays : ["Friday", "Monday"]
}

//console.log(JsUser.email); //1st way to access keys in object
//console.log(JsUser["email"]); // 2nd way to access keys in objects
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email = "rahul@yahu.com" // to change the keys inside obj
//Object.freeze(JsUser) // to freeze any object to avoids changes in future.
//JsUser.email = "Rahul@email.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting());

JsUser.greetingtwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greetingtwo());