'use strict';
module.exports = function(grunt) {

	//Grunt initial configuration
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	less: {
			dev: {
			  options: {
			    paths: ["<%= sourceFiles.css %>"]
			  },
			  files: {
			    "<%= sourceFiles.css %>": "<%= sourceFiles.less %>"
			  }
			}
		},
  	watch: {
  		dev: {
	      files: ['less/style.less', 'less/*.less', 'less/**/*.less'],
	      tasks: ['less:dev']  			
  		}
    },
		sourceFiles: {
			less: "less/style.less",
			css: "css/style.css"
		}
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

	// the default task can be run just by typing "grunt" on the command line
	grunt.registerTask('default', ['watch:dev']);
};