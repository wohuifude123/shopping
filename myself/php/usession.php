<?php
header("Content-Type:text/html;charset=utf-8");
session_start();
if(!isset($_SESSION['name'])){//若变量不存在返回 FALSE 
	echo "uninitialized";
}
else
{
	echo $_SESSION['name'];
}

?>