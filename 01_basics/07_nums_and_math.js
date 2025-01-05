const score = 50
//console.log(score);

const num = new Number(500)
//console.log(num)

//console.log(num.toString().length);
//console.log(num.toFixed(2));

const othernum = 45.82543
//console.log(othernum.toPrecision(2));

const hunreds = 10000000
//console.log(hunreds.toLocaleString()); // for indian values
//console.log(hunreds.toLocaleString('en-us')); // for US values

// +++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++

//console.log(Math);
//console.log(Math.abs(4));
//console.log(Math.round(4.6));
//console.log(Math.ceil(4.1));
//console.log(Math.floor(4.9));
//console.log(Math.min(1,5,7,6));
//console.log(Math.max(1,5,7,6));
console.log(Math.random());
console.log(Math.random()*11);
console.log(Math.round(Math.random()*11));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
