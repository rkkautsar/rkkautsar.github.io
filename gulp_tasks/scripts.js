module.exports = function(gulp, config, plugins){
	return function() {
		gulp.src('./src/js/**/*.js')
			.pipe(plugins.jshint())
			.pipe(plugins.jshint.reporter('default'))
			.pipe(plugins.concat('script.js'))
			.pipe(gulp.dest('./dist/js'))
			.pipe(plugins.rename({ 
				suffix : '.min' 
			}))
			.pipe(plugins.uglify())
			.pipe(gulp.dest('js'))
			.pipe(plugins.notify({ message : 'Scripts build completed' }))
			.pipe(plugins.connect.reload())
	}
}
