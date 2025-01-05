// stack (Primitive), Heap (Non-primitive)
// Non-primitive types are 1)Arrays 2)Objects 3)Functions

let myYoutubename = "RahulAitla.com"

let anothername = myYoutubename
anothername = "Khushalaitla"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email:"user@gmail.com", // yaha = nhi : collon use karna hai
    upi :"user@ybl"
}

let userTwo = userOne
userTwo.email = "user1@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

