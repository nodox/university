const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');
const runSequence = require('run-sequence').use(gulp);

const srcFiles = ['src/*.js', 'test/*.spec.js'];

gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(srcFiles)
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint({ useEslintrc: true }))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});


gulp.task('mocha', () => {
    return gulp
        .src('test/server/*.js', { read: false })
        .pipe(mocha({ reporter:'spec'}))

        .on('error', gutil.log);
});


gulp.task('default', () => {
      gulp.watch(['src/**', 'test/**'],  ['lint']);
});