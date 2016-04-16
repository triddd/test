'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	jade = require('gulp-jade'),
	browserSync = require('browser-sync').create(),
	notify = require('gulp-notify'),
	reload = browserSync.reload;

// sass

gulp.task('sass', function () {
  return gulp.src('./dev/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(notify('Done SCSS'))
    .pipe(gulp.dest('./bild/css'));   
});

// jade 

gulp.task('jade', function() {
    return gulp.src('./dev/**/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(notify('Done JADE')) 
        .pipe(gulp.dest('./bild'));
  
});

// watch

gulp.task('watch', function () {
  gulp.watch('dev/scss/**/*.scss', ['sass']);
  gulp.watch('dev/**/*.jade', ['jade']);
  
});



gulp.task('default', ['jade', 'sass', 'watch']);