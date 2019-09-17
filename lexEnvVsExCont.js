//Lexical enviroment je gdje pripada
//Execution context je gdje je pozvano

var obj = {
  name: "Dusko",
  getName() {
    return this.name; //lexicki pripada obj
  }
};

var globalCall = obj.getName;
// var globalCall = obj.getName.bind(obj); //ovako moze da se odnosi na obj

console.log(globalCall()); //pozvano globalno
console.log(obj.getName()); //pozvano sa obj
