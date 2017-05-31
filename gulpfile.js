var gulp = require('gulp');
var less=require('gulp-less');
var bs=require("browser-sync");

gulp.task('less', function() {
  gulp.src('src/less/*.less')
  .pipe(less())
  .pipe(gulp.dest('dist/css'))
});
gulp.task('Server',['less'],function(){
    bs.init({
        server:{
            baseDir:"./",
            index:"index.html"
        }
    });
    gulp.watch("src/less/*.less",["less"])
    gulp.watch('dist/css/*.css').on('change',bs.reload);
    gulp.watch("*.html").on("change",bs.reload);
});
gulp.task('default',['Server']);