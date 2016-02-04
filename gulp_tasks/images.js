module.exports = function(gulp, config, plugins) {
	return function(){
		gulp.src(['./src/assets/background/*.{png,jpg,jpeg}'])
			.pipe(plugins.cached('background'))
			.pipe(plugins.jimp({
				'' : {
					resize: {width: 1280},
					brightness: -0.5,
					blur: 10,
					quality: 70
				}
			}))
			.pipe(gulp.dest('./dist/img'));

		gulp.src(['./src/assets/**/*.{png,jpg,jpeg}', '!./src/assets/background/*'])
			.pipe(plugins.cached('images'))
			.pipe(plugins.jimp({
				'' : {
					resize: {width: 240},
					quality: 85
				}
			}))
			.pipe(gulp.dest('./dist/img'));

		gulp.src(['./src/assets/**/*.svg'])
			.pipe(plugins.svgmin())
			.pipe(gulp.dest('./dist/img'))
			.pipe(plugins.notify({ message : 'Image tasks completed' }));

	}
}
