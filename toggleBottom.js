(function($){
	$.fn.toggleBottom = function(options){
		var toggleBottom = $(this);
		var defaults = {
			cssBackground: '#f8f8f8',
			cssPadding: '15px',
			cssBorder: '#e7e7e7 1px solid',
			firstName: ['Nguyễn','Trịnh','Vũ','Hoàng','Đặng','Trần','Lê','Phạm','Huỳnh','Kim','Hồ','Ngô','Dương','Lý','Phùng','Đỗ','Võ','Phan'],
			lastName: ['Kỳ Anh','Hữu Phước','Hà Thu','Hạnh Ly','Hoàng Huy','Hải Yến','Ngọc Minh','Chu','Trinh','Hà','Tâm','Hạnh','Phúc','Thiên','Tuệ Minh','Thị Lan','Minh Phước','Kiều Mai','Lan Anh','Văn Toản','Quốc Toản','Văn Tiến','Hoài Nam','Huyền','Ngọc Thạch','Minh Sơn','Hồng Hoa','Hồng Hạnh','Minh Hằng']
		};
		var settings = $.extend({},defaults,options);
		
		//init
		var html =
			'<div id="header">'
				+'<div id="header-wrap">'
						+'<div class="message"></div>'				
				+'</div>'
			+'</div>'
		;
		
		
	
		$(this).append(html).hide();
		$(this).css({
			'background': settings.cssBackground,
			'width': '100%',
			'border-top': settings.cssBorder,
			'padding-top': settings.cssPadding,
			'padding-bottom': settings.cssPadding,
			'position': 'fixed',
			'bottom': '0',
			'box-sizing': 'border-box',
		});
		//end of init
		
		//run
		function run(){
			var name = settings.firstName[Math.floor(Math.random() * settings.firstName.length)]+' '+settings.lastName[Math.floor(Math.random() * settings.lastName.length)];
			var message = '<a href="#dangkymuahang" class="buynowheader"><b>'+name+'</b> vừa đặt hàng thành công. Bạn có muốn <b>mua ngay</b> hôm nay ?	<b style="background-color:#ffc846;color:#000;">Ấn vào đây để đặt mua</b></a>';
			toggleBottom.find('.message').html(message);
			toggleBottom.fadeIn().delay(500000).fadeOut();
			var counter = $('.customerCounter').text();
			counter++;
			$('.customerCounter').text(counter);
		}
		
		(function loop(){
			var rand = Math.round(Math.random() * 50000);
			setTimeout(function(){
				run();
		        loop();
			},rand);
		}());
		//end of run
	}
})(jQuery);