'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	jade = require('gulp-jade'),
	browserSync = require('browser-sync').create(),
	notify = require('gulp-notify'),
  autoprefixer = require('gulp-autoprefixer'),
	reload = browserSync.reload;

// sass

gulp.task('sass', function () {
  return gulp.src('./dev/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(notify('Done SCSS'))
    .pipe(gulp.dest('./bild/css'));   
});

gulp.task('css', function () {
  return gulp.src('bild/css/main.css')
    .pipe(autoprefixer({
      browsers: ['last 5 versions', 'ie 9', '> 1%'],
    }))
    .pipe(gulp.dest('bild/css/'));
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



gulp.task('default', ['jade', 'sass','css', 'watch']);