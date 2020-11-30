

$(document).ready(function(){
    //Các phương thức jQuery nằm trong này
});



/*--------------------------------------------------------------------------*/
/*KHOI TIN TRAN XUONG*/
$(function() {
	
	$(".tran-xuong-xs").hide();
	$(window).resize(function(){

		var width = $(window).width();
		console.log(width);

		if (width <= 640){
			$(".tran-xuong-xs").show();
		}else{

			$(".tran-xuong-xs").hide();
		}

		if (width <= 640){
			$(".khoi-tin-theo-dm__tom-tat").hide();
		}else{
			$(".khoi-tin-theo-dm__tom-tat").show();
		}

	});	
});

/*END KHOI TIN TRAN XUONG*/
/*--------------------------------------------------------------------------*/








/*--------------------------------------------------------------------------*/
/*THOI TIET */
$(document).ready(function(){
	$(".thoi-tiet__khu-vuc ul li").slideUp();

	$(".thoi-tiet  .thoi-tiet__tt").click(function(event) {
		$(".thoi-tiet__khu-vuc ul li").slideToggle(100);
	});


	// $(".thoi-tiet__khu-vuc ul li").click(function(event) {
	// 	$(".thoi-tiet__khu-vuc ul li").slideUp(100);
	// });

	$('.thoi-tiet__ct').hide();

	$('.thoi-tiet__khu-vuc ul li').click(function(){
		$(".thoi-tiet__khu-vuc ul li").slideUp(100);
		$('.thoi-tiet__ct').show(0);
		var tt= $(this).data('thoitiet');
			  // console.log(tt);
			  var ten= $(this).text();
			  $('.thoi-tiet__ct h4').text(ten);

			  $('.thoi-tiet__ct p').each(function() {
			  	if($(this).hasClass(tt))
			  	{
			  		$(this).show(300);
			  	}
			  	else 
			  	{
			  		$(this).hide(300);
			  	}

			  });

			});
});
/*THOI TIET */
/*----------------------------------------------------------------------------------*/




/*----------------------------------------------------------------------------------*/
/*ty-gia */
	//cach 1
	$(document).ready(function(){
		$('.ty-gia__trong-nuoc-va-qt > .ty-gia__trong-nuoc').show();
		$('.ty-gia__trong-nuoc-va-qt > .ty-gia__qt').hide();
	 // $('.ty-gia__title--sua h4').click(function(){
	 // 	$('.ty-gia__qt').hide();
	 // 	$('.ty-gia__trong-nuoc').show();
	 // 	$('.ty-gia__trong-nuoc-va-qt').slideToggle();

	 // });

	//$('.ty-gia__trong-nuoc').hide();
	$('.ty-gia__title-qt').click(function(){

		$('.ty-gia__trong-nuoc').hide();		
		$('.ty-gia__qt').show();

	});

	$('.ty-gia__title-trong-nuoc').click(function(){

		$('.ty-gia__trong-nuoc').show();		
		$('.ty-gia__qt').hide();

	});

/*
cach 2
$('.ty-gia__title h4').click(function(){
	$('.ty-gia__trong-nuoc-va-qt').slideToggle();

});

$('.ty-gia__trong-nuoc-va-qt').hide();
$('.ty-gia__trong-nuoc').fadeIn();
$('.ty-gia__qt').fadeOut();
$('.ty-gia__title-qt').click(function(){

	$('.ty-gia__trong-nuoc').fadeOut();
	$('.ty-gia__qt').fadeIn();
	
});


$('.ty-gia__title-trong-nuoc').click(function(){
	$('.ty-gia__trong-nuoc').fadeIn();
	$('.ty-gia__qt').fadeOut();
	
});
//$(this).next().slideToggle();
*/




});

	/* end ty-gia */

	/*------------------------------------------------------------------------------*/






	/*----------------------------------------------------------------------------------*/
	/*Cổ phiếu bảo hiểm va ngan hang*/ 
//CACH 1
// $('.co-phieu-b-h .table-tt-b-h').slideUp();
// $('.co-phieu-n-h .table-tt-n-h').slideUp();

// $('.co-phieu-b-h__title h4').click(function(){
// 	$('.table-tt-b-h').slideToggle();

// });

// $('.co-phieu-n-h__title').click(function(){
// 	//$('.table-tt-n-h').slideToggle();
// 	$(this).next().slideToggle();
// });



