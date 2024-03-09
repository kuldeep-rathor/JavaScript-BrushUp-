// primitive datatypes 
console.log("Kuldeep")
 /*
primitive -> string, number , null , boolean , undefined , BigInt , symbol



 */
let id = Symbol('kd');
let id2 = Symbol('kd');
console.log(id === id2);

let bigNumber =  456789123467n;
console.log(typeof bigNumber);
/*
reference or non- primitive -> Arrays , Objects , functions 
*/

let heros = ['dad' , 'hanuman', 'kohinoor'];

let  myObject = {
    name : "Kuldeep",
    age : 22,
}

const myFunction = function() {
    console.log('hello babe')
}
myFunction();
console.log(typeof myFunction)
console.log(typeof heros);
console.log(typeof myObject);