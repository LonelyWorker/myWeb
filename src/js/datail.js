jQuery($ => {
	//获取头尾部内容
	$('#head').load('header.html header');
	$('#foot').load('footer.html footer');



	$('.big_tab').find('.tab_li:first').show();

	$('.tab li').on('mouseover', function(){
		var index = $(this).index(); //获取当前a标签的个数
		$(this).parent().next().find('.tab_li').hide().eq(index).show();
		$(this).addClass('hover').siblings().removeClass('hover');
	})
});