let instance = null;

class SpiderMan {

  constructor() {
    console.log('I\'m Spiderman !');

    if (!instance) {
      instance = this;
    }

    return instance;
  }

  ridingUnicorn() {
    return new Promise((resolve, reject) => {
      // Promise always return resolve

      const isResolve = true;

      if (isResolve) {
        resolve();
      } else {
        reject();
      }
    });
  }

  ridingPony() {
    return new Promise((resolve, reject) => {
      // Promise always return resolve

      const isResolve = true;

      if (isResolve) {
        resolve();
      } else {
        reject();
      }
    });
  }

}

module.exports = SpiderMan;

