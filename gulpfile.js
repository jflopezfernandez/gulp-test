
/** Modules and Plugins */
const gulp = require('gulp');
const concat  = require('gulp-concat');
const myth = require('gulp-myth');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');


/** Placeholder Tasks */
gulp.task('A', () => {
    return gulp.
});

gulp.task('B', () => {
    console.log('Second task');

    return 0;
});

gulp.task('C', () => {
    console.log('Third task');

    return 0;
});


/** Process Scripts */
gulp.task('scripts', () => {
    return gulp.src('app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

/** Watch Files for Changes */
gulp.task('watch', () => {
    gulp.watch('app/js/*.js', 'scripts');

    //gulp.watch('./app/css/app.css', gulp.parallel('scripts', 'A', 'B', 'C', (done) => { done(); }));
});

let err = undefined;

/** Default Task */
gulp.task('default', gulp.parallel('A', 'B', 'C', 'scripts'));
