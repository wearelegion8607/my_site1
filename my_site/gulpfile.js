var gulp = require('gulp');
var browserSync = require('browser-sync')
var sass = require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src('app/sass/style.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}))
})

gulp.task('browser-sync',function(){
    browserSync({
        server:{
            baseDir:'app'
        },
        notify:false
    })
})
gulp.task('watch',['browser-sync','sass'],function(){
    gulp.watch('app/sass/style.sass',['sass']);
    gulp.watch('app/*.html', browserSync.reload);
})