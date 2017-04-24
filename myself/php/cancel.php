
<?php
session_start();

//注销登录
if($_POST['action'] == "logout"){
	unset($_SESSION['userid']);
	unset($_SESSION['name']);
	echo '<p id="login-info" class="sn-login-info"></p>
		  <span style="display:inline; float:left;  width:700px; height:32px; line-height:32px;" id="userxx"><em>尊敬的顾客，欢迎来商城</em>
		  <a class="sn-login" href="login.html" target="_blank">请登录</a>
		  <a class="sn-register" href="register.html" target="_blank">免费注册</a></span>
		  <span style="display:inline; float:left; height:20px;" id="list_items"></span>';
    exit;
}


?>
