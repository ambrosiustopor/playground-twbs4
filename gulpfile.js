const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
 
gulp.task('sass', function() {
    sass('src/sass/index.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('htdocs/styles'))
	}
);

gulp.task('default', [ 'sass' ]);
