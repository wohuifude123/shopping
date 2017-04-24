<?php
header("Content-Type:text/html;charset=utf-8");
require_once 'connect/connect20170401.php';
include('conn20170401.php');

$jsonSearch = $db->queryJson("name,path,width,height","safepicture","");
echo json_decode($jsonSearch);

?>