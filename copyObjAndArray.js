let obj = {
  name: "somethig",
  insideObj: {
    somethig: "nesto"
  }
};

let arr = [1, 2, 3];

//regular clone
let obj2 = { ...obj };

//clone object and object in object
let obj3 = JSON.parse(JSON.stringify(obj));

//clone Array
let arr2 = [].concat(arr);
let arr3 = [...arr];
