<?php
	include './connect.php';
	//获取前端传过来的值
	$_username = isset($_POST['username']) ? $_POST['username'] : null;

	// 查找sql语句是否存在该账号
	$sql = "select * from login_resg where username = '$_username'";

	


	//执行sql查找
	$result = $conn->query($sql);
	


	//判断前端传过来的值
	if(($result->num_rows) > 0){
		echo 'yes';
	}else{
		echo 'no';
	}
