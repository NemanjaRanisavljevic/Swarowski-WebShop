$(document).ready(function(){
$("#prikazi").click(function(){
    $(".nestani").slideDown();});
	slideShow();
//PRECICE PRODAVNICA
$(".precice ul li").hover(
	function(){$(this).css("borderColor","#000000");},
	function(){$(this).css("borderColor","#808080");}
);
$(".precice ul li a").hover(
	function(){$(this).css("color","#000000");},
	function(){$(this).css("color","#808080");}
);



});	


function slideShow() {
  var current = $('#slajder .show');
  var next = current.next().length ? current.next() : current.parent().children(':first');
  
  current.hide().removeClass('show');
  next.fadeIn().addClass('show');
  
  setTimeout(slideShow, 5000);
}
























