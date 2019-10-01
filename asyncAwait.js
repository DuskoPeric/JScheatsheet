let a = "";

function getTodo(url) {
  return fetch(url);
}

let resp = await getTodo("https://jsonplaceholder.typicode.com/todos/1");
let data = await resp.json();
a = data;
console.log(a);
