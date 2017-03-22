let instance = null;

class Deadpool {

  constructor() {

    if (!instance) {
      instance = this;
    }

    this.energy = 100;
    console.log("I'm Deadpool ");
    setInterval(() => {
      this.decreaseEnergy()
    }, 2000);

    return instance;
  }


  refuelEnergy() {

    return new Promise(function (resolve, reject) {

      //Promise always return resolve

      let isResolve = true;

      if (isResolve) {
        resolve();
      }
      else
        reject();

    });

  }


  decreaseEnergy() {

    if (this.energy > 0)
      this.energy -= Math.floor((Math.random() * 10) + 1);

    console.log("Deadpool - energy level : " + this.energy);
  }

  transformToUnicorn() {

    return new Promise(function (resolve, reject) {

      //Promise always return resolve

      let isResolve = true;

      if (isResolve) {
        resolve();
      }
      else
        reject();

    });

  }

}
;


module.exports = Deadpool;



