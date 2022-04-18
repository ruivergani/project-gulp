const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create(); // create local server
const concat = require('gulp-concat');


// Create functions
// Compile Sass Function
function compilaSass(){
    return gulp.src('scss/*.scss') // get all files from folder scss
    .pipe(sass({outputStyle : 'compressed'})) //minified css
    .pipe(autoprefixer({ // create autoprefixer
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
    })) 
    .pipe(gulp.dest('css/')) // destination folder
    .pipe(browserSync.stream()); // inject css into the page
}
gulp.task('default', compilaSass); // task (need a name)  default for all execute
// Concat Function

function gulpJS(){
    return gulp.src()
}
// Browser Function
function browser(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
}
gulp.task('browser-sync', browser);
// Watch Function
function watch(){
    gulp.watch('scss/*.scss', compilaSass); // gulp.series('name-of-task') or use parrallel
    gulp.watch('*.html').on('change', browserSync.reload); // refresh html when changes made
}
gulp.task('watch', watch);
gulp.task('default', gulp.parallel('watch', 'browser-sync'));