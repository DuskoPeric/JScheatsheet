function Person(name) {
  return {
    name: name,
    say: function() {
      console.log("Name: " + this.name);
    }
  };
}

function Man(name) {
  this.name = name;
  this.say = function() {
    console.log("Name: " + name);
  };
}

const me = new Person("Dusko");
me.say();

const john = new Man("John");
john.say();
