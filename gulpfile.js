var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'),		//压缩css
	uglify = require('gulp-uglify'),			//压缩JS
	imagemin = require('gulp-imagemin');	//压缩图片

// Styles
gulp.task('styles', function() {
	return gulp.src('src/css/**/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('dist/styles'));
});
// Scripts
gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/scripts'))
});
// Images
gulp.task('images', function() {
	return gulp.src('src/img/**/*')
		.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
		.pipe(gulp.dest('dist/images'))
});


// Default task  设置默认任务
gulp.task('default', ['styles','scripts','images']);
//
//// Watch
//gulp.task('watch', function() {
//	// Watch .scss files
//	gulp.watch('src/css/**/*.css', ['styles']);
//	// Watch .js files
//	gulp.watch('src/js/**/*.js', ['scripts']);
//	// Watch image files
//	gulp.watch('src/img/**/*', ['images']);
//	// Create LiveReload server
//	livereload.listen();
//	// Watch any files in dist/, reload on change
//	gulp.watch(['dist/**']).on('change', livereload.changed);
//
//});