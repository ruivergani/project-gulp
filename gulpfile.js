const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// Create functions
function compilaSass(){
    return gulp.src('scss/*.scss') // get all files from folder scss
    .pipe(sass({outputStyle : 'compressed'})) //minified css
    .pipe(autoprefixer({ // create autoprefixer
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
    })) 
    .pipe(gulp.dest('css/')) // destination folder
}
function watch(){
    gulp.watch('scss/*.scss', compilaSass); // gulp.series('name-of-task') or use parrallel
}

gulp.task('default', compilaSass); // executing the sass (name) give name to task
gulp.task('default', watch);

