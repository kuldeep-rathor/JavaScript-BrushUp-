
// function sayMyName (){
//     console.log("Kuldeep");

// }
// sayMyName();

// function addTwoNumbers (num1 , num2){   //parameters
//     console.log(num1 +  num2);

// }
// addTwoNumbers(3 ,4);  //Arguments  and calling function.


function addNumbers (n1 , n2){
    // const result = n1 +n2;
    // return result;
    return n1+n2;
}
const result =addNumbers(3,5);

// console.log("Result :" , result);

function userLoggedIn (username){
    if(username === undefined){
        console.log("Please enter the UserName");
        return;
    }
    return `${username} is logged in`;
}
// console.log(userLoggedIn());
console.log(userLoggedIn("Kuldeep"));