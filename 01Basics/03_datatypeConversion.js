let score = null;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
"12abc" => NaN
null=> 0
undefined => NaN
"kuldeep"=> NaN 
true => 1 , false => 0;




*/

let isLoggedIn = -12;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); 

/* 
 1 => true , 0 => false 
 ""=> false 
 "kuldeep"=> true
*/

let someNumber = 12 ;
let stringNumber = String(someNumber);
// console.log(typeof stringNumber);
// console.log(someNumber);

//    operations 

let value = 45 ;
let negValue = -value;
// console.log(negValue);


/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/6);
console.log(2%20);
console.log(2**2);
*/

let str1 = "Hello";
let str2 = " Kuldeep";
let str3 = str1 + str2 ;
// console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2)  ;
// console.log(1 + 2 + "2");
// console.log(true);
// console.log(+true);
// console.log(+"");

/*
let num1 , num2 , mum3
num1=num2=num3 = 2 + 2 => Bad practice of writing a code 

*/
// let gameCounter = 100;
// console.log(gameCounter);
// ++gameCounter;
// console.log(gameCounter);
// gameCounter++;
// console.log(gameCounter);

let myLife = 23;
// let Hp = ++myLife;
// console.log(`${myLife}  ${Hp}`);
let hP = myLife++;
console.log(`${myLife} ${hP}`);
console.log(hP)