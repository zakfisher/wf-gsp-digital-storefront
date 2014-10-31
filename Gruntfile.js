module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['sass/*.scss'],
                tasks: ['compass:compressed']
            },
            js: {
                files: ['public/js/*.js', '!public/js/concat.js', '!public/js/concat.min.js'],
                tasks: ['concat:build_js', 'uglify:build_js']
            }
        },
        compass: {
            compressed: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'public/css',
                    outputStyle: 'compressed'
                }
            }
        },
        concat: {
            build_js: {
                src: [
                    'public/js/jquery.js',
                    'public/js/underscore.min.js',
                    'public/js/backbone.min.js',
                    'public/js/moment.js',
                    'public/js/app.js'
                ],
                dest: 'public/js/concat.js'
            }
        },
        uglify: {
            build_js: {
                files: {
                    'public/js/concat.min.js' : 'public/js/concat.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['compass', 'concat', 'uglify']);
};