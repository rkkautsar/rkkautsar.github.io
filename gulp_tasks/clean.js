module.exports = function(gulp, config, plugins) {
	return function() {
		var del = require('del');
		
		return del([
			'./dist/**/*'
		])
	}
}