// CACH 2
$(document).ready(function(){
	$('.table-tt-n-h, .table-tt-b-h').slideUp();
	$(".khoi-tt-tai-chinh > .div-tt").click(function() {
		// Cancel the siblings
		$(this).siblings(".div-tt").children(".table-tt-n-h, .table-tt-b-h").slideUp();
		// Toggle the item
		$(this).children(".table-tt-n-h, .table-tt-b-h").slideToggle("ease-out");
		//$('html').animate({scrollTop: $(this).offset().top},900,"easeInOutExpo");

	});
});

/* end Cổ phiếu bảo hiểm va ngan hang*/
/*----------------------------------------------------------------------------------*/











/*----------------------------------------------------------------------------------*/
/*NÚT LÊN ĐẦU TRANG*/
$(function(){
	$(".len-dau-trang").hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300 ){
			$(".len-dau-trang").fadeIn();
		}else{
			$(".len-dau-trang").fadeOut();
		}
	});
	$(".len-dau-trang").click(function () {
		$("html").animate({scrollTop: 0}, "slow");
	});
});


/*NÚT LÊN ĐẦU TRANG*/
/*----------------------------------------------------------------------------------*/






/*----------------------------------------------------------------------------------*/
/*QUANG CAO fixed*/
$(function(){


	if ($('.banner-fixed_f').length) {
		var img= $('.banner-fixed_f');
		var imgtop=$('.banner-fixed_f').offset().top;
		var imghight=$('.banner-fixed_f').height();

		$(window).scroll(function() {
			var footer_t=$('.footer').offset().top-imghight-20;
			var window_h=$(window).scrollTop();

			if (imgtop < window_h) {
				img.css({
					position: 'fixed',
					top: 50,
					
					// right: 135
				});

			}else{
				img.css('position', 'static');
			}

			if (footer_t < window_h) {
				var t_cach=footer_t-window_h;
				img.css({
					top:t_cach
				});
			}

		});



	}

});

/*QUANG CAO fixed*/


/*---------------------------------------------------------------------------------------*/


/*
$(function(){



	$(window).resize(function(){

		var width = $(window).width();
		console.log(width);


	if (width <= 480){
			$('.tin-dau-trang-dl-col-left').addClass('responsive_480');
		}
		else{
			$('.tin-dau-trang-dl-col-left').removeClass('responsive_480');
		}


		if (width <= 640){
			$('.tin-dau-trang-dl-col-left').addClass('responsive_640');
		}
		else{
			$('.tin-dau-trang-dl-col-left').removeClass('responsive_640');
		}

	

		if (width <= 768){
			$('.tin-dau-trang-dl-col-left').addClass('responsive_768');
		}
		else{
			$('.tin-dau-trang-dl-col-left').removeClass('responsive_768');
		}


		if (width <= 991){
			$('.tin-dau-trang-dl-col-left').addClass('responsive_991');
		}
		else{
			$('.tin-dau-trang-dl-col-left').removeClass('responsive_991');
		}


		if (width <= 1991){
			$('.tin-dau-trang-dl-col-left').addClass('responsive_1991');
		}
		else{
			$('.tin-dau-trang-dl-col-left').removeClass('responsive_1991');
		}


	});

});
*/




/*---------------------------------------------------------------------------------------*/



/*
$(function(){
	if ($('.banner-fixed_f').length) {
		var img= $('.banner-fixed_f');
		var imgtop=$('.banner-fixed_f').offset().top;
		var imghight=$('.banner-fixed_f').height();
		$(window).scroll(function() {
			var footer_t=$('.footer').offset().top-imghight-20;
			var window_h=$(window).scrollTop();

			if (imgtop < window_h) {
				img.css({
					position: 'fixed',
					top: 50,
					
					// right: 135
				});
			}else{
				img.css('position', 'static');
			}
			if (footer_t < window_h) {
				var t_cach=footer_t-window_h;
				img.css({
					top:t_cach
				});
			}
		});
	}

});
*/

$(function(){
	/*if ($('.content-kh').length) {
		var hoc= $('.content-kh');
		var hoc_w=$('.content-kh').width();
		$(window).resize(function() {
			if (hoc_w <= 991) {
				hoc.css({
					position: 'fixed',
					top: 150
				});
			}else{
				hoc.css('position', 'static');
			}
			
		});
	}
	*/

	var rong= $('.content-kh');
	$(window).resize(function() {
		if (rong <= 991) {
			rong.addClass('content-kh_fex');
		}else{
			rong.removeClass('content-kh_fex');
		}
		
	});
});


















/*---------------------------------------------------------------------------------------*/
