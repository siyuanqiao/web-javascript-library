(function(){
    var math2={
        /*
        * 获取椭圆内随机一点
        * @param {number} radiusX 椭圆X轴半径
        * @param {number} radiusY 椭圆Y轴半径
        * @param {object} 随机点
        * */
        getEllipseRandomPoint:function(radiusX,radiusY){
            var angle=(Math.random()*360);
            //正弦函数图像特点 x∈[0,2π] 5点观察值[0,1,0,-1,0]
            p.x = Math.sin(Math.PI/180*angle)*(Math.random()*randiusX);
            //余弦函数图像特点 x∈[0,2π] 5点观察值[1,0,-1,0,1]
            p.y = Math.cos(Math.PI/180*angle)*(Math.random()*randiusY);
        }
    };
    window.math2=math2;
});
