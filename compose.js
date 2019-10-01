// Compose

const compose = function(f, f2) {
  return function(name, surname, nickname) {
    return f2(f(name, nickname), surname);
  };
};

function p1(name, nickname) {
  return name + " " + nickname + " ";
}
function p2(name, surname) {
  return name + surname;
}

const addString = compose(
  p1,
  p2
);

console.log(addString("Dusko", "Peric", "Silni"));
