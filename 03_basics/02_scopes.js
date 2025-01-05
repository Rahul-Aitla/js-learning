{}  // curly braces ke andar jo hai usko scope bolte hai
// curly braces ke andar jo hai usko block scope bolte hai aur jo bahar hai usko global scope bolte hai
//var c = 300
let a = 100
if (true) {
    let a = 10
    const b = 20
   // var c = 30 
   //console.log("INNER:", a);
   
}


//console.log(a);
//console.log(b);
//console.log(c);

function one() {
    const username = "Rahul"

    function two() {
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);

    two()
}
one()

if (true) {
    const username = "Rahul"
    if (username === "Rahul") {
        const website = "youtube"
        //console.log(username + " " + website);
    }
    //console.log(website); // cannot access scope loop le andar khatam hojata hai
}
//console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num) {
    return num + 1
}
// yaha par functon ko call hum phle bhi kar sakte hai ya kaha se bhi kar sakte hai pure code me 


console.log(addtwo (9));  // error ( Cannot access 'addtwo' before initialization )
const addtwo = function(num) {
    return num + 2
}
// yaha par function ko badme hi call karna padega bcoz vo ek variable hai naki normal function

