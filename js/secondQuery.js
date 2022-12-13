$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
console.log(this.scrollY)
    if (this.scrollY > 500) {
        
    $(".scroll-up-btn").addClass("show");

  } else {
    $(".scroll-up-btn").removeClass("show");
 }

  });
// slider Up script
$(".scroll-up-btn").click(function () {
  $("html").animate({scrollTop: 0});
});
  
  
// start  pragraph include button(show & hide) into services section


// Get all the elements from the page 

$('#textButton').on('click', function (){

	// Get all the elements from the page 
	var points =  
		document.getElementById("points"); 

	var showMoreText = 
		document.getElementById("moreText"); 

	var buttonText = 
		document.getElementById("textButton"); 

	// If the display property of the dots  
	// to be displayed is already set to  
	// 'none' (that is hidden) then this  
	// section of code triggers 
	if (points.style.display === "none") { 

		// Hide the text between the span 
		// elements 
		showMoreText.style.display = "none"; 

		// Show the dots after the text 
		points.style.display = "inline"; 

		// Change the text on button to  
		// 'Show More' 
		buttonText.innerHTML = "Show More"; 
	} 

	// If the hidden portion is revealed, 
	// we will change it back to be hidden 
	else { 

		// Show the text between the 
		// span elements 
		showMoreText.style.display = "inline"; 

		// Hide the dots after the text 
		points.style.display = "none"; 

		// Change the text on button 
		// to 'Show Less' 
		buttonText.innerHTML = "Show Less"; 
	} 


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

			// change colors ..(it into fixed menu)
			$('.change-colors li').on('click', function (){
				$('body').attr('data-default-color', $(this).data('color'));
			});



});





