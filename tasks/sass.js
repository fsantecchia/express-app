const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

const paths = require('./paths');

const sassTask = function () {
  gulp.src(paths.sass.src)
    .pipe(sass({onError: function(e) { console.log(e); } }))
    .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(paths.sass.dest))
};

module.exports = sassTask;