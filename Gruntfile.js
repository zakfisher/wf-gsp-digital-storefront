module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['views/*.ejs'],
                tasks: ['concat:build_html']
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
            },
            build_html: {
                src: [
                    'views/head.ejs',
                    'views/nav.ejs',
                    'views/header.ejs',
                    'views/deals.ejs',
                    'views/events.ejs',
                    'views/movies.ejs',
                    'views/services.ejs',
                    'views/stores.ejs',
                    'views/error.ejs',
                    'views/foot.ejs'
                ],
                dest: 'public/index.html'
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