window.onload = function()
{
	document.getElementById("prikazi").addEventListener("mouseover",oboj);
	document.getElementById("prikazi").addEventListener("mouseout",vratiBoju);
	document.getElementById("prikazi").addEventListener("click",nestani);
	

}

function oboj()
{
	document.getElementById("prikazi").style.color="#808080";
	document.getElementById("prikazi").style.borderColor="#808080";
}
function vratiBoju()
{
	document.getElementById("prikazi").style.color="#000000";
	document.getElementById("prikazi").style.borderColor="#000000";
}
function nestani()
{
	document.getElementById("prikazi").style.display="none";
}
//Za taster KORPU
function ispisiAlert()
{
	alert("Izvinjavamo se sajt je jos u izradi nije moguce dodati u korpu. Hvala");
}
//Objekat Josona 
var satovi =[
	{
		"cena":"280$",
		"naziv":"Kristalni Rozi Sat",
		"slike":
			{
			  "src":"images/sat1.jpg",
			  "alt":"sat1"
			}
	},
	{
		"cena":"249$",
		"naziv":"Kosmicki Crni Sat ",
		"slike":
			{
			  "src":"images/sat2.jpg",
			  "alt":"sat2"
			}
	},
	{
		"cena":"250$",
		"naziv":"Sat Od Kristalnog Peska",
		"slike":
			{
			  "src":"images/sat3.jpg",
			  "alt":"sat3"
			}
	},
	{
		"cena":"235$",
		"naziv":"Kristalni Labud",
		"slike":
			{
			  "src":"images/sat4.jpg",
			  "alt":"sat4"
			}
	},
	{
		"cena":"230$",
		"naziv":"Zvezdani Sat",
		"slike":
			{
			  "src":"images/sat5.jpg",
			  "alt":"sat5"
			}
	},
	{
		"cena":"269$",
		"naziv":"Prozirno Plav",
		"slike":
			{
			  "src":"images/sat6.jpg",
			  "alt":"sat6"
			}
	},
	{
		"cena":"215$",
		"naziv":"Sivi Kosmicki Sat",
		"slike":
			{
			  "src":"images/sat7.jpg",
			  "alt":"sat7"
			}
	},
	{
		"cena":"188$",
		"naziv":"Elegantan Sat",
		"slike":
			{
			  "src":"images/sat8.jpg",
			  "alt":"sat8"
			}
	},
	{
		"cena":"210$",
		"naziv":"Sat Sa Zlatnim Okvirom",
		"slike":
			{
			  "src":"images/sat9.jpg",
			  "alt":"sat9"
			}
	},
	{
		"cena":"300$",
		"naziv":"Divni Mali Kristalni Sat",
		"slike":
			{
			  "src":"images/sat10.jpg",
			  "alt":"sat10"
			}
	}
	
];
//ISPISIVANJE OBJEKTA
function ispisSatova()
	{
var ispis='';
		for(var i=0; i<satovi.length; i++)
		{
			ispis+='<div class="artikli">'
					+'<a href="'+satovi[i].slike.src+'"><img src="'+satovi[i].slike.src+'" alt="'+satovi[i].slike.alt+'"/></a>'
					+'<h2 class="cena">'+satovi[i].cena+'</h2>'
					+'<p class="naziv">'+satovi[i].naziv+'</p>'
					+'<input type="button" value="DODAJ U KORPU" class="korpa" onclick="ispisiAlert();"/>'
					+'</div>'
		}
		
		document.getElementById("div-desno").innerHTML +=ispis;
}
ispisSatova();
















