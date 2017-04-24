<?php
$conn = @mysql_connect("localhost", "root", "123456") or die("数据库链接错误");
mysql_select_db("bobo", $conn);
mysql_query("set names 'gb2312'"); //使用GBK中文编码;
?>