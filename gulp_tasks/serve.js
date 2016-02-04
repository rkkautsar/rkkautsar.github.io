module.exports = function(gulp, config, plugins) {
	return function(){
		plugins.connect.server({
			root: 'dist',
			livereload: true
		})
	}
}
