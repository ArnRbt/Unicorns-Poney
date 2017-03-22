// Gruntfile.js
module.exports = grunt => {
  // Require it at the top and pass in the grunt instance
  require('time-grunt')(grunt);

  grunt.initConfig();
};
// CallBack
require('time-grunt')(grunt, (stats, done) => {
  // Do whatever you want with the stats
  uploadReport(stats);

// Be sure to let grunt know when to exit
  done();
});
