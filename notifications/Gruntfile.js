module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-include-js');
  grunt.initConfig({
  
  include_js: {
              build: {
                options: { // optional 
                  prefix: '', // prefix for path to js-files. May be you want prepend ../ or something else 
                 // required: ['array of js-file for include to all templates at this target'],
                  force: false, // true - include file if not exists 
                  livereload: true // include //localhost:35729/livereload.js for livereload (https://github.com/gruntjs/grunt-contrib-watch#live-reloading) 
                },
                files: {
                  'index.html': ['js/**/*.js']
                }
              },
            }
});


  

};