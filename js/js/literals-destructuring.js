// object literals
function user(firstName, lastName) {
  return {
    firstName, // property short hand
    lastName,
    fullName: firstName + " " + lastName,
  };
}
// destructuring
// const u = user("john", "doe");
// const name = u.fullName;
// const firstName = u.firstName;
const { fullName: username, firstName } = user("john", "doe");
