function x(firstName) {
  var preText = "Your name is ";
  return function(lastName) {
    console.log(preText + firstName + " " + lastName);
  };
}

var me = x("Dusko");

me("Peric");
me("Nesto");
