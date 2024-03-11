//  Dates

let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


let myCreatedDate =  new Date(2022,0,22);
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let anotherDate = new Date();
console.log(anotherDate.getDate());
console.log(anotherDate.getHours());

console.log(anotherDate.toLocaleString('default' ,{
    weekday: "long"
}));