;jQuery($ => {
	//获取元素
	var $regBtn = $('.registe');
	var $num = $('#num');
	var $pwd = $('#password');
	var $compwd = $('#comfirepassword');
	var $code = $('#unicode');
	var $yancode = $('.yanText');
	var $huan = $('.huan');

	//进入页面显示验证码和随机颜色
	randomColor($yancode);
	randomNumber($yancode,5);


	//点击换一张进行变换二维码
	$huan.on('click', function(){
		randomColor($yancode);
		randomNumber($yancode,5);
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
	}





	








	//验证账号
	$num.on('blur', function(){
		var $_num = $num.val();
		if(!/^1[3-9]\d{9}$/.test($_num)){
			alert('手机号格式不正确');
			return false;	
		}
	});

	//验证密码
	$pwd.on('blur', function(){
		var $_pwd = $pwd.val();
		if(!/^\S{6,20}$/.test($_pwd)){
			alert('密码格式错误');
			return false;
		}
	});

	//再次验证密码
	$compwd.on('blur', function(){
		var $_compwd = $compwd.val();
		var $_pwd = $pwd.val();
		if(!($_compwd === $_pwd)){
			alert('两次输入密码不一致');
			return false;
		}
	});


	//定义事件
	$regBtn.on('click', function(){
		
	});

});