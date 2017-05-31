$(function(){
	$(".main .public .imgshow li").addClass("animated zoomIn");
	setTimeout(function(){
		$(".main .public .imgshow li").removeClass("animated zoomIn");
	},1000)
	//图片动画
	$(".main .public .imgshow li").hover(function(){
		$(this).addClass("animated bounce");
	},function(){
		$(this).removeClass("animated bounce");
	})
})
