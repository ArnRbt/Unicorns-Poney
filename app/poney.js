class Poney {

    constructor(name) {
        this.name = name;
        this.energy = 0;
        this.deadpool = new Deadpool();
        setInterval(this.loadEnergy() , 10000);
    }

     loadEnergy() {

        if (this.energy < 100)
            this.energy += Math.floor((Math.random() * 10) + 1);

        console.log(this.name + " - niveau d'energie : " + this.energy);
    }

}

/*
    tranform() {
        deadpool.tranformToUnicorn()
            .then(() -> this.isUnicorn = true)
            .catch(() -> clog )
            .finally(() => energy = 0)
    }
    */







