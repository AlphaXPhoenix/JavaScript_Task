/*
Coding Challenge #1
Your tasks:
1. Useaconstructorfunctiontoimplementa'Car'.Acarhasa'make'anda 'speed' property. The 'speed' property is the current speed of the car in km/h
2. Implementan'accelerate'methodthatwillincreasethecar'sspeedby10, and log the new speed to the console
3. Implementa'brake'methodthatwilldecreasethecar'sspeedby5,andlog the new speed to the console
4. Create2'Car'objectsandexperimentwithcalling'accelerate'and 'brake' multiple times on each of them
Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
*/

function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  