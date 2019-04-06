//Array.pop()- delate last element from array
//Array.push() - add value to the end of array, count number of elements in array
//Array.shift() removes value in the front of array and returns it
//Array.Unshift() Add values in the front of array

let testScores = [72, 84, 68, 92];
let lastTestScores = testScores.pop();
console.log(testScores);
console.log(lastTestScores);

let testScores1 = [72, 84, 68, 92];
testScores1.push(6);
console.log(testScores1);

let testScores2 = [72, 84, 68, 92];
testScores2.shift();
console.log(testScores2);

let testScores3 = [72, 84, 68, 92];
testScores3.unshift(30, 20);
console.log(testScores3);

//concat() - additional idem in the end of array1, can marge many arrays
let bigDog = ["golden retiver", "german dog"];
let littleDog = ["terrier", "corgie", "weiner dog", "shitzu"];
let allDogs = bigDog.concat(littleDog);
//console.log(allDogs);

let cat = ["Russian Cat", "White Cat", "Black Cat"];
let addedCatToAllDogs = allDogs.concat(cat);
console.log(addedCatToAllDogs);

let add3arraysInOneTime = bigDog.concat(littleDog, cat);
console.log(add3arraysInOneTime);

//reverse() - reverses the element in the array

let smallestFirst = allDogs.reverse();
console.log(smallestFirst);

//sort() - sorts all the item in the array can be alphabetic or numeric, ascendigs

let alphaOrderForDogs = allDogs.sort();

//slice() -retunr the section of an array
let spliceAllDog = allDogs.slice(2, 4);
console.log(spliceAllDog);

let minusSpliceAllDog = allDogs.slice(-4, -2);
console.log(minusSpliceAllDog);
