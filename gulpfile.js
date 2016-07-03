const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const concat = require('gulp-concat');

gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/*.js'),
        concat('site.min.js'),
        uglify(),
        gulp.dest('js')
    ],
    cb
  );
});
