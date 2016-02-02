var gulp     = require('gulp'),
	sass     = require('gulp-sass'),
	nano     = require('gulp-cssnano'),
	twig     = require('gulp-twig'),
	bower    = require('gulp-bower'),
	prefix   = require('gulp-autoprefixer'),
	jshint   = require('gulp-jshint'),
	uglify   = require('gulp-uglify'),
	concat   = require('gulp-concat'),
	notify   = require('gulp-notify'),
	rename   = require('gulp-rename'),
	connect  = require('gulp-connect'),
	beautify = require('gulp-html-beautify'),
	del      = require('del');

gulp.task('styles', function(){
	gulp.src('./src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix({browsers:'> 5%'}))
		.pipe(gulp.dest('./dist/css/'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(nano({ discardComments: {removeAll: true} }))
		.pipe(gulp.dest('./dist/css/'))
		.pipe(notify('Styles build completed.'))
		.pipe(connect.reload())
});

gulp.task('scripts', function(){
	gulp.src('./src/js/**/*.js') //ignore vendor/
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('script.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(rename({ 
			suffix : '.min' 
		}))
		.pipe(uglify())
		.pipe(gulp.dest('js'))
		.pipe(notify({ message : 'Scripts build completed' }))
		.pipe(connect.reload())
});

gulp.task('render', function(){
	gulp.src(['./src/views/**/*.twig', '!./src/views/includes/**/*.twig'])
		.pipe(twig({
			errorLogToConsole: true
		}))
		.pipe(beautify())
		.pipe(gulp.dest('./dist'))
		.pipe(notify({ message : 'Templates render completed' }))
		.pipe(connect.reload())
});

gulp.task('serve', function(){
	connect.server({
		root: 'dist',
		livereload: true
	})
});

gulp.task('clean', function(){
	return del([
		'./dist/**/*'
	])
});

gulp.task('watch', function(){
	gulp.watch('./src/sass/**/*.scss', ['styles']);
	gulp.watch('./src/js/**/*.js', ['scripts']);
	gulp.watch('./src/views/**/*.twig', ['render']);
});

gulp.task('build', ['styles', 'scripts', 'render']);

gulp.task('rebuild', ['clean', 'build']);

gulp.task('default', ['build', 'serve', 'watch']);
