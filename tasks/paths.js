const paths = {
    js: {
        src: ['src/js/**/*.js', 'src/js/*.js'],
        dest: 'target/js',
        angular2Polyfills: ['node_modules/angular2/bundles/angular2-polyfills.js']
    },
    sass: {
        src: 'src/sass/**/*.scss',
        dest: 'target/css',
    },
    templates: {
        src: ['src/index.html', 'src/templates/**/*.html'],
        dest: ['target/', 'target/templates/']
    },
};

module.exports = paths;