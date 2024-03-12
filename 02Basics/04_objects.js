//  const tinderUser = new Object();

const tinderUser = {

}
tinderUser.name = "Thiru"
tinderUser.id = "9999"
tinderUser.isLoggedIn = true


const regularUser = {
    email : "thiruPukka@gmail.com",
    fullName : {
        userFullName  :{
            firstName  : "thiru",
            lastName : "Pukka"
        }
    }
}

// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {1: "a" , 2:"b"};
const obj2 = {3: "c" , 4:"d"};

const obj3 = {obj1 , obj2};
// console.log(obj3);

const obj4 = Object.assign({} ,obj1 , obj2);
// console.log(obj4);
const obj5 = {...obj1 , ...obj2};
// console.log(obj5);


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"))
