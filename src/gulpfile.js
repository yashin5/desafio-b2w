var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//task para o sass
gulp.task('sass', function () {
    return gulp.src('sass/*.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

//task para o watch
gulp.task('watch', function () {
    gulp.watch('sass/*.sass', ['sass'], ["js/**/*.js"]);
});

//task default gulp
gulp.task('default', ['sass', 'watch']);
