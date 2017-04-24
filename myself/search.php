<?php
header("Content-Type:text/html;charset=utf-8");
$conn = @mysql_connect("localhost", "root", "123456") or die("数据库链接错误");
mysql_select_db("bobo", $conn);
mysql_query("set names 'GBK'"); //使用GBK中文编码;
if(isset($_GET['key']))
{
	/*
		定义和用法
			strpos() 函数查找字符串在另一字符串中第一次出现的位置。
			注释：strpos() 函数对大小写敏感。
			注释：该函数是二进制安全的。
			
			echo strpos("You love php, I love php too!","php");
	*/
	
	if($_GET['key'])
	{
		if(strpos($_GET['key']," "))
		{
			echo '有空格'."<br>";

			/*
				定义和用法
					explode() 函数把字符串打散为数组
		
					$str = "Hello world. I love Shanghai!";
					print_r (explode(" ",$str));
			*/
			$k = explode(" ", $_GET['key']);
			
			$sql = "SELECT * FROM `user` WHERE username LIKE '%$k[0]%' or username LIKE '%$k[1]%'";
			$query = mysql_query($sql);
			
			while($r=mysql_fetch_array($query)) {
				echo "成功123"."<br>";
				$r['username'] = preg_replace("/($k[0])/i", "<font color=red><b>\\1</b></font>", $r['username']);
				$r['username'] = preg_replace("/($k[1])/i", "<font color=red><b>\\1</b></font>", $r['username']);
				echo "$r[username]"."<br>";
			}
		}
		else
		{
			echo '没有空格'."<br>";

			$sql = "SELECT * FROM `user` WHERE username LIKE '%$_GET[key]%'";  
			$query = mysql_query($sql);  
			$newrow = $_GET['key'];
			echo '关键字=='.$newrow."<br>";
			$pttn = "<font color=red><b>$newrow</b></font>";
			while($r=mysql_fetch_array($query)) {
				/*
				
				正则替换
					preg_replace() 函数用于正则表达式的搜索和替换。
				
				语法
					preg_replace( mixed pattern, mixed replacement, mixed subject [, int limit ] ) 
				
				参数
					pattern	正则表达式
					replacement	替换的内容
					subject	需要匹配替换的对象
					limit	可选，指定替换的个数，如果省略 limit 或者其值为 -1，则所有的匹配项都会被替换
				*/
				$r['username'] = preg_replace("/($newrow)/i",$pttn, $r['username']);
				echo "$r[username]"."<br>";  
			}
		}
	}
	
}
?>

<html>
	<body>
	<form action="" method="get">
	关键字：
	<input type="text" name="key" />
	<input type="submit" name="sub" value="搜索" />
	</form>
	</body>
</html>