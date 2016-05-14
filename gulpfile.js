var gulp = require('gulp'),
    plumber = require('gulp-plumber');

var babel = require("gulp-babel");

gulp.task('jsx-comp', function () {
  return gulp.src('app/source/**/*.jsx')
  	.pipe(plumber())
    .pipe(babel({
      plugins: ['transform-react-jsx']
    }))
    .pipe(gulp.dest('app/build/'));
});

var browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  return browserify('app/build/client/browser-raw.js')
    .bundle()
    .pipe(source('browser.js'))
    .pipe(gulp.dest('app/build/client/'));
});

gulp.task('watch', function () {
  gulp.watch(['app/build/client/browser-raw.js'], ['browserify']);
	gulp.watch(['app/source/client/*.jsx', 'app/source/server/*.jsx', 'app/source/components/*.jsx'],
             ['jsx-comp']);
  
});





