let Person = function() {
  this.name = "Dusko";
};
let me = new Person();
Person.prototype.surname = function() {
  return this.name;
};
Person.prototype.pr = "Peric";

console.log(me);

console.log(me.surname());
