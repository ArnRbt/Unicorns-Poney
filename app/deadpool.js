let instance = null ;

class Deadpool {

    constructor() {

        this.energy = 100;
        console.log("I'm Deadpool ");
        setInterval(this.decreaseEnergy() , 10000);


        if(!instance) {
            instance = this;
        }

        return instance ;
    }


    decreaseEnergy() {

        if (this.energy > 0)
            this.energy -= Math.floor((Math.random() * 10) + 1);

        console.log("Deadpool - niveau d'energie : " + this.energy);
    }

};


