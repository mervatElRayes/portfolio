//this function to excute if click on about inside navbar ==> move to section about atc...
$(document).ready(function () {
  $('.nav-list li a').click(function(e) {
  	
  	var targetHref = $(this).attr('href');
	  
	$('html, body').animate({
		scrollTop: $(targetHref).offset().top
	}, 1000);
    
    e.preventDefault();
  });
});



 


// this for Hide button that scroll to Top .... and show this botton when the scroll arrive to  1000px
function scrollBtnFading() {
	var scrollTop = $('.to-top-btn');
	if ($(window).scrollTop() >= 1000) {
		if (scrollTop.is(':hidden')) {
			scrollTop.fadeIn(400);  
		}
	} else {
		scrollTop.fadeOut(300);
	}
}

// this for arrwo that refer for down ... into Home section
$('.arrwo').on('click', function () {
	console.log('clicked')
	$('html, body').animate({
		scrollTop: 700
	}, 1000);
});

 $(function () {
 	"use strict";
 	scrollBtnFading();
	$(window).scroll(function () {
		scrollBtnFading();
	});
	
	// click on scroll-to-top button to go up
	$('.progressbar').click(function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

	});
	 
	 
		// start fixed menu ..(into home section)

		$('.fixed-menu .fa-gear').on('click', function (){
			$(this).parent('.fixed-menu').toggleClass('is-visible');
			if($(this).parent('.fixed-menu').hasClass('is-visible')){
				$(this).parent('.fixed-menu').animate({
					left:0	
				},500);
				
					
				//$('body').animate({
					//paddingLeft:'220px'	
				//},500);
				
				
			}else{
				$(this).parent('.fixed-menu').animate({
					left:'-220px'
				},500);
				//$('body').animate({
				//	paddingLeft:0	
				//},500);
				
			}
			
		});

	// thumbnails Gallery
	// it is very important about if add or remove img dynamic .. this gallery into "portfolio" section
	var numberOfThumbnails = $('.thumbnails').children().length,
		marginBetweenThumbnails = '.5',
		totalBetweenThumbnails = (numberOfThumbnails - 1) * marginBetweenThumbnails,
		thumbnailsWidth = (100 - totalBetweenThumbnails) / numberOfThumbnails;
	$('.thumbnails img').css({
		'width': thumbnailsWidth + '%',
		'margin-right': marginBetweenThumbnails + '%',
	});

	$('.thumbnails img').on('click', function () {
		$(this).addClass('selected').siblings().removeClass('selected');
		$('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(700);
	});

	// chevron-right and left
	$('.master-img .fa-chevron-right').on('click', function () {

		if ($('.thumbnails .selected').is(':last-child')) {
			$('.thumbnails img').eq(0).click();

		} else {
			$('.thumbnails .selected').next().click();
		}
	});

	$('.master-img .fa-chevron-left').on('click', function () {

		if ($('.thumbnails .selected').is(':first-child')) {
			$('.thumbnails img:last').click();

		} else {
			$('.thumbnails .selected').prev().click();
		}


	 

	//Add active class on navbar link and remove from siblings
	$('nav .nav-list li a').click(function () {
		$(this).addClass('active').parent().siblings().find('a').removeClass('active');
	});
});
		// Type Write Effects ... write or increase letter automatic....  "HI Iam FreeLancer"(into home section)
		var theText2 = $('.typer').data('text'),

			theText2Length = theText2.length,
			n = 0,
			theTyper = setInterval(function () {

				$('.typer').each(function () {
					$(this).html($(this).html() + theText2[n]);
				});

				n += 1;

				if (n >= theText2Length) {

					clearInterval(theTyper);
				}

			}, 80);

		// End TYper


		//start clientSpeak section..  that content of  yellow Lump "lump" 
		$('details summary i').on('click', function () {
			$(this).toggleClass('fa-chevron-circle-up fa-chevron-circle-down').next('p').slideToggle();
		});
 });
	

 	
	
	// change colors ..(it into fixed menu)
		$('.change-colors li').on('click', function () {
			$('body').attr('data-default-color', $(this).data('color'));
		});
