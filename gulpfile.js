const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('compress', function (cb) {
  pump([
        gulp.src([
          'js/*.js'
        ]),
        concat('build.min.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('sass', function () {
  return gulp.src('./_sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['compress', 'sass']);
