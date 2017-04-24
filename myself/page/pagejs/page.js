//alert("page");

function imgsrc(){
	var imgs = document.getElementsByTagName("img");
	for(var i=0;i<imgs.length;i++)
	{
		if(imgs[i].src == "")
		{
			imgs[i].src=imgs[i].getAttribute("src2");
		}
	}
	/*
	if(imgs[0].src == "")
	{
		imgs[0].src=imgs[0].getAttribute("src2");
	}
	*/
}imgsrc();