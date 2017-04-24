function _addLoadEvent(func)
{
    var oldonload=window.onload;
    if(typeof window.onload != 'function')
    {
        window.onload=func;
    }
    else
    {
        window.onload=function()
        {
            oldonload();
            func();
        }
    }
}

function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name]
	}
	else
	{
		return getComputedStyle(obj,false)[name]
	}
}
// 获取类的名字
function getByClass(oParent,nClass)
{
	var eLe = oParent.getElementsByTagName('*');
	var aRrent  = [];
	for(var i=0; i<eLe.length; i++)
	{
		if(eLe[i].className == nClass)
		{
			aRrent.push(eLe[i]);
		}
	}
	return aRrent;
}
//开始移动
function startMove(obj,att,add)
{
	clearInterval(obj.timer)
	obj.timer = setInterval(function(){
	   var cutt = 0 ;
	   if(att=='opacity')
	   {
		   cutt = Math.round(parseFloat(getStyle(obj,att)));
	   }
	   else
	   {
		   cutt = Math.round(parseInt(getStyle(obj,att)));
	   }
	   var speed = (add-cutt)/4;
	   speed = speed>0?Math.ceil(speed):Math.floor(speed);
	   if(cutt==add)
	   {
		   clearInterval(obj.timer)
	   }
	   else
	   {
		   if(att=='opacity')
		   {
			   obj.style.opacity = (cutt+speed)/100;
			   obj.style.filter = 'alpha(opacity:'+(cutt+speed)+')';
		   }
		   else
		   {
			   obj.style[att] = cutt+speed+'px';
		   }
	   }
	   
	},30)
}
//启动



_addLoadEvent(function(){
	
	var oDiv = document.getElementById('playBox');//总体
	var oPre = getByClass(oDiv,'pre')[0];//左箭头
	var oNext = getByClass(oDiv,'next')[0];//右箭头
	var oUlBig = getByClass(oDiv,'oUlplay')[0];//大图
	var aBigLi = oUlBig.getElementsByTagName('li');
	var oDivSmall = getByClass(oDiv,'smalltitle')[0]
	var aLiSmall = oDivSmall.getElementsByTagName('li');
	function tab()
	{
		for(var i=0; i<aLiSmall.length; i++)
		{
			aLiSmall[i].className = '';
		}
		aLiSmall[now].className = 'thistitle'
		startMove(oUlBig,'left',-(now*aBigLi[0].offsetWidth))
	}
	var now = 0;
	for(var i=0; i<aLiSmall.length; i++)
	{
		aLiSmall[i].index = i;
		aLiSmall[i].onclick = function()
		{
			now = this.index;
			tab();
			}
	}
	oPre.onclick = function()
	{
		now--;
		if(now ==-1)
		{
			now = aBigLi.length;
		}
		tab();
	}
	oNext.onclick = function()
	{
		now++;
		if(now ==aBigLi.length)
		{
			now = 0;
		}
		tab();
	}
	var timer = setInterval(oNext.onclick,3000) //滚动间隔时间设置
	oDiv.onmouseover = function()
	{
		clearInterval(timer)
	}
	oDiv.onmouseout = function()
	{
		timer = setInterval(oNext.onclick,3000) //滚动间隔时间设置
	}
});


/*
window.onload = function()
{
	var oDiv = document.getElementById('playBox');//总体
	var oPre = getByClass(oDiv,'pre')[0];//左箭头
	var oNext = getByClass(oDiv,'next')[0];//右箭头
	var oUlBig = getByClass(oDiv,'oUlplay')[0];//大图
	
	var aBigLi = oUlBig.getElementsByTagName('li');
	var oDivSmall = getByClass(oDiv,'smalltitle')[0]
	var aLiSmall = oDivSmall.getElementsByTagName('li');
	function tab()
	{
		for(var i=0; i<aLiSmall.length; i++)
		{
			aLiSmall[i].className = '';
		}
		aLiSmall[now].className = 'thistitle'
		startMove(oUlBig,'left',-(now*aBigLi[0].offsetWidth))
	}
	var now = 0;
	for(var i=0; i<aLiSmall.length; i++)
	{
		aLiSmall[i].index = i;
		aLiSmall[i].onclick = function()
		{
			now = this.index;
			tab();
		}
	}
	oPre.onclick = function()
	{
		now--;
		if(now ==-1)
		{
			now = aBigLi.length;
		}
		tab();
	}
	oNext.onclick = function()
	{
		now++;
		if(now ==aBigLi.length)
		{
			now = 0;
		}
		tab();
	}
	var timer = setInterval(oNext.onclick,5000) //滚动间隔时间设置
	oDiv.onmouseover = function()
	{
		clearInterval(timer)
	}
	oDiv.onmouseout = function()
	{
		timer = setInterval(oNext.onclick,5000) //滚动间隔时间设置
	}
}

*/
