// custom module/library
// is private by default
// export : public
// inline export
export function add(a, b) {
  console.log("SUM", a + b);
}
function sub(a, b) {
  console.log("SUB", a - b);
}
function mul(a, b) {
  console.log("MUL", a * b);
}
function div(a, b) {
  console.log("SUM", a / b);
}

// named exports : literal
export { sub, mul };
// export { sub };
// default export : only one default is allowed/file
// export default { div, sub, add, sub };
// 4kb size
export default div;
