module.exports = function(gulp, config, plugins){
	return function() {
		gulp.src('./src/sass/**/*.scss')
			.pipe(plugins.sass().on('error', plugins.sass.logError))
			.pipe(plugins.autoprefixer({browsers:'> 5%'}))
			.pipe(gulp.dest('./dist/css/'))
			.pipe(plugins.rename({ suffix: '.min' }))
			.pipe(plugins.cssnano({ discardComments: {removeAll: true} }))
			.pipe(gulp.dest('./dist/css/'))
			.pipe(plugins.notify('Styles build completed.'))
			.pipe(plugins.connect.reload())
	}
}
