<?php
	//获取数据库信息
	$severname = 'localhost';
	$username = 'root';
	$password = '';
	$dbname = 'gjw';

	//连接数据库信息
	$conn = new mysqli($severname, $username, $password, $dbname);

	//编写sql代码
	$sql = 'select * from goodprice';


	//检测数据库是否连接成功
	if($conn->connect_error){
		die('连接失败'.$conn->connect_error);
	}

	//转出前设置编码
	$conn->set_charset('utf8');





	//获取查询结果集
	$result = $conn->query($sql);


	//使用查询结果集
	//得到数组
	$row = $result->fetch_all(MYSQLI_ASSOC);


	//释放结果集, 避免占用内存
	$result->close();


	//把处理过的数据传到前端
	echo json_encode($row, JSON_UNESCAPED_UNICODE);


	//关闭数据库, 避免资源浪费
	$conn->close();



















?>