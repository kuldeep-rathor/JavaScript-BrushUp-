// objects
// singleton
// objectLiterals

const mySym = Symbol("key1");

const jsUser = {
  name: "kuldeep",
  "Full Name": "Kuldeep Rathor",
  age: 24,
  [mySym]: "newKey",
  email: "kuldeep@gmail.com",
  location: "bangalore",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "saturday"],
};
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[mySym]);

jsUser.email = "Kd@gmail.com";
// Object.freeze(jsUser);
jsUser.email = "kk@gmail.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log(" Hello Kd");
};
jsUser.greeting2 = function () {
  console.log(` Hello Kuldeep, ${this["Full Name"]}`);
};
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
