var gulp 		= require('gulp'),
    sass 		= require('gulp-sass'),
    connect = require('gulp-connect'),
    del     = require('del');

gulp.task('connect', function() {
  connect.server({
    root: '.tmp',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(gulp.dest('.tmp/'))
    .pipe(connect.reload());
});

gulp.task('html:watch', function () {
  gulp.watch(['*.html'], ['html']);
});

gulp.task('style', function () {
  gulp.src('scss/**/*.scss')
    .pipe(sass({precision: 8}).on('error', sass.logError))
    .pipe(gulp.dest('.tmp/css/'))
    .pipe(connect.reload());
});

gulp.task('style:watch', function () {
  gulp.watch('scss/**/*.scss', ['style']);
});

gulp.task('clean', function() {
  return del([
    '.tmp'
  ]);
});

gulp.task('default', ['clean', 'html', 'style', 'connect', 'html:watch', 'style:watch']);
