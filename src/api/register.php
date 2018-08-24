<?php
	include './connect.php';
	//获取前端传过来的值
	$_username = isset($_POST['username']) ? $_POST['username'] : null;
	$_password = isset($_POST['password']) ? $_POST['password'] : null;

	// 查找sql语句是否存在该账号
	$sql = "select * from login_resg where username = '$_username'";

	//检测是否存在账号
	$sql01 = "insert into login_resg(username, password) values('$_username', '$_password')";


	//执行sql查找
	$result = $conn->query($sql);
	


	//判断前端传过来的值
	if(($result->num_rows) > 0){
		echo 'yes';
	}else{
		$result01 = $conn->query($sql01);
	}






	

	
	//释放查询结果, 避免资源浪费
	$result->close();


	//关闭数据库
	$conn->close();
?>