var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

/* Task to compile less */

var minify_main_css = function () {
    return gulp.src('assets/css/unminified/style.css')
        .pipe(cleanCSS({debug: true}, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}kb => ${details.stats.minifiedSize} kb`);
            }))
        .pipe(gulp.dest('./assets/css/'));
};

var minify_admin_css = function () {
    return gulp.src('assets/css/unminified/admin.css')
        .pipe(cleanCSS({debug: true}, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}kb => ${details.stats.minifiedSize} kb`);
            }))
        .pipe(gulp.dest('./assets/css/'));
};

var minify_main_js = function () {
    return gulp.src('./assets/js/unminified/jquery.yith-wcwl.js')
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js/'))
};

var minify_admin_js = function () {
    return gulp.src('./assets/js/unminified/admin/yith-wcwl.js')
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js/admin/'))
};

exports.minify_js = gulp.series(minify_main_js, minify_admin_js);
exports.minify = gulp.series(minify_main_css, minify_admin_css);
exports.default = gulp.series(minify_main_css, minify_admin_css, minify_main_js, minify_admin_js);