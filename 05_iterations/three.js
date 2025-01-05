// loops for arrays
// ["", "", ""]
// [{}, {}, {}]

// 1) for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    // console.log(`Each Char is ${greet}`);
}

// Maps

const map = new Map()
map.set("IN", "INDIA")
map.set("FR", "FRANCE")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("IN", "INDIA")
// maps me same values print nhi hoti and jo order me data diya hai vohi order me print hota hai
// console.log(map);

for (const [key, value] of map) {
    // console.log(key,":", values);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'PUBG'
}
for (const [key, value] of myObject) {
    console.log(key);
}
// for of loop will not work for objects