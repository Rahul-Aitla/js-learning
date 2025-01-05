const coding = ["js", "ruby", "java", "python", "c++"]
// syntex for foreach loop

// coding.forEach(function (key) {})
// coding.forEach( function (val) {
//     console.log(val);
// })

// syntex for foreach loop (arrow function)
// coding.forEach( (key) => {})
coding.forEach( (val) => {
    //console.log(val);
})

function printme(item) {
    console.log(item);
}
// coding.forEach(printme) // function ki reference de kar bhi foreach loop chala sakte hai
// NOTE: sirf refernce dena hai run nhi karna hai.

coding.forEach( (item, index, arr) => { // index aur pure array ko bhi access kar sakte hai
    // console.log(item, index, arr); 
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(`Language name is ${item.languageName} and its file name is ${item.languageFileName}`);
})
// yaha pe item ke baad . lagake object ke andar ke keys ko access kiya gaya hai