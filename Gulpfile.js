var gulp 		= require('gulp'),
    sass 		= require('gulp-sass'),
    connect = require('gulp-connect'),
    del     = require('del');

gulp.task('connect', ['clean'], function() {
  return connect.server({
    root: '.tmp',
    livereload: true
  });
});

gulp.task('html', ['clean'], function () {
  return gulp.src('index.html')
    .pipe(gulp.dest('.tmp/'))
    .pipe(connect.reload());
});

gulp.task('html:watch', ['clean', 'html'], function () {
  return gulp.watch(['index.html'], ['html']);
});

gulp.task('style', ['clean'], function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass({precision: 8}).on('error', sass.logError))
    .pipe(gulp.dest('.tmp/css/'))
    .pipe(connect.reload());
});

gulp.task('style:watch', ['clean', 'style'], function () {
  return gulp.watch('scss/**/*.scss', ['style']);
});

gulp.task('clean', function() {
  return del([
    '.tmp'
  ]);
});

gulp.task('build', ['html', 'style', 'html:watch', 'style:watch', 'connect']);

gulp.task('default', ['build']);
