var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	nodemon = require('nodemon' ),
	imagemin = require('gulp-imagemin' ),
	htmlmin = require('gulp-htmlmin');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('htmlmin',function(){
	return gulp.src('views/**/*.html')
		.pipe(htmlmin())
		.pipe(gulp.dest('dist/views'));
});
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

//启动服务器
gulp.task('nodemon', (a)=> {
	var ft = false;
return nodemon({
		script: 'app.js'
	}).on('start', ()=> {
		if (!ft) {
	a();
	ft = true;
}
});
});
//  proxy 服务器代理
gulp.task('browser-sync',['nodemon'] , ()=> {
	browserSync.init({
	proxy: {
		target: 'http://127.0.0.1:16084'
	},
	files: ['*'],
	open: false,
	notify: false,
	port: 9800
});
});

//编译前清除文件
gulp.task('clean', function(opt){
	del(['./dist'], opt);
});

gulp.task('default', ['htmlmin','styles','scripts','images']);

//监听文件变更
gulp.task('watch', function(){
	gulp.watch([
		'./views/**/*.html',
		'./src/css/**/*.css',
		'./src/js/**/*.js',
		'./src/img/**/*.{png,jpg,ico,gif}}'
	]).on('change', reload);
});

//启动任务
gulp.task('default', ['browser-sync', 'watch'], function(){
	console.log("gulp default");
});