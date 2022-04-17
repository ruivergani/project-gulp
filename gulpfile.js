const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create(); // create local server


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
gulp.task('default', compilaSass); // task (need a name)  default for all execute

function browser(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
}
gulp.task('default', browser);

function watch(){
    gulp.watch('scss/*.scss', compilaSass); // gulp.series('name-of-task') or use parrallel
}
gulp.task('default', watch);