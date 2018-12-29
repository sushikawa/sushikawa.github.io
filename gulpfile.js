const gulp = require('gulp');
const sass = require('gulp-sass');
const prefixCss = require('gulp-autoprefixer');

// // css autoprefixer
// gulp.task('css_autoprefix', () =>
//   gulp
//     .src('dist/css/concat/concat.css')
//     .pipe(
//       autoprefixer({
//         browsers: ['last 10 versions'],
//         cascade: false
//       })
//     )
//     .pipe(gulp.dest('dist/css/prefixed'))
// );

// all in one css
gulp.task('styles', function() {
  gulp
    .src('src/styles/scss/index.scss')
    .pipe(sass())
    .pipe(
      prefixCss({
        // browsers: ['last 10 versions'],
        browsers: ['> 0%'],
        cascade: false
      })
    )
    .pipe(gulp.dest('src/styles/css/index.css'));
});

gulp.task('run', ['styles']);

gulp.task('watch', function() {
  gulp.watch('src/styles/scss/index.scss', ['styles']);
});

gulp.task('default', ['run', 'watch']);
