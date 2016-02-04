module.exports = function(gulp, config, plugins) {
	return function(){
		gulp.src(['./src/views/**/*.twig', '!./src/views/includes/**/*.twig'])
			.pipe(plugins.twig({
				errorLogToConsole: true
			}))
			.pipe(plugins.htmlBeautify())
			.pipe(gulp.dest('./dist'))
			.pipe(plugins.notify({ message : 'Templates render completed' }))
			.pipe(plugins.connect.reload())
	}
}
