const gulp = require('gulp');

const startServer = require('./server');
const paths = require('./tasks/paths');

//Tasks
const apiTask = require('./tasks/api')
const jsTask = require('./tasks/js')
const templatesTask = require('./tasks/templates')
const sassTask = require('./tasks/sass')

gulp.task('server', startServer);
//gulp.task('api', apiTask);
gulp.task('js', jsTask);
gulp.task('sass', sassTask);
gulp.task('templates', templatesTask);

gulp.task('watch', function() {
    gulp.watch(paths.js.src, ['js']);
    gulp.watch(paths.templates.src, ['templates']);
    gulp.watch(paths.sass.src, ['sass']);
});

gulp.task('default', [ 'sass', 'js', 'templates', 'server', 'watch']);