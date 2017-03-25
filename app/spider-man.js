const Deadpool = require('./deadpool');

let instance = null;

class SpiderMan {

  constructor() {
    if (!instance) {
      instance = this;
      console.log('I\'m Spiderman !');
      this.deadpool = new Deadpool();
      setInterval(() => {
        this.ridingThings();
      }, 1000);
    }

    return instance;
  }

  ridingThings() {
    if (this.random() > 8) {
      if (this.deadpool.ponyFarm.length > 0) {
        const indexUnicorns = Math.floor(Math.random() * 100) %
          this.deadpool.ponyFarm.length;
        this.deadpool.ponyFarm[indexUnicorns].isRidedBySpiderman()
          .then(() => console.log('Spiderman just ride ' +
            this.deadpool.ponyFarm[indexUnicorns].name +
            'and transform her back to pony'))
          .catch(() => console.log('Spiderman just ride' +
            this.deadpool.ponyFarm[indexUnicorns].name +
          'and drained his energy'));
      }
    }
  }

  random() {
    const randomNumberReturn = Math.floor((Math.random() * 10) + 1);
    return randomNumberReturn;
  }
}

module.exports = SpiderMan;

