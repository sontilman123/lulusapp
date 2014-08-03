window.addEventListener("load",function() {
  
  // Set a timeout...
  setTimeout(function(){
	// Hide the address bar!
	window.scrollTo(0, 1);
  }, 0);
});
$('.menu' ).hide();   
$('.options li:first-child').click(function(){
	$(this).toggleClass('active');      			
	$('.menu').toggle();  		
	$('.options li:first-child').removeClass('active'); 		
});
$('.content').click(function(){
	$('.menu' ).hide();   
	$('.options li:first-child').removeClass('active');
});