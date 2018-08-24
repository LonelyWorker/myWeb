;jQuery($ => {

	//获取元素
	var $regBtn = $('.registe');
	var $username = $('#num');
	var $pwd = $('#password');
	var $compwd = $('#comfirepassword');
	var $code = $('#unicode');
	var $yancode = $('.yanText');
	var $huan = $('.huan');
	var $num01;

	//进入页面显示验证码和随机颜色
	randomColor($yancode);
	randomNumber($yancode,5);

	//定义事件
	$regBtn.on('click', function(){
		var $_username = $username.val();
		var $_pwd = $pwd.val();
		var $_compwd = $compwd.val();
		var $_code = $code.val();
		if(!/^1[3-9]\d{9}$/.test($_username)){
			alert('手机号格式不正确');
			return false;	
		}
		if(!/^\S{6,20}$/.test($_pwd)){
			alert('密码格式错误');
			return false;
		}
		if(!($_compwd === $_pwd)){
			alert('两次输入密码不一致');
			return false;
		}
		if(!($_code === $num01)){
			alert('验证码错误');
			return false;
		}
		$.ajax({
			type: 'POST',
			url: '../api/register.php',
			data: {username: $_username, password: $_pwd},
			success: function(res){
				if(res === 'yes'){
					alert('该用户名已存在');
				}else{
					alert('注册成功');
				}
			},
		});
	});

	//验证账号
	$username.on('change', function(){
		var $_username = $username.val();
		if(!/^1[3-9]\d{9}$/.test($_username)){
			alert('手机号格式不正确');
			return false;	
		}
		$.ajax({
			type: 'POST',
			url: '../api/reg.php',
			data: {username: $_username},
			success: function(res){
				if(res === 'yes'){
					alert('该用户名已存在');
				}
			},
		});
	});

	//验证密码
	$pwd.on('change', function(){
		var $_pwd = $pwd.val();
		if(!/^\S{6,20}$/.test($_pwd)){
			alert('密码格式错误');
			return false;
		}
	});

	//再次验证密码
	$compwd.on('change', function(){
		var $_compwd = $compwd.val();
		var $_pwd = $pwd.val();
		if(!($_compwd === $_pwd)){
			alert('两次输入密码不一致');
			return false;
		}
	});

	//验证验证码
	$code.on('change', () => {
		var $_code = $code.val();
		if(!($_code === $num01)){
			alert('验证码错误');
		}
	});

	


	//随机颜色
	function randomColor(obj){
		var r = parseInt(Math.random() * 255);
		var g = parseInt(Math.random() * 255);
		var b = parseInt(Math.random() * 255);
		var a = Math.random() * 1;
		var $content = `rgba(${r}, ${g}, ${b}, ${a})`;
		obj.css({'backgroundColor':$content});
	}

	//随机数字
	function randomNumber($obj,n){
		var em = $('<em\ >');
		for(var i = 0;i <= n;i++){
			var num = parseInt(Math.random() * 10);
			em.append(num);
		}
		$obj.html(em);
		$num01 = em.text();
	}


	//点击换一张进行变换二维码
	$huan.on('click', function(){
		randomColor($yancode);
		randomNumber($yancode,5);
	});


	








});