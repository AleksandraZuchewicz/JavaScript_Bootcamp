//function(){};

function morningGreeting() {
  return "Good Morning, its the time to get up";
}

function greetPresident(firstName, lastName) {
  return "Hello " + firstName + " " + lastName + "!";
}
let greet1 = greetPresident("Abraham", "Lincoln");
console.log(greet1);

//function expression
let newGreet = function morningGreeting() {
  return "Good Morning, its the time to get up";
};

//regular function
function morningGreeting() {
  return "Good Morning, its the time to get up";
}
//IIFE - Immedietely invoke function expression
let iife = (function(firstName, lastName) {
  return "Hello! " + firstName + " " + lastName;
})();
// Extra() - immedietally calls the function, may be inside or outside of wrapped function place argument
// within parenthesis;
