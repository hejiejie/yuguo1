var gulp = require("gulp");
//var sass = require('gulp-sass');

gulp.task("copy-html",function(){
	//gulp.src("*.html").pipe(gulp.dest("dist"));
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\gulp"));
});
gulp.task("copy-img",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("img/*.{jpg,png,gif}")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\gulp\\img"));
});
gulp.task("copy-css",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\gulp\\css"));
});
gulp.task("copy-js",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\gulp\\js"));
});
gulp.task("copy-font",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("font/*.{eot,svg,ttf,woff}")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\gulp\\font"));
});
gulp.task("copy-php",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("php/*.php")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\gulp\\php"));
});
//sass文件的编译
// gulp.task("sassfile",function(){
// 	//gulp.src("index.html").pipe(gulp.dest("dist"));
// 	gulp.src("sass/*.scss")
//    .pipe(sass())
//    .pipe(gulp.dest("D:\\phpStudy\\WWW\\gulp\\css"));
// });
//gulp.task("build",["copy-html","copy-css","copy-img","copy-font","copy-js","copy-php"],function(){});
//gulp.task("watch",function(){
//	gulp.watch("*.html",["copy-html"]);
//	gulp.watch("css/*.css",["copy-css"]);
//	gulp.watch('img/*.{jpg,png,tmp,gif}',["copy-img"]);
//	gulp.watch("font/*.{eot,svg,ttf,woff}",["copy-font"]);
//	gulp.watch("js/*.js",["copy-js"]);
//	gulp.watch("php/*.php",["copy-php"]);
	// gulp.watch("sass/*.scss",["sassfile"]);
//});
