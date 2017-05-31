$(function(){
    var arr=['dist/img/banner01_bg.jpg',"dist/img/banner02_bg.jpg",'dist/img/banner01_bg.jpg'];
    var index=0;
    //  var a=setInterval(function(){
    //     if(index>arr.length-1){
    //         index=0;
    //     }
    //     change();
    //     index++;
    // },2000)
    $(".banner .btnGroup .btnGroupCount .left").click(function(){
        // clearInterval(a);
       index--;
       if(index<0){
           index=arr.length-1;
       }
       change();
    })
     $(".banner .btnGroup .btnGroupCount .right").click(function(){
       index++;
       if(index>arr.length-1){
           index=0;
       }
       change();
    })
    $('.banner .btnGroup .btnGroupCount .center div span').click(function(){
        index=$(this).index();
        change();
    })
    function change(){
        $(".banner>img").attr("src",arr[index]);
        $(".banner .btnGroup .btnGroupCount li div span").removeClass("active");
        $(".banner .btnGroup .btnGroupCount li div span").eq(index).attr({class:'active'});
        switch(index){
            case 0:
             hideimg();
                $(".banner .img1").css({'left':'0px'});
                $(".banner .img2").css({'right':'0px'});
             img1play();
             break;
            case 1:
                hideimg();
                $(".banner .img4").css({'left':'0px'},1000);
                $(".banner .img6").css({'right':'0px'},1000);
                img2play();
                break;
            case 2:
                hideimg();
                 $(".banner .img7").css({'left':'0px'});
                 $(".banner .img8").css({'right':'0px'});
                img3play();
                break;
        }
        
    }
    //设置第一幅图的样式
    function img1play(){
        hideimg();
        $(".banner .img1").stop();
        $(".banner .img2").stop();
        $(".banner .img1").show();
        $(".banner .img2").show();
        $(".banner .img3").show();
        $(".banner .img1").animate({'left':'400px'},1000);
        $(".banner .img2").animate({'right':'350px'},1000);
    }
    //设置第二幅图的样式
    function img2play(){
        hideimg();
        $(".banner .img4").stop();
        $(".banner .img6").stop();
        $(".banner .img4").show();
        $(".banner .img5").show();
        $(".banner .img6").show();
        $(".banner .img4").animate({'left':'100px'},1000);
        $(".banner .img6").animate({'right':'800px'},1000);
    }
    //设置第三幅图的样式
    function img3play(){
        $(".banner .img7").stop();
        $(".banner .img8").stop();
        $(".banner .img7").show();
        $(".banner .img8").show();
        $(".banner .img9").show();
        $(".banner .img7").animate({'left':'450px'},1000);
        $(".banner .img8").animate({'right':'400px'},1000);
    }
    //清除所有的样式
    function hideimg(){
        $(".banner .img1").hide();
        $(".banner .img2").hide();
        $(".banner .img3").hide();
        $(".banner .img4").hide();
        $(".banner .img5").hide();
        $(".banner .img6").hide();
        $(".banner .img7").hide();
        $(".banner .img8").hide();
        $(".banner .img9").hide();
    }
    img1play();
});
//产品
$(function(){
    var index=0;
    var i=$(".project .public .mainbox .nav span").length;
    $(".project .public .mainbox .btn-group .left").click(function(){
        index--;
        if(index<0){
        	index=i-1;
        }
        leftchange();
        console.log(index);
    });
     $(".project .public .mainbox .btn-group .right").click(function(){
        index++;
        if(index>i-1){
        	index=0;
        }
        rightchange();
    });
    $(".project .public .mainbox .nav span").click(function(){
    	var k=$(this).index();
    	//判断想那边移动
    	if(k>index){
    		index=k;
    		rightchange();
    	}
    	else if(k<index){
    		index=k;
    		leftchange();
    	}
    });
    function leftchange(){
    	$(".project .public .mainbox .count"+index).css({left:1000});
    	navspan();
    }
    function rightchange(){
    	$(".project .public .mainbox .count"+index).css({left:-1000});
    	navspan();
    }
    //隐藏所有div
    function clearall(){
    	$(".project .public .mainbox .count").hide();
    }
    //清楚nav span
    function navspan(){
    	clearall();
    	$(".project .public .mainbox .count").stop();
    	$(".project .public .mainbox .count"+index).show();
    	$(".project .public .mainbox .count"+index).animate({left:0},1000);
    	$(".project .public .mainbox .nav span").removeClass("active");
    	$(".project .public .mainbox .nav span").eq(index).css({width:19,height:19,marginLeft:0}).addClass("active");
    	$(".project .public .mainbox .nav span").eq(index).siblings().css({width:11,height:11,marginLeft:4});
    }
});
//地图
$(function(){
   // 百度地图API功能
    var map = new BMap.Map('allmap');
    var poi = new BMap.Point(106.523035,29.545208);
    map.centerAndZoom(poi, 16);

    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                    '<img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                    '地址：北京市海淀区上地十街10号<br/>电话：(010)59928888<br/>简介：百度大厦位于北京市海淀区西二旗地铁站附近，为百度公司综合研发及办公总部。' +
                  '</div>';

    //创建检索信息窗口对象
    var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : "百度大厦",      //标题
			width  : 290,             //宽度
			height : 105,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});
    var marker = new BMap.Marker(poi); //创建marker对象
    marker.enableDragging(); //marker可拖拽
    marker.addEventListener("click", function(e){
	    searchInfoWindow.open(marker);
    })
    map.addOverlay(marker); //在地图中添加marker
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	map.disableDragging(); //禁止拖拽
});
//scope
$(function(){
	var i=1;
	var x=1;
	var y=1;
	$(".scope .public .scopebox .imgbox").hover(function(){
		$(this).addClass("animated tada");
	},function(){
		$(this).removeClass("animated tada");
	});
	$('.scope .public .scopebox .yes span').hover(function(){
		$(this).addClass("animated pulse");
	},function(){
		$(this).removeClass("animated pulse");
	})
	$('.scope .public .scopebox .yes .span1').click(function(){
		if(i==1){
			$(this).animate({backgroundPositionY:-67},500);
			i++;
		}
		else if(i==2){
			$(this).animate({backgroundPositionY:0},500);
			i=1;
		}
		$('.scope .public .scopebox .fontcount1').slideToggle(500);
	})
	$('.scope .public .scopebox .yes .span2').click(function(){
		if(x==1){
			$(this).animate({backgroundPositionY:-67},500);
			x++;
		}
		else if(x==2){
			$(this).animate({backgroundPositionY:0},500);
			x=1;
		}
		$('.scope .public .scopebox .fontcount2').slideToggle(500);
	})
	$('.scope .public .scopebox .yes .span3').click(function(){
		if(y==1){
			$(this).animate({backgroundPositionY:-67},500);
			y++;
		}
		else if(y==2){
			$(this).animate({backgroundPositionY:0},500);
			y=1;
		}
		$('.scope .public .scopebox .fontcount3').slideToggle(500);
	})
})
//team
$(function(){
	index=0;
	// var stop=setInterval(leftchange,2000);
	$(".team .public .btngroup .btnul li").eq(0).click(function(){
		// clearInterval(stop);
		index--;
		if(index<0){
			index=2;
		}
		leftchange();
	})
	$(".team .public .btngroup .btnul li").eq(2).click(function(){
		// clearInterval(stop);
		index++;
		if(index>2){
			index=0;
		}
		rightchange();
	})
	function leftchange(){
		$(".team .public .imgbox .move"+index).css({left:1000});
		change();
	}
	function rightchange(){
		$(".team .public .imgbox .move"+index).css({left:-1000});
		change();
	}
	function change(){
		$(".team .public .imgbox .imgboxcount").hide();
		$(".team .public .btngroup .btnul li").eq(1).find("span").removeClass();
		$(".team .public .imgbox .move"+index).show();
		$(".team .public .imgbox .move"+index).animate({left:0},1000);
		$(".team .public .btngroup .btnul li").eq(1).find("span").eq(index).addClass("active");
	}
})
//footer
$(function() {
//	$(".footer .public .fontw span #one").attr("preload","auto");
	$(".footer .public .fontw span").eq(0).click(function(){
		document.getElementById("one").play();
	})
	$(".footer .public .fontw span").eq(1).click(function(){
		document.getElementById("two").play();
	})
	$(".footer .public .fontw span").eq(2).click(function(){
		document.getElementById("three").play();
	})
	$(".footer .public .fontw span").eq(3).click(function(){
		document.getElementById("four").play();
	})
	$(".footer .public .fontw span").eq(4).click(function(){
		document.getElementById("five").play();
	})
	$(".footer .public .fontw span").eq(5).click(function(){
		document.getElementById("six").play();
	})
	$(".footer .public .fontw span").eq(6).click(function(){
		document.getElementById("seven").play();
	})
})
//返回顶部
$(function(){
    $(".scro").click(function(){
        window.scroll(0,0);
    })
    $(".messa").hover(function(){
        $(".pho").fadeIn();
    },function(){
        $(".pho").fadeOut();
    })
})
//导航栏js
$(function(){
    $(".header .public .meau>li").hover(function(){
        $(this).find(".secondmeau").slideDown();
    },function(){
       $(this).find(".secondmeau").slideUp();
    })
})