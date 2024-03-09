let name = "Kuldeep";
let repoCount = 60 ;
//  console.log(name + repoCount );

console.log(`My name is ${name} and my repoCount is ${repoCount}`)
console.log(name.length);

let newName = new String('Nehal')
console.log(newName.length);
console.log(newName.toLocaleUpperCase());
console.log(newName.charAt(2));
console.log(newName.indexOf('h'));

const gameName ="Kd-kamal";
const one = gameName.substring(0,5)
console.log(one);

const anotherString = gameName.slice(0 ,4);
console.log(anotherString);

const string2 = gameName.trim();
console.log(string2);

const url = "https://kuldeep.com/kulddep%69kd" ;
let newUrl = url.replace('%69', 'rathor')
console.log(newUrl);

console.log(gameName.split('-'))
