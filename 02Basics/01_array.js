//  Array 

let array = [ 0,2,2,4,5];
// console.log(array);
// console.log(array[2]);

let newArr = new Array(1,2,8,9,4,5);
// console.log(newArr);

newArr.push(5);
newArr.push(45);
// newArr.pop();
console.log(newArr);
newArr.unshift(10);
newArr.shift();
console.log(newArr)


let newArr2 = newArr.join();
// it changes the type of the array to string 
console.log( typeof newArr2);


//  slice and splice


let start = [1 , 2, 3 ,4 , 6];
console.log('A' , start);

const myn1 = start.slice(1,3)
// it does not include the last value of index mentioned inside the slice method
console.log(myn1);
console.log("B" ,start)

const myn2 = start.splice(1,3);
// it manipulates the complete array and also includes the last index mentioned inside splice method
console.log(myn2);
console.log("C" , start)