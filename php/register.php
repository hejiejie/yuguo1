<?php 
    header("Content-type:text/html;charset=utf-8");
	$username = $_POST["username"];
	$userpass = $_POST["userpass"];
	$userPhone = $_POST['userPhone'];
    $conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("数据库连接失败：".mysql_error());
	}else{
		//2）、选择目的地（选择操作的数据库）
		mysql_select_db("mydb916",$conn);
		$str = "select * from usertable where username='$username'";
		$result = mysql_query($str,$conn);
		$rows = mysql_num_rows($result);
		if($rows <= 0){
			$str ="insert into usertable values('$username','$userpass','$userPhone')";
			$result = mysql_query($str,$conn);
//			mysql_close($conn);

			if($result){
				echo "1"; 
			}else{
				echo "0";
			}		
		}else{
			echo "-1";
		}
	}
 ?>