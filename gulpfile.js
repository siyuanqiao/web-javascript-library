var gulp=require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');//文件重命名

gulp.task('css',function(){
    //console.log('css complete');
});

//合并JS文件
gulp.task('minifyjs',function(){
    gulp.src([
            "lib/cookies.js",
            "lib/util.js",
            "lib/os.js",
            "lib/numberutils.js",
            "lib/stringutils.js",
            "lib/arrayutils.js",
            "lib/mathutils.js",
        ])  //选择合并的JS
        .pipe(concat('common.js'))   //合并js
        .pipe(gulp.dest('dist/js'))   //输出
        .pipe(rename({suffix:'.min'}))     //重命名
        .pipe(uglify())                    //压缩
        .pipe(gulp.dest('dist/js'));  //输出
});


gulp.task('default',['css','minifyjs'],function(){
    console.log('default task');
});