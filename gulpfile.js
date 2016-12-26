const gulp = require('gulp');
const ts = require('gulp-typescript');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

const project = ts.createProject('tsconfig.json');

/* ============== HTML =============
==================================== */
gulp.task('build:html', () => {
  return gulp.src('index.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'));
});
gulp.task('watch:html', () => {
  gulp.watch(['index.pug'], ['build:html']);
});

/* ============ SCRIPTS ============
==================================== */
gulp.task('build:js', () => {
  return project.src()
    .pipe(project())
    .js
      .pipe(uglify())
      .pipe(gulp.dest('dist'));
});
gulp.task('watch:js', () => {
  gulp.watch(['main.ts', 'app/**/*.ts', 'app/**/*.tsx'], ['build:js']);
});

/* ============= STYLES ============
==================================== */
gulp.task('build:css', () => {
  return gulp.src('app/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/styles'));
})
gulp.task('watch:css', () => {
  gulp.watch('app/**/*.scss', ['build:css']);
});

/* =========== RESOURCES ===========
==================================== */
gulp.task('build:resources', () => {
  return gulp.src('app/resources/**/*.*')
    .pipe(gulp.dest('dist/resources'));
});
gulp.task('watch:resources', () => {
  gulp.watch('app/resources/**/*.*', ['build:resources']);
});

/* =========== DEFAULTS ===========
==================================== */
gulp.task('build', ['build:html', 'build:js', 'build:css', 'build:resources']);
gulp.task('watch', ['watch:html', 'watch:js', 'watch:css', 'watch:images']);

gulp.task('default', ['build']);
