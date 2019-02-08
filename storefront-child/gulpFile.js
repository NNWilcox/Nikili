var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');

gulp.task( 'sass', async function(){
    gulp.src('./assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));

});

gulp.task('default', gulp.parallel('sass', async function(){
    gulp.watch('./assets/sass/**/*.scss', gulp.series('sass'));
}));

