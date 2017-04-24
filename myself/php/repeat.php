<?php

header("Content-Type:text/html;charset=utf-8");
include('connect/connect20170327.php');

include('conn.php');//数据库连接账号和密码

$name = $_POST['name'];
//echo $name;

$check_query = $db->select("id","user","where username='$name'");

while($row=mysql_fetch_array($check_query))
{
	if($row['id'])
	{
		echo $row['id'];
	}
}

?>