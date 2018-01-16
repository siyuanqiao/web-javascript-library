function PlaneMesh(__texture, __row, __col) {
	PIXI.mesh.Plane.call(this, __texture, __row, __col);

	var self = this;
	self.dotArr = [];

	init();

	function init() {
		for(var i = 0; i < __col; i++) {
			for(var j = 0; j < __row; j++) {
				/*var dot = creatBall();
				container.addChild(dot);*/
				var dot = {
					x: 0,
					y: 0
				};
				dot.x = j * (self.width / (__row - 1));
				dot.y = i * (self.height / (__col - 1));
				dotArr.push(dot);
				//dot.alpha = 1;
			}
		}
		self.dotArr = dotArr;
		setVer();
	}

	//扭曲进入到一个点
	this.transformIn = function(__obj) {
		var plane = self;
		//目标坐标-this的坐标=真目标坐标
		var targetX = __obj.targetX - self.x;
		var targetY = __obj.targetY - self.y;
		var ease = __obj.ease;
		var baseTime = __obj.baseTime || 800;
		var completeFun = __obj.onComplete;

		var dotArr = self.dotArr;
		var row = self.verticesX;
		var col = self.verticesY;

		for(var i = 0; i < dotArr.length; i++) {
			var temp = dotArr[i];
			var dist = getDistance({
				x: temp.x,
				y: temp.y
			}, {
				x: targetX,
				y: targetY
			});

			TweenMax.to(temp, 1.0, {
				x: targetX,
				y: targetY,
				delay: dist * (1 / baseTime),
				//ease: Back.easeIn,
				ease: ease,
				onUpdate: function() {
					setVer();
				},
				onComplete: function() {
					myComplete();
				}
			});
		}

		var n = 0;

		function myComplete() {
			n++;
			if(n >= dotArr.length) {
				if(completeFun) {
					completeFun();
				}
			}
		}
	}

	//扭曲从一点出来
	this.transformOut = function(__obj) {
		var plane = self;
		//起点坐标-this的坐标=真目标坐标
		var initX = __obj.initX - self.x;
		var initY = __obj.initY - self.y;
		var ease = __obj.ease;
		var baseTime = __obj.baseTime || 800;
		var completeFun = __obj.onComplete;

		var dotArr = self.dotArr;
		var row = self.verticesX;
		var col = self.verticesY;

		var i = 0;
		for(i = 0; i < dotArr.length; i++) {
			var temp = dotArr[i];
			temp.targetX = temp.x;
			temp.targetY = temp.y;

			temp.x = initX;
			temp.y = initY;
		}

		for(i = 0; i < dotArr.length; i++) {
			var temp = dotArr[i];
			var dist = getDistance({
				x: temp.x,
				y: temp.y
			}, {
				x: temp.targetX,
				y: temp.targetY
			});

			//根据每个点和初始点的距离，计算出delay时间，越近的delay时间越长
			var __delay = 1.3 - dist * (1 / baseTime);

			TweenMax.to(temp, 0.8, {
				x: temp.targetX,
				y: temp.targetY,
				delay: __delay,
				ease: ease,
				onUpdate: function() {
					setVer();
				}
			});
		}
	}

	function setVer() {
		var plane = self;
		var dotArr = self.dotArr;
		var num = 0;

		for(var i = 0; i < dotArr.length; i++) {
			var temp = dotArr[i];
			plane.vertices[num] = temp.x;
			num++;
			plane.vertices[num] = temp.y;
			num++;
		}
	}

	//计算两点间距离
	function getDistance(p1, p2) {
		var a = p2.x - p1.x;
		var b = p2.y - p1.y;
		var n = Math.sqrt(a * a + b * b);
		return n;
	}

	function creatBall() {
		var g = new PIXI.Graphics();
		g.beginFill(0xff0022);
		g.drawCircle(0, 0, 10);
		g.endFill();
		return g;
	}
}

PlaneMesh.prototype = new PIXI.mesh.Plane();
PlaneMesh.prototype.constructor = PlaneMesh;