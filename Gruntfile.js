module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['./src/module1/*.js']
        },
        concat: {
            dist: {
                src: ['./src/module1/*.js'],
                dest: './public/js/module1.js',
            }
        },
        uglify: {
            compressjs: {
                files: {
                    './public/output/js/module1.min.js': ['./public/js/module1.js']
                }
            }
        },
        stylus: {
            build: {
                options: {
                    linenos: false,
                    compress: true
                },
                files: [{
                    './public/output/css/module1.css': ['./src/module1/*.styl']
                }]
            }
        },
        watch: {
            scripts: {
                files: ['./src/module1/*.styl'],
                tasks: ['stylus']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // grunt.registerTask('watchit', ['jshint', 'concat', 'uglify', 'stylus', 'watch']);
    grunt.registerTask('watchit', ['jshint', 'concat', 'stylus', 'watch']);

    grunt.registerTask('default');

};