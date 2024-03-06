const accountId = 12345 ;
let accountEmail = "kuldeeprathor91010@gmail.com";
var accountPassword = "866099";
accountCity = "Bangalore";
let accountState ; 
// if we declare a vaariable and do not assign any value to it -> Js takes th value of it as undefined 

// accountId = 7 ; -> Not allowed
accountEmail = "kd@gmail.com";
accountPassword = "77777";
accountCity = "Gwalior";

/*
Prefer not to use var a]to declare a variable 
because of issue in block scope and functional scope 
*/

console.log(accountId);


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
