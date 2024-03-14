const user = {
    userName : "Kuldeep",
    price : 99,
    welcomeMessage :  function (){
        console.log(`${this.userName} , welcome to the website`);
        // console.log(this);
    }
}
user.welcomeMessage();
user.userName ="Afreen";
user.welcomeMessage();
console.log(this);


// function chai(){
//     let user = "KD"     // normal function
//     console.log(this);
// }
// chai();

// const chai =function (){
//     let user = "KD"                // function expression
//     console.log(this.user);
// }
// chai();

// const chai = ()=>{
//     let user = "KD"
//     console.log(this);   // arrrow function , the o/p of this is curly braces {}
// }
// chai();


// const addTwo = (num1, num2)=>{
//     return num1 +num2;
// }
// console.log(addTwo(3,4))

// const addTwo = (num1, num2)=>num1 +num2;

// console.log(addTwo(3,4))



const addTwo = (num1, num2)=>({
    userName : "KD",
})

console.log(addTwo(3,4))