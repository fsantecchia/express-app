var autoprefixer = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('./server')


var paths = {
    js: {
        src: ['src/js/**/*.js', 'src/js/*.js'],
        dest: 'target/js',
    },
    sass: {
        src: 'src/sass/**/*.scss',
        dest: 'target/css',
    },
    templates: {
        src: ['src/index.html', 'src/templates/**/*.html'],
        dest: ['target/', 'target/templates/']
    },
}

gulp.task('server', server());

gulp.task('js', function() {
  gulp.src(['src/js/app.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest(paths.js.dest));
});

gulp.task('views', function () {
    gulp.src(paths.templates.src[0])
        .pipe(gulp.dest(paths.templates.dest[0]));
    
    gulp.src(paths.templates.src[1])
        .pipe(gulp.dest(paths.templates.dest[1]));
});

gulp.task('sass', function() {
  gulp.src(paths.sass.src)
    .pipe(sass({onError: function(e) { console.log(e); } }))
    .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(paths.sass.dest))
});

gulp.task('watch', function() {
    gulp.watch(paths.js.src, ['js']);
    gulp.watch(paths.templates.src, ['views']);
    gulp.watch(paths.sass.src, ['sass']);
});

gulp.task('default', ['sass', 'js', 'views', 'server', 'watch']);