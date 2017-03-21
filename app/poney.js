const Deadpool = require('./deadpool');
const SpiderMan = require('./spider-man');

class Poney {

    constructor(name) {
        this.name = name;
        this.energy = 80;
        this.isUnicorn = false ;
        setInterval(() => {this.loadEnergy()} , 5000);
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
         else if (this.energy > 100 && this.isUnicorn == true){
             this.deadpool.refuelEnergy()
                 .then(() => {
                     console.log(this.name + " just refuel Deadpool in energy and transform back to poney.");
                     this.deadpool.energy += 20;
                     this.isUnicorn = false;
                     this.energy = 0 ;
                 })
                 .catch(() => {
                     console.log(this.name + " has not enough energy to refuel Deadpool.");
                 })
         }
         else
             console.log(this.name + " has not enough energy to transform.")
     }
};

module.exports = Poney;












