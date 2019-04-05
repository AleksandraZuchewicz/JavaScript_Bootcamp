/*objects, inslide an objects are properties
let car = {
  wheels: 4,
  color: "red",
  engine: 1,
  gallons: 12
};

//dot notation
let car = {};
object.property = value;
car.wheels = 4;
car.color = "red";
car.engine = 1;
car.gallons = 12;

//bracket notation
let car = {};
object["property"] = value;
car["wheels"] = 4;
car["color"] = "red";
car["engine"] = 1;
car["gallons"] = 12;*/

//challange - build a person with object literal notation
//use three property values consisting a string, number and boolean

let person = {
  hairColor: "red",
  age: 25,
  IsThePersonIsWoman: true
};
console.log(person);

let pizza = {};
pizza.crust = "wheat";
pizza.sause = "tomatoe souse";
pizza.cheeze = "mozzarella";
pizza.topings = "olives, pepperoni";

console.log(pizza);

let car2 = {
  make: "Honda",
  color: "red",
  gallons: 12,
  "orgin year": 1984,
  function: "drive"
};
console.log(car2);

car["make"];
car["origin year"];
car["function"];
