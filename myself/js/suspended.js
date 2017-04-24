// 左右悬浮广告

var top_distance = 10;//悬浮位于顶端距离
function advert(top){
	//alert(top);
	var Toppx = top; //上端位置
	var adleft = document.getElementById("adleft");
	var adright = document.getElementById("adright");
	// offsetTop 获取对象相对于版面 或由 offsetTop 属性指定的父坐标 计算顶端的位置 
	var adtop = adleft.offsetTop;
	addEvent(window,'scroll',function(){
		adleft.style.top = Toppx + adtop + (document.documentElement.scrollTop || document.body.scrollTop) +"px"; 
		adright.style.top = Toppx + adtop + (document.documentElement.scrollTop || document.body.scrollTop) +"px"
	});
	/*
	window.onscroll = function(){
		// document.documentElement.scrollTop 获取当前页面 滚动条 纵坐标位置
		
		adleft.style.top = Toppx + adtop + (document.documentElement.scrollTop || document.body.scrollTop) +"px"; 
		adright.style.top = Toppx + adtop + (document.documentElement.scrollTop || document.body.scrollTop) +"px";
	}
	*/
}

function advert_cs(result){advert_cs.ar = result;}
advert_cs(top_distance);
_addLoadEvent(function(){advert(advert_cs.ar);}
);


//window.onload = advert(0);