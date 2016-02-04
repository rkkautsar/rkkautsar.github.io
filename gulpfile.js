var gulp       = require('gulp'),
	taskLoader = require('gulp-simple-task-loader'),
	plugins    = require('gulp-load-plugins')();

taskLoader({
	taskDirectory: 'gulp_tasks',
	plugins: plugins
});

gulp.task('watch', function(){
	gulp.watch('./src/sass/**/*.scss', ['styles']);
	gulp.watch('./src/js/**/*.js', ['scripts']);
	gulp.watch('./src/views/**/*.twig', ['render']);
});

gulp.task('build', ['styles', 'scripts', 'images', 'render']);

gulp.task('rebuild', ['clean', 'build']);

gulp.task('default', ['build', 'serve', 'watch']);
