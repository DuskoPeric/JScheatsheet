const Person = {
  name: "Dusko",
  say() {
    console.log("Name: " + this.name);
  }
};

const meCopy = Object.create(Person); // need object or null
const empty = Object.create(null);
console.log(test);

meCopy.say();
