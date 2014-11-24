var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  concat = require('gulp-concat'),
  del = require('del');

var clientDir = 'public/';
var jsDir = clientDir + 'js/**/';

gulp.task('lint', function () {
  console.log("pretend I'm linting here");
});

gulp.task('clean', function () {
  del(['build/**/*.*'], function (err) {
    if (err) {
      console.log("Error while cleaning: " + err);
    }
  });
});

gulp.task('build', ['clean','build-js','build-html']);

gulp.task('build-js', function () {
  gulp.src([jsDir + 'module.js',jsDir + '*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('build-html', function () {
  gulp.src([clientDir + '**/*.html'])
    .pipe(gulp.dest('build'));
});

gulp.task('watch', ['watch-client','nodemon']);

gulp.task('watch-client', function () {
  gulp.watch(clientDir + '**/*.*', ['build'])
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type);
    });
});

gulp.task('nodemon', function () {
  nodemon({ script: 'server.js', watch: ['server.js','server']})
    .on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!')
    });
});

gulp.task('dev', ['build','watch']);

gulp.task('default', ['dev']);