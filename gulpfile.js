const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const concat = require('gulp-concat');

gulp.task('compress', function (cb) {
  pump([
        gulp.src([
          'js/lib/jquery.scrollex.min.js',
          'js/lib/jquery.scrolly.min.js',
          'js/lib/skel.min.js',
          'js/lib/util.min.js',
          'js/lib/*.js',
          'js/*.js'
        ]),
        concat('build.min.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});



gulp.task('default', ['compress', 'sass']);
