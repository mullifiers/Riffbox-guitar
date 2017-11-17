/*jslint node: true */
"use strict";

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {
                options: {
                    //install: true,
                    copy: false,
                    targetDir: 'libs',
                    cleanTargetDir: true
                }
            }
        },

        //Enable this for libsass compiler
        sass: {
          options: {
            sourceMap: true
          },
          dist: {
            files: {
              'styles/styles.css': 'styles/styles.scss',
            }
          }
        },

        copy: {
            main: {
                files: [{
                    //for jquery files
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/jquery/dist',
                    src: ['jquery.min.js','jquery.min.map'],
                    dest: 'dist/js'
                },{
                    //for bootstrap fonts
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/bootstrap/dist',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                },{
                  //for Fontawesome stylesheet files
                  expand: true,
                  dot: true,
                  cwd: 'bower_components/fontawesome/css',
                  src: ['font-awesome.min.css'],
                  dest: 'dist/css'
                },{
                  //for Bootstrap stylesheet files
                  expand: true,
                  dot: true,
                  cwd: 'bower_components/bootstrap/dist/css',
                  src: ['bootstrap.min.css'],
                  dest: 'dist/css'
                },{
                  //for Bootstrap theme stylesheet files
                  expand: true,
                  dot: true,
                  cwd: 'bower_components/bootstrap/dist/css',
                  src: ['bootstrap-theme.min.css'],
                  dest: 'dist/css'
                },
                {
                  //for dripicons fonts
                  expand: true,
                  dot: true,
                  cwd: 'bower_components/dripicons',
                  src: ['fonts/*.*'],
                  dest: 'dist'
                },{
                  //for weather fonts
                  expand: true,
                  dot: true,
                  cwd: 'bower_components/weather-icons',
                  src: ['font/*.*'],
                  dest: 'dist'
                },{
                  //for font-awesome
                  expand: true,
                  dot: true,
                  cwd: 'bower_components/font-awesome',
                  src: ['fonts/*.*'],
                  dest: 'dist'
                },
                {
                  //for theme music fonts
                  expand: true,
                  dot: true,
                  cwd: 'fonts',
                  src: ['*.*'],
                  dest: 'dist/fonts'
                },
                {
                  //for Images
                  expand: true,
                  dot: true,
                  cwd: 'images',
                  src: ['*.*','*/*'],
                  dest: 'dist/images'
                },
                {
                  //for services data
                  expand: true,
                  dot: true,
                  cwd: 'app/data',
                  src: ['*.*'],
                  dest: 'dist/data'
                },
                {
                  //for Underscore source map
                  expand: true,
                  dot: true,
                  cwd: 'bower_components/underscore',
                  src: ['*.map'],
                  dest: 'dist/js'
                },
                {
                  //for Angular source map
                  expand: true,
                  dot: true,
                  cwd: 'bower_components/angular',
                  src: ['*.map'],
                  dest: 'dist/js'
                }]
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/js/app.js': [ 'dist/js/app.js' ]
                },
                options: {
                    mangle: false,
                    preserveComments: 'some'
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'dist/css/main.css': [
                        'bower_components/dripicons/css/dripicons.css',
                        'bower_components/weather-icons/css/weather-icons.min.css',
                        'styles/fonts/music-icons/music-icons.css',
                        'styles/styles.css'
                    ]
                }
            },
            add_banner: {
                options: {
                    banner: '/* My minified admin css file */'
                },
                files: {
                    'dist/css/main.css': ['dist/css/main.css']
                }
            }
        },

        html2js: {
            dist: {
                src: [ 'app/views/*.html','app/views/charts/*.html','app/views/forms/*.html','app/views/mail/*.html','app/views/maps/*.html','app/views/pages/*.html','app/views/tables/*.html','app/views/tables/*.html','app/views/tasks/*.html','app/views/ui_elements/*.html' ],
                dest: 'tmp/views.js'
            }
        },

        clean: {
            temp: {
                src: [ 'tmp' ]
            }
        },

        concat: {
            options: {
                stripBanners: true,
                sourceMap: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            dist: {
                src: ['bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'scripts/gmap.js',
                    'bower_components/slimScroll/jquery.slimscroll.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-animate/angular-animate.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-sanitize/angular-sanitize.min.js',
                    'bower_components/angular-wizard/dist/angular-wizard.min.js',
                    'bower_components/angular-ui-tree/dist/angular-ui-tree.js',
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                    'bower_components/angular-media-player/dist/angular-media-player.min.js',
                    'bower_components/raphael/raphael-min.js',
                    'bower_components/jqvmap/dist/jquery.vmap.min.js',
                    'bower_components/angular-scroll/angular-scroll.min.js',
                    'bower_components/html5shiv/dist/html5shiv.min.js',
                    'scripts/angular-dragdrop.js',
                    'scripts/extras.js',
                    'bower_components/underscore/underscore-min.js',
                    'app/*.js' ],
                dest: 'dist/js/app.js'
            }
        },

        jshint: {
            all: [ 'Gruntfile.js', 'app/*.js', 'app/**/*.js' ]
        },

        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8888
                }
            }
        },

        watch: {
            dev: {
                files: [ 'Gruntfile.js', 'app/*.js', '*.html','styles/*.scss' ],
                tasks: [ 'jshint','html2js:dist','sass','copy:main', 'concat:dist', 'clean:temp','cssmin' ],
                options: {
                    atBegin: true
                }
            },
            min: {
                files: [ 'Gruntfile.js','app/*.js', '*.html','styles/*.scss' ],
                tasks: [ 'jshint','html2js:dist','sass', 'copy:main', 'concat:dist', 'clean:temp', 'uglify:dist','cssmin' ],
                options: {
                    atBegin: true
                }
            }
        },

        compress: {
            dist: {
                options: {
                    archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
                },
                files: [{
                    src: [ 'index.html' ],
                    dest: '/'
                }, {
                    src: [ 'app/**' ],
                    dest: 'app/'
                }, {
                    src: [ 'app/**' ],
                    dest: 'app/'
                }, {
                    src: [ 'app/**' ],
                    dest: 'app/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-task');

    grunt.registerTask('dev', [ 'bower', 'connect:server', 'watch:dev' ]);
    grunt.registerTask('test', [ 'bower', 'jshint' ]);
    grunt.registerTask('minified', [ 'bower', 'connect:server', 'watch:min' ]);
};
