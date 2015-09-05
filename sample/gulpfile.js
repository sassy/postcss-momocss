var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('postcss', function () {
    return gulp.src('src/*.css')
        .pipe( postcss([
            require('../index.js'),
        ]) )
        .pipe( gulp.dest('build/') );
});
