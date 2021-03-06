// jQuery(document).ready(function($){
// 	$('#drinks_carousel').carousel({
// 		interval: false,
// 	});

// 	$('#food_carousel').carousel({
// 		interval: false,
// 	});
// });

//aos init + https://github.com/cferdinandi/smooth-scroll init
jQuery(document).ready(function($){
  AOS.init();
	var scroll = new SmoothScroll('a[href*="#"]');
});


// // contact form button animation
// jQuery(document).ready(function($){
// 	jQuery('.btn_wrap').hover(
// 		function(){
// 			$(this).addClass('animate');
// 		}, function(){
// 			$(this).removeClass('animate');
// 		}
// 	);
// });

// // menu dropdown
// jQuery(document).ready(function($){
// 	$('#menu-item-139').hover(
// 		function(){
// 			show_menu( $(this) );
			
// 		}, function(){
// 			hide_menu( $(this) );
// 		}
// 	);


// 	function show_menu(elem){
// 		var menu = elem.find('.sub-menu');
// 		menu.addClass('show');
// 	}

// 	function hide_menu(elem){
// 		var menu = elem.find('.sub-menu');
// 		menu.removeClass('show');
// 	}
// });

// mob menu link animation
// jQuery(document).ready(function($){
// 	$(function(){
// 		$('.menu_nav a').on('click',function(e){
// 	    	e.preventDefault();
// 	    	$('html, body').animate({
// 	      		scrollTop: $( $(e.target).attr("href") ).offset().top - 30
// 	    	}, 1000);
// 	  	});
// 	});
// });

jQuery(document).ready(function($){
	var option; 
	var blank;

	if( $('#booking_form').length ){
		$('#date input')
			.prop('readonly', true)
			.datepicker({ dateFormat: 'dd-mm-yy' });
	}

	$('#date input').change(function(){
		date_function();
	});

	$('#time select').on('click', function(){
		date_function();
	});

	function date_function(){
		//getting the date
		var date_str = $('#date input').val().split('-');
		var date_month = date_str[1] - 1;
		var date = new Date(date_str[2], date_month, date_str[0]);
		var select = $('#time select');

		if( date_str[0] === '22' && date_str[1] === '03' ) {
			option = 'removed';

			$('#time select option[value="17:00"]').remove();
			$('#time select option[value="17:30"]').remove();
			$('#time select option[value="18:30"]').remove();
			$('#time select option[value="19:00"]').remove();
			$('#time select option[value="19:30"]').remove();
			$('#time select option[value="20:30"]').remove();
			$('#time select option[value="21:00"]').remove();
			$('#time select option[value="21:30"]').remove();
			$('#time select option[value="22:00"]').remove();
			$('#time select option[value="22:30"]').remove();
		} else if( date_str[0] === '21' && date_str[1] === '06' ) {
			option = 'removed';

			$('#time select option[value="17:00"]').remove();
			$('#time select option[value="17:30"]').remove();
			$('#time select option[value="18:30"]').remove();
			$('#time select option[value="19:00"]').remove();
			$('#time select option[value="19:30"]').remove();
			$('#time select option[value="20:30"]').remove();
			$('#time select option[value="21:00"]').remove();
			$('#time select option[value="21:30"]').remove();
			$('#time select option[value="22:00"]').remove();
			$('#time select option[value="22:30"]').remove();
		} else if(date.getDay() === 5 || date.getDay() === 6 ){ // if friday / saturday
			option = 'removed';

			$('#time select option[value="17:00"]').remove();
			$('#time select option[value="17:30"]').remove();
			$('#time select option[value="18:30"]').remove();
			$('#time select option[value="19:00"]').remove();
			$('#time select option[value="19:30"]').remove();
			$('#time select option[value="20:30"]').remove();
			$('#time select option[value="21:00"]').remove();
			$('#time select option[value="21:30"]').remove();
			$('#time select option[value="22:00"]').remove();
			$('#time select option[value="22:30"]').remove();
		}else if( ( date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 4 || date.getDay() === 0 ) && option === 'removed'){
			option = 'added';

			$('#time select option[value="16:30"]').remove();
			$('#time select option[value="18:00"]').remove();
			$('#time select option[value="20:00"]').remove();

			select.append( $("<option></option>")
					.attr("value", '16:30')
					.text('16:30') ); 
			select.append( $("<option></option>")
					.attr("value", '17:00')
					.text('17:00') ); 
			select.append( $("<option></option>")
					.attr("value", '17:30')
					.text('17:30') ); 
			select.append( $("<option></option>")
					.attr("value", '18:00')
					.text('18:00') ); 
			select.append( $("<option></option>")
					.attr("value", '18:30')
					.text('18:30') ); 		
			select.append( $("<option></option>")
					.attr("value", '19:00')	
					.text('19:00') ); 
			select.append( $("<option></option>")
					.attr("value", '19:30')
					.text('19:30') ); 	
			select.append( $("<option></option>")
					.attr("value", '20:00')
					.text('20:00') );
			select.append( $("<option></option>")
					.attr("value", '20:30')
					.text('20:30') ); 
			select.append( $("<option></option>")
					.attr("value", '21:00')
					.text('21:00') ); 
			select.append( $("<option></option>")
					.attr("value", '21:30')
					.text('21:30') ); 
			select.append( $("<option></option>")
					.attr("value", '22:00')
					.text('22:00') ); 
			select.append( $("<option></option>")
					.attr("value", '22:30')
					.text('22:30') ); 
		}	
	}
	$("#close-covid").click(function(){
		$(".grey-background").css("display","none");
	})
});















































































































