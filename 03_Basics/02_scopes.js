// let a=10;
// const b = 20;
// var c =30;
var c = 300;
let a= 300;

if(true){
    let a=10;
const b = 20;
var c =30;
   console.log("INNNER:", a )
}
console.log(a);
// console.log(b);
console.log(c);


// +++++++++++++++++++++++++++++++++++++++++++++++++


function one(){
    const userName = "Kuldeep";
    function two(){
        const website = " Youtube.com";
        console.log(userName)
    }
    // console.log(website);
    two();
}
one();


if (true) {
    const user = "Rathor";
    if(user === "Rathor"){
        const web = " Youtube";
        console.log(user + web);
    }
    // console.log(web);
    
}
// console.log(user);

// +++++++++++++++++++++++Interesting +++++++++++++
console.log(addOne(5)); // no error here
function addOne(num){
    return num+1;
}
// addOne();

addTwo();   // This error is occured due to hoisting concept due 
const addTwo =function (num){
    return num+2;
}
// addTwo();