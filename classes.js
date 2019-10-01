class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log("Name: " + this.name);
  }
}

class Programer extends Person {
  constructor(name, job) {
    super(name);
    this.job = job;
  }
  kodira() {
    console.log("What he doing: " + this.job);
  }
}

const me = new Programer("Dusko", "Create app");
me.say();
me.kodira();
console.log(me.__proto__["say"]);
