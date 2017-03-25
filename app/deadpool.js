let instance = null;

class Deadpool {

  constructor() {
    if (!instance) {
      instance = this;

      this.energy = 100;
      this.ponyFarm = [];
      console.log('I\'m Deadpool !');
      setInterval(() => {
        this.decreaseEnergy();
      }, 1000);
    }

    return instance;
  }

  refuelEnergy() {
    const listUnicorns = this.ponyFarm.filter(p => p.isUnicorn);

    if (listUnicorns.length > 0) {
      const indexUnicorns = Math.floor(Math.random() * 100) %
        listUnicorns.length;
      listUnicorns[indexUnicorns].sendEnergyToDeadpool()
        .then(en => {
          this.energy += en;
          console.log('Deadpool just refuel in energy with unicorn ' +
            listUnicorns[indexUnicorns].name + ' -- + ' + en);
        })
        .catch(() => console.log('Deadpool can\'t refuse in energy ' +
        'with a pony'));
    }
  }

  decreaseEnergy() {
    console.log('Deadpool - energy level : ' + this.energy);
    if (this.energy > 0) {
      this.energy -= this.random();
    } else if (this.energy < 50) {
      this.refuelEnergy(0);
    }
  }

  transformToUnicorn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }

  random() {
    const randomNumberReturn = Math.floor((Math.random() * 10) + 1);
    return randomNumberReturn;
  }

}

module.exports = Deadpool;

