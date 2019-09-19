// No hoisting problem
console.log(x); //error
console.log(z); //undefined
let x = "test";
var z = "test";

// Block scope
if (true) {
  let y = "test";
  var w = "test";
}
console.log(y); //error
console.log(w); //test
