<?php

header("Content-Type:text/html;charset=utf-8");

include('conn20170401.php');

require_once 'connect/connect20170401.php';

$tableName_01 = "leavemessage";

$content = 0;

if(isset($_POST["content"]))
{
	$content = $_POST["content"];
	$date = $_POST["date"];
	//echo $content;
	$mid = $db->selectmid('id',$tableName_01);
	$mid = $mid+1;
	$db->insert($tableName_01,"(id,content,date)","('$mid','$content','$date')");
}


?>