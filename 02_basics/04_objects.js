//const tinderUser = new Object() // singleton object

const tinderUser = {} //non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Rahul"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Rahul",
            lastname : "Aitla",
        }
    }
}
regularUser.fullname.userfullname.firstname = "Khushal"
//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1 : "a" ,2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

//const obj3 = {obj1,obj2} // will get obj imside obj
//const obj3 = Object.assign({},obj1,obj2)  // 1st method to add objects

const obj3 = {...obj1,...obj2}  //best method to add objs
//console.log(obj3);

const users = [
    {
        id : 1,
        email : "ra@gmail.com",
    },
    {
        id : 2,
        email : "ra@gmail.com",
    },
    {
        id : 3,
        email : "ra@gmail.com",
    },
]

//console.log(users[1].email);
//console.log(tinderUser); //to print full obj

//console.log(Object.keys(tinderUser)); //to print all keys of obj
//console.log(Object.values(tinderUser)); // to print all values of obj
//console.log(Object.entries(tinderUser)); // array ke andar aur ek array banake ek ek key aur value deta hai hai

//console.log(tinderUser.hasOwnProperty("id")); //to check wheather key is present or not

const course = {
    coursename: "js in hindi",
    price: "000",
    courseInstructor: "hitesh"
}
//course.courseInstructor //nornmal way to acces keys


//const {courseInstructor} = course // easy wAy to acess keys
const {courseInstructor: key} = course // can chnage the name of the key
// this way is called de-strcuturing of obj
console.log(key); 


// APIs

//JSON format apis in form of obj
//{
//    "name": "hitesh",
//    "coursename": "js in hindi",
//    "price": "free"
//}

// in form of array
[
    {},
    {},
    {}
]