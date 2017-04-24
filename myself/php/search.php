<?php
header("Content-Type:text/html;charset=utf-8");
require_once 'connect/connect20170401.php';
include('conn20170401.php');


if(isset($_POST['args0']))
{
	$strSearch = $_POST['args0'];
	//SELECT * FROM intruduction where intruContent LIKE '%风衣%' 
	$jsonSearch = $db->queryJson("*","intruduction","where intruContent LIKE '%".$strSearch."%' ");
	echo json_decode($jsonSearch);
	
}
?>

