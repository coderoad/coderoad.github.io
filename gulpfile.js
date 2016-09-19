const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const purify = require('gulp-purifycss');
const cleanCSS = require('gulp-clean-css');

gulp.task('compress', function (cb) {
  pump([
        gulp.src([
          'js/lib/jquery.scrollex.min.js',
          'js/lib/jquery.scrolly.min.js',
          // 'js/lib/animatedModal.min.js',
          'js/lib/png2gif.min.js',
          'js/lib/jquery.sticky.js',
          'js/*.js',
          'ga/min.js'
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
    // .pipe(purify(['./js/**/*.js', '*.html', './_includes/**/*.html', './_layouts/**/*.html']))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch(['js'], ['compress']);
  gulp.watch(['_sass'], ['sass']);
});

gulp.task('default', ['compress', 'sass']);
