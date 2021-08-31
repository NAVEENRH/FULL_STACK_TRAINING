// variable:data_type
let a: number = 10;
a = 12;

// tsc file_name.ts
function test(a: string, b: number): void {
  debugger;
  console.log(a, b);
}

test("test", 10);

var b: any = 10;
b = true;
b = "test";

// | : intersection
const decision: "yes" | "no" = "yes";

// custom data type
interface Product {
  productId: number;
  productName: string;
  productPrice: number;
  productStock?: boolean; // optional
}

type ProductType = {
  productId: number;
  productName: string;
  productPrice: number;
  productStock?: boolean;
};

interface Cart extends Product {
  productQty: number;
}

type CartType = {
  productQty: number;
} & ProductType;

const prod: Product = {
  productId: 1000,
  productName: "test",
  productPrice: 12000,
  //productStock:true
};
const pr: ProductType = {
  productId: 1,
  productName: "test",
  productPrice: 1200,
};

// const cart: Cart = {};
// const c: CartType = {};
