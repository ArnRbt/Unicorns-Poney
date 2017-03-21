const Deadpool = require('./deadpool');
const SpiderMan = require('./spider-man');

class Pony {

  constructor(name) {
    this.name = name;
    this.energy = 80;
    this.isUnicorn = false;
    setInterval(() => {
      this.loadEnergy()
    }, 5000);
    this.deadpool = new Deadpool();
    this.spiderMan = new SpiderMan();
  }

  loadEnergy() {

    do {
      this.energy += Math.floor((Math.random() * 10) + 1);
      console.log(this.name + " - energy level : " + this.energy);
    } while (this.energy < 100);

    this.tranform();
  }


  tranform() {

    if (this.energy > 100 && this.isUnicorn == false) {
      this.deadpool.transformToUnicorn()
        .then(() => {
          console.log(this.name + " just transform to unicorn.");
          this.isUnicorn = true;
          this.energy = 0;
        })
        .catch(() => {
          console.log(this.name + " has not enough energy to transform.");
        })
    }
    else if (this.energy > 100 && this.isUnicorn == true) {
      this.deadpool.refuelEnergy()
        .then(() => {
          console.log(this.name + " just refuel Deadpool in energy and transform back to pony.");
          this.deadpool.energy += 20;
          this.isUnicorn = false;
          this.energy = 0;
        })
        .catch(() => {
          console.log(this.name + " has not enough energy to refuel Deadpool.");
        })
    }
    else
      console.log(this.name + " has not enough energy to transform.")
  }

  transformBySpiderman() {
    if (this.isUnicorn == true) {
      this.spiderMan.ridingUnicorn()
        .then(() => {
          console.log(this.name + " has been transform back to pony by Spiderman.");
          this.isUnicorn = false;
          this.energy = 0;
        })
    } else {
      this.spiderMan.ridingPony()
        .then(() => {
          console.log(this.name + " has been drained of energy by Spiderman.");
          this.energy = 0;
        })
    }
  };
}

module.exports = Pony;











