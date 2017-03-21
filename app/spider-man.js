let instance = null ;

class SpiderMan {

    constructor() {

        console.log("I'm Spiderman !");
        setInterval(() => {this.ridingStuff()} , 10000);


        if(!instance) {
            instance = this;
        }

        return instance ;
    }


    ridingStuff(){

        return new Promise(function (resolve, reject) {

            //Promise always return resolve

            let isResolve = true ;

            if (isResolve){
                resolve();
            }
            else
                reject();

        });

    }


};


module.exports = SpiderMan;



