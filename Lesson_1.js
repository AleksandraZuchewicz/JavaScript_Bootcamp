1. Variables  
 var transportation = "car";
 // reserved name + variable name =assigment operator 
 // challenge - rewrite invalid or bad practice variable names
var 1stPet = 'Bear';
var BaseballTeam = 'Dodgers';
var favoritedayoftheweek = 'Friday';
var favorite color = 'green';
var var = 'car';

// possible solutions
var pet1 = 'Bear'; // numbers are ok if not the first character
var baseballTeam = 'Dodgers';
var favoriteDayOfTheWeek = 'Friday';
var favorite_color = 'green';
var favoriteColor = 'green';
var travel = 'car';

2.Strings
// wrapping any primitive in quotes will turn it into a string
typeof 24; // "number"
typeof '24'; // "string"
typeof true; // "boolean"
typeof 'true'; // "string"
typeof undefined; // "undefined"
typeof "undefined"; // "string"

// quotes within string
// errors
var greeting = 'It's great to see you!'; // error, matching inner and outer single quotes
var response = "Billy said, "I am sick""; // error, matching inner and outer double quotes
// possible solution
var greeting "It's great to see you!";
var response = 'Billy said, "I am sick"';
// possible solution - escape character - turns special characters into string characters
var greetings 'It\'s great to see you!';
var response "Billy said, \"I am sick\"";

// length property - returns the lengh of a string
var greeting = "It's good to meet you!";
greeting.length; // 22

// toUpperCase() 
var greeting = 'Good to see you!';
var shoutGreeting = greeting.toUpperCase();
shoutGreeting; // 'GOOD TO SEE YOU!'
