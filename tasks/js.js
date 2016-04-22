const babelify = require('babelify');
const browserify = require('gulp-browserify');
const concat = require('gulp-concat');
const gulp = require('gulp');

const paths = require('./paths');

const jsTask = function () {
 gulp.src(['src/js/*.js'])
  .pipe(browserify({
    debug: true,
    insertGlobals: true,
    transform: ['babelify']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest(paths.js.dest));
  
  gulp.src(paths.js.angular2Polyfills)
  .pipe(gulp.dest(paths.js.dest));
};

module.exports = jsTask;