var Slideshow = new function() {

	var slideshow = document.getElementById('slideshow'),
		slides = $('div.slide', slideshow),
		previous = $('#previous', slideshow),
		next = $('#next', slideshow),
		pagination = $('#slideshow-pagination', slideshow),
		pagElems = $('span', pagination),
		index = 0;
		
	var paginationCurrentItem = function(i) {
	
		pagElems.eq(i).addClass('active').siblings().removeClass('active');
	
	};

	var controls = function() {
	
		previous.hide();
	
		previous.click(function() {
		
			index--;
			
			if(index == 0) {

				index = 0;
				
				$(this).hide();
				
				
			
			}
			
			if(next.is(':hidden')) {
				
					next.show();
				
			}
			
			slides.eq(index).animate({
				opacity: 1
			}, 1000).
			siblings('div.slide').
			css('opacity', 0);
			paginationCurrentItem(index);
			
			return false;
		
		
		});
		
		next.click(function() {
		
			index++;
			
			if(index == 1) {
			
				previous.show();
			
			}
			
			if(index == slides.length) {
			
				index = slides.length - 1;
				
				$(this).hide();
			
			}
			
			slides.eq(index).animate({
				opacity: 1
			}, 1000).
			siblings('div.slide').
			css('opacity', 0);
			
			paginationCurrentItem(index);
			
			
			return false;
		
		
		});

	
	
	};

	this.init = function() {
	
		controls();
	
	};

}();

$(function() {
	Slideshow.init();
});