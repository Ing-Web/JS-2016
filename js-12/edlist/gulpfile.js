const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('es6',()=>
  gulp.src('./assets/js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./js'))
);

gulp.task('default',()=>
  gulp.watch('./assets/js/*.js',['es6'])
);
