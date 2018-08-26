jQuery($ => {
	//获取title元素
	let  $title = $('.topHead .emTitle');

	let $em = $('.emTitle em');
	$title.on('mouseover', function(){
		$em.css('transform', 'rotate(-180deg)');
		$('.erCode').show();
	});
	$title.on('mouseout', function(){
		$em.css('transform', 'rotate(0deg)');
		$('.erCode').hide();
	});
});