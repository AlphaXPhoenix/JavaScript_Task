/*
Coding Challenge #2
Your tasks:
1. Re-createChallenge#1,butthistimeusinganES6class(callit'CarCl')
2. Addagettercalled'speedUS'whichreturnsthecurrentspeedinmi/h(divide
by 1.6)
3. Addasettercalled'speedUS'whichsetsthecurrentspeedinmi/h(but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Createanewcarandexperimentwiththe'accelerate'and'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
*/

class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed; // in km/h
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    get speedUS() {
      return this.speed / 1.6;
    }
  
    set speedUS(speedInMph) {
      this.speed = speedInMph * 1.6;
    }
  }
  const ford = new CarCl('Ford', 120);
  ford.accelerate();
  ford.brake();    
  console.log(`${ford.make} is going at ${ford.speedUS.toFixed(2)} mi/h`);
  ford.speedUS = 50;
  console.log(`${ford.make} is now going at ${ford.speed} km/h (${ford.speedUS.toFixed(2)} mi/h)`);
    