var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var batch = require('gulp-batch');
var watch = require('gulp-watch');

gulp.task('watch', function () {
    watch('./src/client/app/scss/**/*.scss', batch(function (events, done) {
        gulp.start('build', done);
    }));
});
 
gulp.task('build', function () {
	return gulp.src("./src/client/app/scss/**/*.scss")
        .pipe(compass({
          sass: './src/client/app/scss/',
          css: './src/client/public/css/'
        }))
        .pipe(gulp.dest("src/client/public/css"));
});

gulp.task('default', ['watch']);