// maps (koi condition check nhi hota direct koi bhi expression de sakte hai)

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

// const newNums = myNumbers.map( (num) => num + 10 )

const newNums =myNumbers
            .map( (num) => num * 10 )   // multiple maps aur filter laga sakte hai jo phle hai vo phle execute hoga aur next uske baad 
            .map( (num) => num + 1 )
            .filter( (num) => num >= 40 )
console.log(newNums);
