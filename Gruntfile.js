
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: false,
          compress: false,
          yuicompress: false,
          style: 'expanded',
        },
        files: {
          'assets/styles/style.css' : 'assets/styles/style.scss'
        }
      },
    },
		cssmin : {
			target : {
				src : ["assets/styles/style.css"],
				dest : "assets/styles/style.min.css"
			}
		},
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'cssmin']
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['watch']);
}
