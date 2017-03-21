// Gruntfile.js
module.exports = grunt => {
    // require it at the top and pass in the grunt instance
    require('time-grunt')(grunt);

    grunt.initConfig();
}


//callBack
require('time-grunt')(grunt, (stats, done) => {
    // do whatever you want with the stats
    uploadReport(stats);

// be sure to let grunt know when to exit
done();
});



