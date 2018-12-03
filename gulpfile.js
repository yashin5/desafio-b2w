var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//task para o sass
gulp.task('sass', function () {
    return gulp.src('src/sass/*.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});

//task para o watch
gulp.task('watch', function () {
    gulp.watch('src/sass/*.sass', ['sass'], ["js/**/*.js"]);
});

//task default gulp
gulp.task('default', ['sass', 'watch']);
