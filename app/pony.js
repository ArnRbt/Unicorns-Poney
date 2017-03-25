const Deadpool = require('./deadpool');
const SpiderMan = require('./spider-man');

class Pony {

  constructor(name) {
    this.name = name;
    this.energy = 0;
    this.isUnicorn = false;
    setInterval(() => {
      this.loadEnergy();
    }, 1000);

    this.deadpool = new Deadpool();
    this.deadpool.ponyFarm.push(this);
    this.spiderMan = new SpiderMan();
  }

  loadEnergy() {
    this.energy += this.random();
    console.log(this.name + ' - energy level : ' + this.energy);
    if (this.energy > 100) {
      this.transform();
    }
  }

  sendEnergyToDeadpool() {
    return new Promise((resolve, reject) => {
      if (this.isUnicorn === false) {
        reject();
      } else {
        resolve(this.energy);
        this.energy = 0;
        this.isUnicorn = false;
      }
    });
  }

  transform() {
    if (this.isUnicorn === false) {
      this.deadpool.transformToUnicorn()
        .then(() => {
          console.log(this.name + ' just transform to unicorn.');
          this.isUnicorn = true;
          this.energy = 0;
        })
        .catch(() => {
          console.log('Deadpool refuse to transform ' +
            this.name + ' to unicorn.');
          this.energy = 0;
        });
    }
  }

  isRidedBySpiderman() {
    return new Promise((resolve, reject) => {
      if (this.isUnicorn === true) {
        resolve();
        this.energy = 0;
        this.isUnicorn = false;
      } else {
        reject();
        this.energy = 0;
      }
    });
  }

  random() {
    const randomNumberReturn = Math.floor((Math.random() * 10) + 1);
    return randomNumberReturn;
  }

}

module.exports = Pony;

