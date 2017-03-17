var spiderman = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am spider-man");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();


        regeneration (){

        }




