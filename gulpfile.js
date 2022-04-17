const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// Create functions
function compilaSass(){
    return gulp.src('scss/*.scss') // get all files from folder scss
    .pipe(sass({outputStyle : 'compressed'})) //minified css
    .pipe(autoprefixer({
        overrideBrowserlist: ['last 2 versions'], // code will work up to 2 last versions browsers
        cascade: false
    })) // generate all autoprefixer that exists
    .pipe(gulp.dest('css/')) //destination
}

gulp.task('default', compilaSass); // executing the sass (name) give name to task
