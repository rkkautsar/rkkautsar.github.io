module.exports = function(gulp, config, plugins) {
	return function(){
		gulp.src('./src/assets/background/*-dark.{jpg,jpeg,png}')
			.pipe(plugins.cached('background_dark'))
			.pipe(plugins.jimp({
				'' : {
					resize: {width: 1280},
					brightness: -0.5,
					quality: 70,
					blur: 5
				}
			}))
			.pipe(gulp.dest('./dist/img'));

		gulp.src('./src/assets/background/*-light.{jpg,jpeg,png}')
			.pipe(plugins.cached('background_light'))
			.pipe(plugins.jimp({
				'' : {
					resize: {width: 1280},
					brightness: 0.5,
					quality: 70,
					blur: 5
				}
			}))
			.pipe(gulp.dest('./dist/img'));

		gulp.src(['./src/assets/**/*.{png,jpg,jpeg}', '!./src/assets/background/*'])
			.pipe(plugins.cached('images'))
			.pipe(plugins.jimp({
				'' : {
					resize: {width: 720},
					quality: 90
				}
			}))
			.pipe(gulp.dest('./dist/img'));

		gulp.src(['./src/assets/**/*.svg'])
			.pipe(plugins.svgmin())
			.pipe(gulp.dest('./dist/img'))
			.pipe(plugins.notify({ message : 'Image tasks completed' }))
			.pipe(plugins.connect.reload());

	}
}
