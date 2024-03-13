
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
// console.log(userLoggedIn("Kuldeep"));


//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice(val1, val2 ,...num){
    return num  ;
}
// console.log(calculateCartPrice(200 , 400 , 600))


const user= {
    userName : "Kuldeep",
    price : 199
}

function handleObject (anyObject){
    console.log(`The userName is ${anyObject.userName} and the price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    userName : "sam",
    price:"199"
})

const newArray = [100 , 200 , 300 , 400];

function returnSecondArray (getArray){
    return getArray[2];
}
// console.log(returnSecondArray(newArray));
console.log(returnSecondArray([100 , 200, 800 , 900]))