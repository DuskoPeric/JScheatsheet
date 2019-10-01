const obj = {
  name: "Miss Fortune",
  say() {
    console.log(this.name);
  }
};

const obj1 = {
  name: "Pyke"
};

obj1.__proto__ = obj;

obj1.say();
obj.isPrototypeOf(obj1); //true

for (let prop in obj1) {
  if (obj1.hasOwnProperty(prop)) {
    console.log(prop);
  }
}
