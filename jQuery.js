$(document).ready(function(){
$("#prikazi").click(function(){
    $(".nestani").slideDown();});
	slideShow();
	
//Pozivanje preko Ajaksa fajl ogrlica.json
$.ajax({
	url:'ogrlica.json',
	type:'GET',
	success:function(data)
	{
		//console.log(data);
		var ispis='';
		for(var i=0; i<data.length; i++)
		{
			ispis+='<div class="artikli">'
					+'<a href="'+data[i].slike.src+'"><img src="'+data[i].slike.src+'" alt="'+data[i].slike.alt+'"/></a>'
					+'<h2 class="cena">'+data[i].cena+'</h2>'
					+'<p class="naziv">'+data[i].naziv+'</p>'
					+'<input type="button" value="DODAJ U KORPU" class="korpa" onclick="ispisiAlert();"/>'
					+'</div>'
		}
		
		$("#div-desno").append(ispis);
		
		
	},
	error:function(greske)
	{
		 console.log(greske);
	}
});

//PRECICE PRODAVNICA
$(".precice ul li").hover(
	function(){$(this).css("borderColor","#000000");},
	function(){$(this).css("borderColor","#808080");}
);
$(".precice ul li a").hover(
	function(){$(this).css("color","#000000");},
	function(){$(this).css("color","#808080");}
);

//EKSPANDIRAJUCI MENI

$("#selekcija > li > ul").hide().click(function(e){e.stopPropagation();});
	$("#selekcija > li").click(function(){
		
		$(this).find("ul").slideToggle();
		
	});
	
//BROJ PRIKAZA
$("#jednaKolona").click(function(e){
	e.preventDefault();
	 $(".artikli").css("width","100%");
});
$("#dveKolone").click(function(e){
	e.preventDefault();
	 $(".artikli").css("width","47%");
});
$("#triKolone").click(function(e){
	e.preventDefault();
	 $(".artikli").css("width","30%");
});

//CENA
$("#rastuca").click(function(e){
	 e.preventDefault();
	 var niz=$(".artikli");
	 niz.sort(function(a,b)
	 {
		 a=parseInt($(a).find(".cena").text());
		 b=parseInt($(b).find(".cena").text());
		if(a>b){return 1;}
		 else if(a<b){return -1;}
		 else{return 0;}
	 });
	 
	$("#div-desno").append(niz);
});
$("#opadajuca").click(function(e){
	 e.preventDefault();
	 var niz=$(".artikli");
	 niz.sort(function(a,b)
	 {
		 a=parseInt($(a).find(".cena").text());
		 b=parseInt($(b).find(".cena").text());
		if(a>b){return -1;}
		 else if(a<b){return 1;}
		 else{return 0;}
	 });
	 
	$("#div-desno").append(niz);
});

//NAZIV
$("#aZ").click(function(e){
	e.preventDefault();
	var niz=$(".artikli");
	niz.sort(function(a,b)
	 {
		a=$(a).find(".naziv").text();
		b=$(b).find(".naziv").text();
		if(a>b){return 1;}
		else if(a<b){return -1;}
		else{return 0;}
	});
	$("#div-desno").append(niz);
});
$("#Za").click(function(e){
	e.preventDefault();
	var niz=$(".artikli");
	niz.sort(function(a,b)
	 {
		a=$(a).find(".naziv").text();
		b=$(b).find(".naziv").text();
		if(a>b){return -1;}
		else if(a<b){return 1;}
		else{return 0;}
	});
	$("#div-desno").append(niz);
});
//VANILABOX
//$(".artikli a").vanillabox();
$(document).on("click",'.artikli a',function(){$('.artikli a').vanillabox()});

});	


function slideShow() {
  var current = $('#slajder .show');
  var next = current.next().length ? current.next() : current.parent().children(':first');
  
  current.hide().removeClass('show');
  next.fadeIn().addClass('show');
  
  setTimeout(slideShow, 5000);
}























