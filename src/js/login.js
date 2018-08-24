jQuery($ => {
	//获取元素
	var $username = $('#txtUserName');
	var $password = $('.password');
	var $btn = $('.loginButton');

	//定义事件
	$btn.on('click', () => {
		console.log(656);
		//获取元素的值
		var $_username = $username.val();
		var $_password = $password.val();
		//发起php请求
		$.ajax({
			type: 'post',
			url: '../api/login.php',
			success: function(res){
				console.log(res);
				if(res === 'no'){
					alert("用户名或密码不正确");
				}else{
					window.location.reload();
					$(location).attr('href','../html/header.html');
				}
			},
			data: {'username':$username, 'password':$password}
			
		});
	});

	//用户名验证
	// $username.on('change', () => {
	// 	var $rex = /^[a-z0-9][\w\-\.]{2,29}@[a-z0-9\-]{2,67}(\.[a-z\u2E80-\u9FFF]{2,6})+|1[3-9]\d{9}$/;
	// 	if(!$rex.test($_username)){
	// 		if($_username === ''){
	// 			alert('请输入正确账号');
	// 			return false;
	// 		}

	// 		confirm('账号或密码输入不正确');
	// 		$username.focus();
	// 		$username.val('');
	// 		return false;
	// 	}
	// });

	// //密码验证
	// $password.on('change', () => {
	// 	if(!/^\S{6,20}$/.test($_password)){
	// 		if($_password === ''){
	// 			alert('请输入正确密码');
	// 			return false;
	// 		}
	// 		confirm('账号或密码输入不正确');
	// 		$password.focus();
	// 		$password.val('');
	// 		return false;
	// 	}
	// });
});