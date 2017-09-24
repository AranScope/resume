var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function() {
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .on('error', gutil.log)
    .pipe(gulp.dest('app/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('pug', function() {
  return gulp.src('app/pug/*.pug')
    .pipe(pug())
    .on('error', gutil.log)
    .pipe(gulp.dest('app'))
    .pipe(reload({stream:true}));
});

gulp.task('serve', ['sass'], function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch('app/pug/*.pug', ['pug']);
});

gulp.task('default', ['sass', 'pug', 'serve']);
