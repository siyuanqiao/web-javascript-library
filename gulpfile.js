var gulp=require('gulp'),
    concat=require('gulp-concat');

gulp.task('css',function(){
   console.log('css complete');
});

gulp.task('js',function(){
   console.log('js complete');

   gulp.src('lib/*.js')
       .pipe(concat('common.js'))
       .pipe(gulp.dest('dist/js'));
});


gulp.task('default',['css','js'],function(){
   console.log('test');
});