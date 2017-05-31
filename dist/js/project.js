$(function(){
	var i=0;
	setInterval(flashing,3000);
	function flashing(){
		$('.warp .banner3 .public .box1 .left1img').css({'background':'url(dist/img/f1.png)',"transition":'background 0.5s'});
		$('.warp .banner3 .public .box1 .right1img').css({'background':'url(dist/img/f2.png)',"transition":'background 0.51s'});
		$('.warp .banner3 .public .box2 .left2img').css({'background':'url(dist/img/f3.png)',"transition":'background 0.5s'});
		$('.warp .banner3 .public .box2 .right2img').css({'background':'url(dist/img/f4.png)',"transition":'background 0.5s'});
		setTimeout(function(){
			$('.warp .banner3 .public .box1 .left1img').css({'background':'url(dist/img/d1.png)',"transition":'background 1.5s'});
			$('.warp .banner3 .public .box1 .right1img').css({'background':'url(dist/img/d2.png)',"transition":'background 1.5s'});
			$('.warp .banner3 .public .box2 .left2img').css({'background':'url(dist/img/d3.png)',"transition":'background 1.5s'});
			$('.warp .banner3 .public .box2 .right2img').css({'background':'url(dist/img/d4.png)',"transition":'background 1.5s'});
		},1000);
	}
})
