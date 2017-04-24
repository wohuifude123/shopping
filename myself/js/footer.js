addEvent(window,'scroll',function(){
	var Mic = MicCase;
	//document.getElementById("cs001").innerHTML=Mic.getScrollTop();
	//$L("#cs001").html(Mic.getScrollTop());
	
	if (Mic.getScrollTop() + Mic.getClientHeight() == Mic.getScrollHeight())
	{
		$L("#fo_web").css("display","block");
	}
	else
	{
	}

});

/*
window.onscroll = function (){
	var Mic = MicCase;
	if (Mic.getScrollTop() + Mic.getClientHeight() == Mic.getScrollHeight())
	{
		$L("#fo_web").css("display","block");
	}
	else
	{
		
	}
} 
*/