/** @format */

let obj1 = {};
let obj2 = {};

function inputFunc() {
  console.log("from input func");
}

obj1.random = inputFunc;
obj2.random1 = inputFunc;

obj1.inputFunc();
