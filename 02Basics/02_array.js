//  Array part-2

const marvel_heros = ["thor", "ironMan", "spiderMan"];
const dc_heros = ["superMan", "flash", "batMan"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const result = marvel_heros.concat(dc_heros);
console.log(result);
 const allHeros = [...marvel_heros , ...dc_heros];
 console.log(allHeros);


 const anotherArray = [1,2,3,[4,5,6],7,[8,9,[12,13]]];
 const realAnotherArray = anotherArray.flat(Infinity);
 console.log(realAnotherArray);


 console.log(Array.isArray("Kuldeep"));
 console.log(Array.from("Kuldeep"));
 console.log(Array.from({
    name: "kuldeep"
 }));

 let score1 = 100 ;
 let score2 = 200 ;
 let score3 = 300 ;
 console.log(Array.of(score1 , score2 , score3));