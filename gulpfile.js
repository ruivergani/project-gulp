const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Create functions
function compilaSass(){
    return gulp.src('scss/*.scss') // get all files from folder scss
    .pipe(sass({outputStyle : 'compressed'})) //minified css
    .pipe(gulp.dest('css/')) //destination
}

gulp.task('default', compilaSass); // executing the sass (name) give name to task
