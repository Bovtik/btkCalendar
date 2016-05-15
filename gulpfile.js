var gulp = require('gulp'),
    plumber = require('gulp-plumber');

var babel = require("gulp-babel");

gulp.task('jsx-comp', function () {
  return gulp.src('source/**/*.jsx')
  	.pipe(plumber())
    .pipe(babel({
      plugins: ['transform-react-jsx']
    }))
    .pipe(gulp.dest('build/'));
});

var browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  return browserify('build/client/browser-raw.js')
    .bundle()
    .pipe(source('browser.js'))
    .pipe(gulp.dest('build/client/'));
});

gulp.task('transport', function () {
  return gulp.src('source/dataflow/*.js')
    .pipe(gulp.dest('build/dataflow'));
});

gulp.task('watch', function () {
  gulp.watch(['build/client/browser-raw.js'], ['browserify']);
	gulp.watch(['source/client/*.jsx', 'source/server/*.jsx', 'source/components/*.jsx'],
             ['jsx-comp']);
  gulp.watch('source/dataflow/*.js', ['transport']);
});





