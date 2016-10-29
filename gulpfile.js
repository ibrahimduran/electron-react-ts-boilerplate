const gulp = require('gulp');
const ts = require('gulp-typescript');
const project = ts.createProject('tsconfig.json');
const pug = require('gulp-pug');
const sass = require('gulp-sass');

gulp.task('html', () => {
  return gulp.src('index.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'));
});
gulp.task('html:watch', ['html'], () => {
  gulp.watch(['index.pug'], ['html']);
});

gulp.task('js', () => {
  return project.src()
    .pipe(project())
    .js.pipe(gulp.dest('dist'));
});
gulp.task('js:watch', ['js'], () => {
  gulp.watch(['main.ts', 'app/**/*.ts', 'app/**/*.tsx'], ['js']);
});

gulp.task('css', () => {
  return gulp.src('app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/app'));
})
gulp.task('css:watch', ['css'], () => {
  gulp.watch('app/**/*.scss', ['css']);
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*.*')
    .pipe(gulp.dest('dist/app/images'));
});
gulp.task('images:watch', ['images'], () => {
  gulp.watch('app/images/**/*.*', ['css']);
});

gulp.task('default', ['html', 'js', 'css', 'images']);
gulp.task('watch', ['html:watch', 'js:watch', 'css:watch', 'images:watch']);
