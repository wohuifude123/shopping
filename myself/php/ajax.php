<?php

header("Content-Type:text/html;charset=utf-8");

//include('connect/connect.php');
require_once 'connect/connect20170312.php';

$db = new Mysql("localhost","root","123456","stu01");
$result= $db->select("score");
$web = 0;
if($result)
{
	$users=array(); 
    $i=0;
	while($row=mysql_fetch_array($result,MYSQL_ASSOC))
	{
		$users[$i]=$row; 
		$i++;
    }
	$web = json_encode($users);
	echo $web; 
}
?>