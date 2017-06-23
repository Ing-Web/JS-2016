const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('es6',() => {
  return gulp.src('./es6/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./es5'));
});

gulp.task('default', () => {
  gulp.watch('./es6/*.js',['es6']);
});
