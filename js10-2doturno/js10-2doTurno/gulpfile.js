var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('unir',function(){
  gulp.src('./js/*.js')
    .pipe(concat('final.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('default',function(){
  gulp.watch('./js/*.js',['unir']);
});
