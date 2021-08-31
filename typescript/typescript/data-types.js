// variable:data_type
var a = 10;
a = 12;
// tsc file_name.ts
function test(a, b) {
    debugger;
    console.log(a, b);
}
test("test", 10);
var b = 10;
b = true;
b = "test";
// | : intersection
var decision = "yes";
var prod = {
    productId: 1000,
    productName: "test",
    productPrice: 12000
};
var pr = {
    productId: 1,
    productName: "test",
    productPrice: 1200
};
// const cart: Cart = {};
// const c: CartType = {};
