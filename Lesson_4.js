function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

let car1 = new Car("Honda", "Civic", 2006);
let car2 = new Car("Jeep", "Cherokee", 2015);
car2.fourWheelDrive = true;

console.log(car2);
