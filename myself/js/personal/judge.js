var name = document.getElementById("name");
var patrn = null;//正则


function isRegisterUserName(s)  
{
	/*
		定义和用法
			exec() 方法用于检索字符串中的正则表达式的匹配。
	*/
	  
	if (!patrn.exec(s)) return false
	return true
}


function isPasswd(s)  
{  
	var patrn=/^[A-Za-z0-9]{5,16}$/;  
	if (!patrn.exec(s)) return false
	return true
} 

//校验登录名：只能输入5-20个以字母开头、可带数字的字串
function checkUserName() {
	var nameWarning = "";
	var patrn= /^[\u4e00-\u9fa5 ]{2,20}$/;
	if (!patrn.test(name.value))
	{ //判断用户名是否为空	
		nameWarning = "请输入正确的人名！";
		document.getElementById("name").innerText = nameWarning;
		return false;
	}
	document.getElementById("name").innerText = name.value;
	return true;
}

function checkEmail() {
     var emailWarning = "";
        var email = document.getElementsByName("email")[0].value;						
        if (!(new RegExp("[\\w[._]]+@[\\w[._]]+\\.[\\w]+")).test(email)) {       //密码不是6位的字符或数字
           emailWarning = "邮箱格式不正确！";
           //return false;
        }
    document.getElementById("emailchick").innerText = emailWarning;
    return true;
}