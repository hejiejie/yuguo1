<?php 
    header("Content-type:text/html;charset=utf-8");
    //接收
	$userpass = $_POST["userpass"];
	$userPhone= $_POST['userPhone'];
	//连接数据库服务器
    $conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("数据库连接失败：".mysql_error());
	}else{
		//2）、选择目的地（选择操作的数据库）
	    mysql_select_db("mydb916",$conn);
		//执行sql语句
		$str = "select * from usertable where userPhone='$userPhone' and userpass='$userpass'";
		$result = mysql_query($str,$conn);
		//关闭数据库
		mysql_close($conn);
		
		if(mysql_num_rows($result)> 0){
			echo "1";	
		}else{
			echo "0";
		}
	}
 ?>