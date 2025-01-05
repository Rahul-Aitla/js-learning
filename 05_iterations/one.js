// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 1; i <=  10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10 ; j++) {
        // console.log(`Inner loop value: ${j} and inner loop value ${i}`);
        // console.log(`i*j = ${i*j}`);
    }
}

let myArray = ["Flash", "Batman", "Superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// for (let i = 0; i < 20; i++) {
//     if (i == 5) {
//         console.log("Detected no 5");
//         break
//     }
//     console.log(`value of i is ${i}`);
// }
// break pure code ko hi rok deta hai jo uske baad hai

for (let i = 0; i < 20; i++) {
    if (i == 5) {
        console.log("Detected no 5");
        continue
    }
    console.log(`value of i is ${i}`);
}
// continue sirf vo iteration ko skip karta hai aur next step se execute hone lagta hai not like break