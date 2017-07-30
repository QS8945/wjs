'use strict';
$(function(){
	
	//轮播图自适应
	function resize(){
		var windowWidth = $(window).width();
		var isSmallScreen = windowWidth<768;
		$('#carousel-example-generic > .carousel-inner >.item').each(function(index,val){
			var $item = $(val);
			$item.css('background-image','url("'+$item.data(isSmallScreen ? 'image-xs' : 'image-lg')+'")');
			if(isSmallScreen){
				$item.html('<img src="'+$item.data('image-xs')+'" alt="轮播图" />')
			}else{
				$item.empty();
			}
		});
	}
	$(window).on('resize',resize).trigger('resize');
});
