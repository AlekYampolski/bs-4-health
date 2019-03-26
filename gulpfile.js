'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

// Static server
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./index.html').on('change', browserSync.reload);
});


 
gulp.task('sass', function () {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});
 
gulp.task('default', ['serve']);