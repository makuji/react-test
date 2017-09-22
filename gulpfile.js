// Инициализация переменных

var gulp 					= require('gulp'),
		gutil 				= require('gulp-util'),
		sass					= require('gulp-sass'),
		browserSync 	= require('browser-sync'),
		del 					= require('del'),
		concat				= require('gulp-concat'),
		uglify				= require('gulp-uglify'),
		cleanCSS			= require('gulp-clean-css'),
		rename 				= require('gulp-rename'),
		imagemin			= require('gulp-imagemin'),
		cache					= require('gulp-cache'),
		autoprefixer	= require('gulp-autoprefixer'),
		notify				= require('gulp-notify');

// Скрипты проекта

// gulp.task('browser-sync', function() {
// 	browserSync({
// 		// server: {
// 		// 	baseDir: 'src/', // изменить когда измениться структура проекта
// 		// 	index: 'public/index.html'
// 		// },
// 		// server: true,
// 		proxy: 'localhost:3000',
// 		notify: true,
// 		// tunnel: true,
// 		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
// 	});
// });

gulp.task('sass', function() {
	return gulp.src('src/**/*.sass')
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('src/'));
	//.pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function() {
	return gulp.src(['src/**/*.js'])
	.pipe(rename({suffix: 'min', prefix: ''}))
	.pipe(uglify())
	.pipe(gulp.dest('src/'));
	//.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass'], function() {
	gulp.watch('src/**/*.sass', ['sass']);
	// gulp.watch('src/**/*.js', ['js']);
	gulp.watch('public/*.html', ['html']);
});

gulp.task('default', ['watch']);