//random insult generators
let randomNames = ["Ola", "Ala", "Darek", "Max", "Maciek"];
let randomBodyParts = ["Head", "Hand", "Leg", "Brain"];
let randomAdjectives = ["Silly", "Smart", "Kind", "Handsome"];
let randomWords = ["phone", "clock", "door", "window"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random(3))];
//console.log(randomBodyPart);
let randomAdjective = randomAdjectives[Math.floor(Math.random(1))];
let randomWord = randomWords[Math.floor(Math.random(4))];

console.log(
  "Your " +
    randomBodyPart +
    " is like a " +
    randomAdjective +
    " " +
    randomWord +
    " !!!"
);
