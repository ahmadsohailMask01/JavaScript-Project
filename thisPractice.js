// // // const arrowFunc = () => {
// // //   console.log(this);
// // // };
// // // arrowFunc(); // Arrow Function refers to parent context

// // // const myObj = {
// // //   username: "Ahmad Sohail",
// // //   funcInsideObject: () => {
// // //     console.log(this);
// // //   },
// // // };

// // // myObj.funcInsideObject();
// // "use strict";
// // function sayHello() {
// //   this.myFriendName = "Hammad";
// // }
// // const gh = new sayHello();
// // sayHello.hi = "Hi";
// // console.log(gh.myFriendName);

// // const newObj = {
// //   username: "Ahmad",
// //   learningFrom: "Chai Aur Code",
// // };
// // const gf = new newObj(); // gives an error

// function sayHello() {
//   console.log("Hi");
// }
// Object.prototype.sayAhmad = function () {
//   console.log("Hi, Ahmad is called from function");
// };

// const myName = sayHello();
// myName.sayAhmad();
