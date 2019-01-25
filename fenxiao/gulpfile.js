const path = require('path');

const gulp = require('gulp');

const less = require('gulp-less');

const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');

const cssnano = require('cssnano');

const autoprefixer = require('autoprefixer');

const del = require('del');

const gulpSequence = require('gulp-sequence');

const connect = require('gulp-connect');

const rename = require('gulp-rename');

const gulpAutoprefixer = require('gulp-autoprefixer');

let resolvePath = function(url) {
	return path.resolve(path.join(__dirname, url));
};
const targetDir = resolvePath('dist');

const srcAllHtml = resolvePath('src/*.html');
const distAllHtml = resolvePath('dist/*.html');

const destAllHtmlDir = resolvePath('dist');

const srcAllCss = resolvePath('src/css/*.css');
const destAllCssDir = resolvePath('dist/css');

const srcAllImg = resolvePath('src/img/*.*');
const destAllImgDir = resolvePath('dist/img');

const srcAllIcon = resolvePath('src/img/icon/*.png');
const destAllIconDir = resolvePath('dist/img/icon');

const srcAllSvg = resolvePath('src/img/svg/*.svg');
const destAllSvgDir = resolvePath('dist/img/svg');

const srcAllJs = resolvePath('src/js/*.js');
const destAllJsDir = resolvePath('dist/js');

const distAllCss = resolvePath('src/css/*.less');
const indexLess = resolvePath('src/less/index.less');
const indexCss = resolvePath('dist/css/index.css');
const srcAllLess = resolvePath('src/less/*.less');
const srcAllLessMixins = resolvePath('src/less/mixins/*.less');
const srcAllLessComponent = resolvePath('src/less/component/*.less');

// 复制文件
gulp.task('copyhtml', function() {
	return gulp.src(srcAllHtml)
		.pipe(gulp.dest(destAllHtmlDir));
});
gulp.task('copycss', function() {
	return gulp.src(srcAllCss)
		.pipe(gulp.dest(destAllCssDir));
});
gulp.task('copyimg', function() {
	return gulp.src(srcAllImg)
		.pipe(gulp.dest(destAllImgDir));
});
gulp.task('copyimgIcon', function() {
	return gulp.src(srcAllIcon)
		.pipe(gulp.dest(destAllIconDir));
});
gulp.task('copyimgSvg', function() {
	return gulp.src(srcAllSvg)
		.pipe(gulp.dest(destAllSvgDir));
});
gulp.task('copyjs', function() {
	return gulp.src(srcAllJs)
		.pipe(gulp.dest(destAllJsDir));
});

// 删除文件夹
gulp.task('clean', function(cb) {
	del([
		targetDir,
	], cb);
});

// 启动服务器
gulp.task('serve', function() {
	connect.server({
		root: targetDir,
		livereload: true,
		port: 8002
	});
});
// 重新加载
gulp.task('reload', function() {
	gulp.src(distAllHtml)
		.pipe(connect.reload());
});


// 编译 less 为 css
gulp.task('less', () => {
	var plugins = [
		autoprefixer({
			browsers: [
				'> 0.5%',
				'last 2 versions',
				'Firefox > 20',
				'not dead',
				'iOS > 7',
				'Android > 4'
			]
		}),
		cssnano()
	];
	return gulp.src(indexLess)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(postcss(plugins))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(destAllCssDir));
});


// 复制src中的静态资源到dist文件夹中
gulp.task('copy', gulpSequence('copyhtml', 'copycss', 'copyimg', 'copyimgIcon', 'copyimgSvg', 'copyjs'));

// 全部编译
gulp.task('build', gulpSequence('copy', 'less', 'serve', 'watch'));
gulp.task('dev', gulpSequence('copy', 'less', 'serve', 'watch'));

gulp.task('img', gulpSequence('copyimg', 'copyimgIcon', 'copyimgSvg'));
gulp.task('js', gulpSequence('copyjs'));

// 监视文件自动编译
gulp.task('watch', function() {
	gulp.watch(srcAllLess, ['less', 'reload']);
	gulp.watch(srcAllLessMixins, ['less', 'reload']);
	gulp.watch(srcAllLessComponent, ['less', 'reload']);
	gulp.watch(srcAllHtml, ['copyhtml', 'reload']);
	gulp.watch(srcAllImg, ['copyimg', 'reload']);
	gulp.watch(srcAllIcon, ['copyimgIcon', 'reload']);
	gulp.watch(srcAllSvg, ['copyimgSvg', 'reload']);
	gulp.watch(srcAllJs, ['copyjs', 'reload']);
});
