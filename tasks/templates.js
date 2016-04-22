const gulp = require('gulp');
const paths = require('./paths');

const templatesTask = function () {
    gulp.src(paths.templates.src[0])
        .pipe(gulp.dest(paths.templates.dest[0]));
    
    gulp.src(paths.templates.src[1])
        .pipe(gulp.dest(paths.templates.dest[1]));
};

module.exports = templatesTask