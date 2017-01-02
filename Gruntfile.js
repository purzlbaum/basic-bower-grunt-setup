module.exports = function(grunt) {

	// 1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'assets/bower/bootstrap-sass/assets/javascripts/bootstrap.js',
					'assets/bower/select2/dist/js/select2.js',
					'assets/bower/owl.carousel/dist/owl.carousel.min.js',
					'assets/js/plugins/*',
					'assets/js/themefunctions.js'
				],
				dest: 'assets/dist/theme.js'
			}
		},

		uglify: {
			build: {
				src: 'assets/dist/theme.js',
				dest: 'assets/dist/theme.min.js'
			}
		},

		watch: {
			options: {
				livereload: true,
			},
			scripts: {
				files: ['assets/js/**/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false
				}
			},
			css: {
				files: [
					'assets/bower/**/*.scss',
					'assets/bower/**/*.sass',
					'assets/sass/**/*.scss',
					'assets/sass/**/*.sass'
				],
				tasks: ['sass'],
				options: {
					spawn: false
				}
			}
		},
		sass: {
			dist: {
				options: {
					sourceMap: true,
					outputStyle: 'compressed'
				},
				files: {
					'assets/dist/default.min.css': 'assets/sass/default.sass'
				}
			}
		},
	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('build', ['concat', 'uglify', 'sass']);
	grunt.registerTask('default', ['build', 'watch']);

};