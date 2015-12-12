var gulp = require('gulp');
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

gulp.task('jshint', function() {
  gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('imagemin', function() {
  var imgSrc = 'src/assets/images/**/*';
  var imgDst = 'build/assets/images';
  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

gulp.task('scripts', function() {
  gulp.src('src/js/**/*.js')
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});

gulp.task('styles', function() {
  gulp.src(['src/assets/css/*.css'])
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCss())
    .pipe(gulp.dest('build/assets/css/'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', ['jshint', 'scripts']);
  gulp.watch('src/assets/css/*.css', ['styles']);
});

gulp.task('default', ['imagemin', 'scripts', 'styles']);