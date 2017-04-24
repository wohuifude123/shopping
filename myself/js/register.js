

function checkUserName() {
	var name = document.getElementById("rusername");//火狐浏览器需要在函数里面定义变量
	var nameWarning = "";
	var str001= { age: 20 };
	
	//alert("name.value=="+name.value);
	createJson(str001,"name", name.value);
	$_a.ajax_L({
		//从注册页面的位置开始查找文件
        url:'php/repeat.php',             //请求地址
        type: "POST",                       //请求方式
        data: str001,        //请求参数
        dataType: "json",
		success: function (response, xml) {
            // 此处放成功后执行的代码
			document.getElementById("rusername_span").innerHTML=response;
        },
        fail: function (status) {
            // 此处放失败后执行的代码
			document.getElementById("rusername_span").innerHTML="查询失败了";
        }
    });
	var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]){4,15}$/;
	if (!patrn.test(name.value))
	{ //判断用户名是否为空	
		nameWarning = "首位必须是字母，长度至少为5位";
		document.getElementById("rusername").innerText = nameWarning;
		return false;
	}
	document.getElementById("rusername").innerText = name.value;
	return true;
}


function checkPassword()
{
	var pw = document.getElementById("rpassword");	
	var pwdWarning = pw.value;
	var password = pw.value;
	//alert(password);				
	if (password != ""&& !(new RegExp("^(\\s*)$")).test(password))
	{//密码不为空
		if(!/\w{6}/.test(password))
		{//密码不是6位的字符或数字
			pwdWarning = "密码为6位的字符或数字";
		}                                       

	}
	else
	{
		//密码为空
		pwdWarning = "请输入密码！";
		pw.innerText = pwdWarning;
		return false;
	}
	pw.innerText = pwdWarning;
	return true;
}