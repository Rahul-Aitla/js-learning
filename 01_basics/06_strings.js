const name = "Rahul"
const RepoCount = 45

//console.log(name + RepoCount + "value");  --not a good way to code

//console.log(`hello my name is ${name} and my repo count is ${RepoCount}  `);

const gameName = new String("Rahul-ar-com")
console.log(gameName[9]);
console.log(gameName.__proto__);
console.log(gameName.charAt(1));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   rahul    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Rahul.com/rahul%20aitla"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

