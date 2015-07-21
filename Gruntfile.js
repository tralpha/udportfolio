var ngrok = require('ngrok');

module.exports = function(grunt) {

	//Load grunt tasks
	require('load-grunt-tasks')(grunt);

	//Grunt Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), 
		pagespeed: {
			options: {
				nokey: true,
				locale: "en_GB",
				threshold: 40
			},
			local: {
				options: {
					strategy: "desktop"
				}
			},
			mobile: {
				options: {
					strategy:"mobile"
				}
			}
		},
		concat : {
			js: {
				dist: {
					src: ['js/*.js'],
					dest: 'js/build/production.js'
				}
			},
			css: {
				dist: {
					src: ['views/css/*.css', 'css/style.css'],
					dest: 'views/css/build/styles.css'
				}
			}
		},
		jshint: {
			build: {
				src: ['Gruntfile.js', 'views/js/*.js', 'js/*.js', 'js/build/production.js']
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: ['js/build/production.js'],
				dest: 'js/build/production.min.js'
			}
		},
		cssmin: {
			options: {},
			target: {
				files: [{
					cwd: 'views/css/build',
					src: ['*.css'],
					dest: 'views/css/build',
					ext: '.min.css'
				}]
			}
		},
		useref: {
			html: 'index.html',
			temp: ''
		}
	});

	//Register customer task for ngrok 
	grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() { 
		var done = this.async(); 
		var port = 8080;

		ngrok.connect(port, function(err, url){
			if (err !== null) {
				grunt.fail.fatal(err);
				return done();
			}
			grunt.config.set('pagespeed.options.url', url);
			grunt.task.run('pagespeed');
			done();
		}); 
	});

	grunt.registerTask('build', ['useref', 'concat', 'uglify', 'cssmin']);

	//Load the plugin that provides the jshint Task
	grunt.loadNpmTasks('grunt-contrib-jshint');

	//Load the plugin that provides the 'uglify' task
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.loadNpmTasks('grunt-concat-css');

	grunt.loadNpmTasks('grunt-useref');

	//Register default tasks
	grunt.registerTask('default', ['build']);
};