// variables
// number, boolean, string, date, array, object
"use strict";
var a = "test";

// scope : for loop
for (var i = 0; i < 10; i++) {
  // isolate scopes : each iteration : scope
  // self invoking functions : IIFE : immediately invoked function expression
  // test(i);
  (function (j) {
    setTimeout(function () {
      console.log("TASK", j);
    }, j * 1000);
  })(i);
}
// let : block scope variable
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log("TASK", i);
  }, i * 1000);
}

function test(i) {
  setTimeout(function () {
    console.log("TASK", i);
  }, i * 1000);
}

// const : block scope variable : read only
const no = 10;
// immutable
//no = 20;
const obj = { name: "test", age: 12 }; // change in ref
// mutating the object : mutable
obj.name = "demo";
// always keep your objects immutable
// arrays & objects are mutable by default
