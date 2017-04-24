<?php

header("Content-Type:text/html;charset=utf-8");
require_once 'connect/connect20170327.php';

include('conn.php');

session_start();

$username = 0;//登录用户

$password = 0;//登录密码

$jumping = false;//页面跳转标志

$rusername = 0;//注册账号

$rpassword = 0;//注册密码

/*
$host="localhost";
$Dbusername ='root';
$password ='123456';
$DbName="bobo";

$db = new DBConnect($host,$Dbusername,$password,$DbName);
*/
$tableName_01 = "user";


/*
	功能
		登录
*/
//用来检测变量是否设置
if(isset($_POST["username"]))
{
	$username = $_POST["username"];
	$password = MD5($_POST["password"]);
	//echo $password."<br/>";
	$check_query = $db->select("id","user","where username='$username' and password='$password'");
	if($result = mysql_fetch_array($check_query)){
		//登录成功
		//echo "登录<br/>";;
		
		$_SESSION['username'] = $username;
		$_SESSION['userid'] = $result['id'];
		//echo $result['id'];
		$jumping = true;
		//echo $username;
	}

	
}
else
{
	global $jumping;
	$a = true;
	//echo '$a：'.(string)$a."<br/>";
	//echo '$j：'.(string)$jumping."<br/>";//没有显示正常
	//echo $username."<br/>";
}

/*
	功能
		注册
*/

if(isset($_POST["rusername"])&&isset($_POST["rpassword"]))
{
	$rusername = $_POST["rusername"];
	$rpassword = $_POST["rpassword"];
	$rpassword = MD5($rpassword);
	//echo $rusername."<br/>";
	//echo $rpassword."<br/>";
	
	$check_query = $db->select("id","user","where username='$rusername' limit 1");
	if(mysql_fetch_array($check_query)){
		echo '错误：用户名 ',$rusername,' 已存在。<a href="javascript:history.back(-1);">返回</a>';
		exit;
	}
	$mid = $db->selectmid('id','user');
	$mid = $mid+1;
	echo $mid."<br/>";
	//$mid = (string)$mid;
	//echo $mid."<br/>";
	//echo gettype($mid);
	
	$db->insert($tableName_01,"(id,username,password)","($mid,'$rusername','$rpassword')");

	$_SESSION["name"]=$rusername;
	
	/*
	$url="../index.html"; 
	echo "<script LANGUAGE='javascript'>"; 
	echo "location.href='$url'"; 
	echo "</script>";
	*/
}



if($jumping){
	
	$_SESSION["name"]=$username;
	
	$url="../index.html"; 
	echo "<script LANGUAGE='javascript'>"; 
	echo "location.href='$url'"; 
	echo "</script>"; 
}


?>