let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject("Whoops!"), 1000);
  setTimeout(() => resolve("Jupi"), 1000);
});
promise
  .then(data => console.log(data))
  .catch(data => console.log("error: " + data));
