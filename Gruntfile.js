const potInfo = {
    languageFolderPath: './languages/',
    filename          : 'yith-woocommerce-wishlist',
    headers           : {
        "Project-Id-Version": "YITH WooCommerce Wishlist Premium",
        "Content-Type": "text/plain; charset=UTF-8",
        "Language-Team": "YITH <plugins@yithemes.com>",
        "poedit": true,
        "X-Poedit-KeywordsList": "__;_e;_n:1,2;__ngettext:1,2;__ngettext_noop:1,2;_n_noop:1,2;_c,_nc:4c,1,2;_x:1,2c;_ex:1,2c;_nx:4c,1,2;_nx_noop:4c,1,2;esc_attr__;esc_attr_e;esc_html__;esc_html_e",
        "X-Poedit-Basepath": "..",
        "X-Poedit-SearchPath-0": ".",
        "X-Poedit-SearchPathExcluded-0": "plugin-fw",
        "X-Poedit-SearchPathExcluded-1": "plugin-upgrade",
        "X-Poedit-SearchPathExcluded-2": "node_modules"
    }
};

module.exports = function ( grunt ) {
    'use strict';

    grunt.initConfig( {
        dirs: {
            css     : 'assets/css',
            css_raw : 'assets/css/unminified',
            js      : 'assets/js',
            js_raw  : 'assets/js/unminified',
        },

        uglify: {
            options: {
                ie8   : true,
                parse : {
                    strict: false
                },
                output: {
                    comments: /@license|@preserve|^!/
                }
            },
            common : {
                files: [{
                    expand: true,
                    cwd   : '<%= dirs.js_raw %>/',
                    src   : [
                        '*.js',
                        '!*.min.js',
                        'admin/*.js',
                        '!admin/*.min.js'
                    ],
                    dest  : '<%= dirs.js %>/',
                    rename: (dst, src) => {
                        return dst + '/' + src.replace( '.js', '.min.js' );
                    }
                }]
            },
        },

        eslint: {
            options: {
                fix: grunt.option( 'fix' )
            },
            dist: {
                src: [
                    '<%= dirs.js_raw %>/*.js',
                    '<%= dirs.js_raw %>/admin/*.js',
                ]
            }
        },

        cssmin: {
            common : {
                files: [{
                    expand: true,
                    cwd   : '<%= dirs.css_raw %>/',
                    src   : [
                        '*.css',
                        'themes/*.css',
                    ],
                    dest  : '<%= dirs.css %>/'
                }]
            },
        },

        makepot: {
            options: {
                type         : 'wp-plugin',
                domainPath   : 'languages',
                potHeaders   : potInfo.headers,
                updatePoFiles: false,
                processPot   : function (pot) {
                    // Exclude plugin meta
                    var translation,
                        excluded_meta = [
                            'Plugin Name of the plugin/theme',
                            'Plugin URI of the plugin/theme',
                            'Author of the plugin/theme',
                            'Author URI of the plugin/theme'
                        ];

                    for (translation in pot.translations['']) {
                        if ('undefined' !== typeof pot.translations[''][translation].comments.extracted) {
                            if (excluded_meta.indexOf(pot.translations[''][translation].comments.extracted) >= 0) {
                                console.log('Excluded meta: ' + pot.translations[''][translation].comments.extracted);
                                delete pot.translations[''][translation];
                            }
                        }
                    }

                    return pot;
                }
            },
            dist   : {
                options: {
                    filename: potInfo.filename,
                    exclude : [
                        'bin/.*',
                        'plugin-fw/.*',
                        'plugin-upgrade/.*',
                        'node_modules/.*',
                        'tmp/.*',
                        'vendor/.*'
                    ]
                }
            }
        },

        update_po: {
            options: {
                template: potInfo.languageFolderPath + potInfo.filename
            },
            build  : {
                src: potInfo.languageFolderPath + '*.po'
            }
        }

    });

    grunt.registerMultiTask( 'update_po', 'This task update .po strings by .pot', function () {
        grunt.log.writeln( 'Updating .po files.' );

        var done     = this.async(),
            options  = this.options(),
            template = options.template;
        this.files.forEach( function ( file ) {
            if ( file.src.length ) {
                var counter = file.src.length;

                grunt.log.writeln( 'Processing ' + file.src.length + ' files.' );

                file.src.forEach( function ( fileSrc ) {
                    grunt.util.spawn( {
                                          cmd : 'msgmerge',
                                          args: ['-U', fileSrc, template]
                                      }, function ( error, result, code ) {
                        const output = fileSrc.replace( '.po', '.mo' );
                        grunt.log.writeln( 'Updating: ' + fileSrc + ' ...' );

                        if ( error ) {
                            grunt.verbose.error();
                        } else {
                            grunt.verbose.ok();
                        }

                        // Updating also the .mo files
                        grunt.util.spawn( {
                                              cmd : 'msgfmt',
                                              args: [fileSrc, '-o', output]
                                          }, function ( moError, moResult, moCode ) {
                            grunt.log.writeln( 'Updating MO for: ' + fileSrc + ' ...' );
                            counter--;
                            if ( moError || counter === 0 ) {
                                done( moError );
                            }
                        } );
                        if ( error ) {
                            done( error );
                        }
                    } );
                } );
            } else {
                grunt.log.writeln( 'No file to process.' );
            }
        } );
    } );

    // Load NPM tasks to be used here.
    grunt.loadNpmTasks( 'grunt-wp-i18n' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-eslint' );

    // Register tasks.
    grunt.registerTask( 'js:dev', [ 'eslint', 'uglify' ] );
    grunt.registerTask( 'js', 'uglify' );
    grunt.registerTask( 'css', ['cssmin'] );
};
