<?php

header("Content-Type:text/html;charset=utf-8");
include('connect/connect20170327.php');

include('conn.php');//数据库连接账号和密码

//个人信息编辑
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
*/
$tableName_01 = "uinformation";
$tableName_02 = "user";


if(isset($_POST["name"]))
{
	$name = $_POST["name"];
	echo "姓名==".$name."<br/>";
}
if(isset($_POST["email"]))
{
	$email = $_POST["email"];
	echo "邮箱==".$email."<br/>";
}
if(isset($_POST["phone"]))
{
	$phone = $_POST["phone"];
	echo "电话==".$phone."<br/>";
}

if(isset($_POST["bir"]))
{
	$bir = $_POST["bir"];
	echo "生日==".$bir."<br/>";
}


if(isset($_POST["sex"]))
{
	$sex = $_POST["sex"];
	echo "性别==".$sex."<br/>";
}

if(isset($_POST["address"]))
{
	$address = $_POST["address"];
	echo "地址==".$address."<br/>";
}

if(isset($_POST["postcode"]))
{
	$postcode = $_POST["postcode"];
	echo "邮编==".$postcode."<br/>";
}





$uid =  $_SESSION['userid'];
echo "$uid==".$uid."<br/>";
if ($uid == null)
{
	
}
else
{
	$db->insert($tableName_01,"(use_id,name,age,sex,telephone,address,birthday,Email,postcodes)","($uid,'$name',1,'$sex','$phone','$address','$bir','$email','$postcode')");
	echo gettype($uid)."<br/>";
	
	$db->update($tableName_02,"uid='$uid'","where id='$uid'");
	echo "成功==".$phone."<br/>";
}

?>