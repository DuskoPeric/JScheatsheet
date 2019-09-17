function x(callback) {
  callback();
}

function y(n) {
  console.log(n);
}
x(y.bind(null, "nesto"));
