function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}
//sayMyName()

//function addTwoNumbers(number1, number2) {
//    console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2) {
   //let ans = number1 +number2
   //return ans
   return number1 + number2
}
const result = addTwoNumbers(4, 6)
//console.log(result);

function loginUserName(username = "sam") {  //function me kuch pass nhi kiya tho sam print hoga
    if(!username) {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserName("Rahul"));
//console.log(loginUserName("Rahul"));

function calculateCartPrice(val1,...num1) { //(...) ye triple dot hi spred operator hai aur rust oparetor hai yaha ye valuse ko array me deta hai
    return num1
}
//console.log(calculateCartPrice(200, 455, 200, 5000));

const user = {
    username: "Rahul",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user) // obj aur function ko alag alag banake bhi call kar saket hai

handleObject({
    username: "khushal",
    price: 399
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
