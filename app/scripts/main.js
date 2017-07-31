'use strict';
$(function(){
	//提示工具
	$('[data-toggle="tooltip"]').tooltip()
	//轮播图自适应
	function resize(){
		var windowWidth = $(window).width();
		var isSmallScreen = windowWidth<768;
		$('#carousel-example-generic > .carousel-inner >.item').each(function(index,val){
			var $item = $(val);
			$item.css('background-image','url("'+$item.data(isSmallScreen ? 'image-xs' : 'image-lg')+'")');
			if(isSmallScreen){
				$item.html('<img src="'+$item.data('image-xs')+'" alt="轮播图" />')
				getWidth();
			}else{
				$item.empty();
			}
		});
	}
	/**
	 * 获取导航宽度
	 */
	function getWidth(){
		var width = 70;
		var windowWidth = $(window).width();
		var $ulWidth = $('.nav-tabs');
		$ulWidth.children().each(function(index,element){
			width += element.clientWidth;
		});
		$ulWidth.css('width',width+'px');
		if(width > windowWidth){
			$('.ul-wrapper').css('overflow-x','scroll');
		}
	}
	/**
	 * 新闻列表点击事件
	 */
	$('.nav-stacked a').on('click',function(){
		var $this = $(this);
		var pushData = $this.data('title');
		$('#news .row p').text(pushData);
	});
	/**
	 * 导航吸顶效果
	 */
	/*$('#myAffix').affix({
	  offset: {
	    top: 100,
	    bottom: function () {
	      return (this.bottom = $('.footer').outerHeight(true))
	    }
	  }
	});*/
	var startPageX = 0,endPageX = 0,distance = 50,move = false;
	var direction;
	$('.carousel .carousel-inner').on('touchstart',function(e){
		startPageX = 0;
		move = false;
		startPageX = e.touches[0].pageX;
	});
	$('.carousel .carousel-inner').on('touchmove',function(e){
		move = true;
	});
	$('.carousel .carousel-inner').on('touchend',function(e){
		endPageX = 0;
		if(!move){
			return false; 
		}
		endPageX = e.changedTouches[0].pageX;
		if(!(Math.abs(startPageX - endPageX)>distance ? true : false)){
			return false;
		}
		direction = startPageX>endPageX;
		if(direction){
			$('.carousel').carousel('next');
		}else{
			$('.carousel').carousel('prev');
		}
	});
	$(window).on('resize',resize).trigger('resize');
});
