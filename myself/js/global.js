var whole="";


//判断参数是否存在
function isNull(data)
{
	return (data == "" || data == undefined || data == null) ? true : false;
	//参数没有为真
}



//整体布局函数
function entirety(entirety_c)
{
	var a0 =arguments[0]//宽度
	var a1 =arguments[1]//高度
	var a2 =arguments[2]//背景颜色
	var div=document.createElement("div");
	div.setAttribute("id","entirety");
	document.getElementsByTagName("body")[0].appendChild(div);
	//document.body.appendChild(div);
	
	var span=document.createElement("span");
	var entirety =document.getElementById("entirety");

	for(var c in entirety_c)
	{
		entirety.style[c] = entirety_c[c];
	}
	//div.style.cssText="width:200px;height:200px;background:#636363;"
	    
	var a0 =arguments[0]//宽度
	var a1 =arguments[1]//高度
	var a2 =arguments[2]//背景颜色
	var entirety_String="<div id=\"entirety\" style=\" width:"+500+"px; height:300px; background-color:#000;'>"+"</div>";
	whole=entirety_String;
	//alert(entirety_String);

	//var entirety = document.createElement('entirety');
	//var newtext=xmlDoc.createTextNode('First');
	//entirety.appendChild(newtext);
}
//头部样式设计
//整体布局函数
function top()
{
	top_c = arguments[0];
	var img_c=isNull(arguments[1]);
	var div=document.createElement("div");
	div.setAttribute("id","top");
	document.getElementById("entirety").appendChild(div);
	var top =document.getElementById("top");

	for(var c in top_c)
	{
		top.style[c] = top_c[c];
	}
	if(!img_c)//有参数时为假
	{
		//alert("图片");
		var img=document.createElement("img");
		img.setAttribute("id","img");
		img.setAttribute("width","1000px");
		img.setAttribute("height","200px");
		img.setAttribute("src",arguments[1]);
		document.getElementById("top").appendChild(img);
	}
	
}
//在头部中增加样式
function style(){
	var style = document.createElement("style"),   
	str = "body{background:#005;color:#fff} a{color:#fff;text-decoration:none;} a:hover{color:red;text-decoration:underline}";  
	style.type="text/css";
	

	//alert(style.type);
	if(style.styleSheet){//ie下  
		style.styleSheet.cssText = str;  
	} else {  
		//style.innerHTML = str;       //或者写成 nod.appendChild(document.createTextNode(str))  
		 style.appendChild(document.createTextNode(str)) 
	}  
	document.getElementsByTagName("head")[0].appendChild(style);

}

//将样式写入文件中
function Write2Text()
{

//如果是服务器端就是Server.CreateObject("Scripting.FileSystemObject");
var fso = new ActiveXObject("Scripting.FileSystemObject");  
var f = fso.CreateTextFile("E://a.txt", true);
 
f.write(whole)
 f.WriteBlankLines(1)

f.Close();
}
//从文件中读取样式
function getPath()
    {
    //document.getElementById("tt").value = "";
    var ForReading = 1; 
    var filePath =  "E://a.txt"
    if(filePath == "")
    return;
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var textFile = fso.GetFile(filePath);
    var ts = fso.OpenTextFile(filePath, ForReading); 
    var result = ts.ReadAll();
 
   alert(result)
 }