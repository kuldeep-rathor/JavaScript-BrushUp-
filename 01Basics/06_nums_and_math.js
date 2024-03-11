let score = 400 ;
// console.log(score);

let balance = new Number(100);
// another way of assigning number to a variable 
// console.log(balance);

// console.log(balance.toString().length);
// converts into to string where further we use string properties on it.
// console.log(balance.toFixed(2));
// after decimal takes whatever value we to the function

const anotherNumber = 200.4564 ;
// console.log(anotherNumber.toPrecision(4));
// converts to precise value 

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'))  
// converts into indian currency type


// +++++++++++++++++++++++++++  Math   ++++++++++++++++++++++++++++++++++++++++++
// 

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.55));

console.log(Math.floor(Math.random()*10)+1);

let min = 15 ;
let max = 50;
console.log(Math.floor(Math.random()* (max-min+1))+min)


