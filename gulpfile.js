var gulp = require('gulp');
var cram = require('gulp-cram');
var util = require('gulp-util');

gulp.task('foo', function() {
  util.log("FOO Task");
});

gulp.task('bar', function() {
  util.log("BAR Task");
});

gulp.task('default', ['foo', 'bar'], function() {
  util.log("DEFAULT Task");
});

