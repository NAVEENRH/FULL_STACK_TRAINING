// main entry file
// #include
// import statements
// import {  } from "module/relative-filepath";

// ./ : current folder
// ../ : one level up
// as : alias
// 2kb
import divide, { add, mul as multiply, sub } from "./math-lib";
// import mathObj from "./math-lib"; 4kb

add(2, 3);
sub(2, 3);
multiply(3, 4);
divide(5, 2);
