// functions
// function fun_name(): named function
// function() : unnamed/anonymous/expression function
// () => :fat arrow function

// default arguments : all default arguments should be defined at the end
function test(a, b = 0) {
  console.log(a, b);
  return a + b;
}
function test1() {
  console.log("test");
}
// test(1)
// test1()
const person = {
  name: "test",
  age: 12,
  greeting: function () {
    console.log("OUTSIDE", this);
    // this : access current object properties
    // context binding
    setTimeout(() => {
      console.log("INSIDE", this);
      console.log("hello from", this.name);
    }, 2000);
  },
};
// async function : () =>
// events : () =>

// dot notation
person.greeting();
// bracket notation : dynamic properties
person["greeting"]();
// const key='name';
// person[key]

function getValue(key) {
  //   console.log(typeof person[key]);
  return typeof person[key] === "function" ? person[key]() : person[key];
}
