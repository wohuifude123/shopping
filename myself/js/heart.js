
//HTML5 桃心
function draw(id)
{
	var canvas=document.getElementById(id);
	if(canvas==null)return false;
	/*
		定义和用法
			getContext() 方法返回一个用于在画布上绘图的环境。
		语法
			Canvas.getContext(contextID)
		参数
			参数 contextID 指定了您想要在画布上绘制的类型。当前唯一的合法值是 "2d"，它指定了二维绘图，并且导致这个方法返回一个环境对象，该对象导出了一个二维绘图 API。
	*/
	var ctx=canvas.getContext('2d');
	ctx.beginPath();
	/*
		定义和用法
			moveTo() 方法可把窗口的左上角移动到一个指定的坐标。
	*/
	ctx.moveTo(7.5,4.0);
	/*
		定义和用法
			bezierCurveTo() 方法通过使用表示三次贝塞尔曲线的指定控制点，向当前路径添加一个点。
	
		浏览器支持
			Internet Explorer 9、Firefox、Opera、Chrome 以及 Safari 支持 bezierCurveTo() 方法。
		
		注释：Internet Explorer 8 或更早的浏览器不支持 <canvas> 元素。
	*/
	ctx.bezierCurveTo(7.5,3.7,7.0,2.5,5.0,2.5);
	ctx.bezierCurveTo(2.0,2.5,2.2,6.25,2.2,5.5);
	ctx.bezierCurveTo(2.0,8.0,4.0,10.2,7.5,12.0);
	ctx.bezierCurveTo(11.0,10.2,13.0,8.0,12.8,5.5);
	ctx.bezierCurveTo(12.8,5.5,13.0,2.5,10.0,2.5);
	ctx.bezierCurveTo(8.5,2.5,7.5,3.7,7.5,4.0);
	/*
		定义和用法
			createLinearGradient() 方法创建放射状/圆形渐变对象。
			渐变可用于填充矩形、圆形、线条、文本等等。
	*/
	var gradient=ctx.createRadialGradient(0,0,0,0,0,150);
	gradient.addColorStop(0,"rgba(244,28,285,0.5)");
	gradient.addColorStop(1,"rgba(255,255,255,1)");
	ctx.fillStyle=gradient;
	ctx.fill();
}
draw("myCanvas");
