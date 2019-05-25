
//DODAVANJE U LISTU
window.addEventListener("load",dodajListu);
function dodajListu()
{
	var niz, ispis, broj;

	niz	= new Array("Muško", "Žensko");
	
	ispis = "<select id='pol'>";
	ispis += "<option value='0'>Izaberite</option>";
	for(var i = 0; i < niz.length; i++)
	{	
		broj = i + 1;
		ispis += "<option value='"+broj+"'>" + niz[i] + "</option>";
	}
	ispis += "</select>";
	
	document.getElementById("lista").innerHTML = ispis;
	
}

function proveraForme()
{
	var imePrezime, regImePrezime, Pol, polIzbor, adresa, regAdresa, postanskiBroj, regPostanskiBroj, emailAdresa, regEmailAdresa, sifra, regSifra, Anketa, anketaIzbor, grad, regGrad;
	
	//DOHVATANJE VREDNOSTI
	imePrezime = document.getElementById("imePrezime").value;
	adresa = document.getElementById("adresa").value;
	grad = document.getElementById("grad").value;
	postanskiBroj = document.getElementById("postanskiBr").value;
	emailAdresa = document.getElementById("emailAdresa").value;
	sifra = document.getElementById("sifra").value;
	
	Pol = document.getElementById("pol");
	polIzbor = Pol.options[Pol.selectedIndex].text;
	
	Anketa = document.getElementsByName("anketa");
	anketaIzbor = "";
	for(var i = 0; i < Anketa.length; i++)
	{
		if(Anketa[i].checked)
		{
			anketaIzbor += Anketa[i].value;
			break;
		}
	}
	
	//REGULARNI IZRAZI
	regImePrezime = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,10}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,15})+$/;
	regAdresa = /^([A-ZČĆŽŠĐ][a-zčćžšđ]{2,15})(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,15})*(\s[\d]{1,3})$/;
	regGrad=/^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,10}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,10})?(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,10})?$/;
	regPostanskiBroj =/^[1 2 3][0-9]{4}$/;
	regEmailAdresa =/^[\w]+[\.\_\-\w\d]*\@gmail\.com$/;
	regSifra =/^[A-Z][\w\d]{5,}$/;
	
	var Greske = new Array();
	var Podaci = new Array();
	
	if(!regImePrezime.test(imePrezime))
	{
		Greske.push("Greska - ime i prezime!");
	}
	else
	{
		Podaci.push("Ime i prezime: " + imePrezime);
	}
	if(!regAdresa.test(adresa))
	{
		Greske.push("Greska - adresa!");
	}
	else
	{
		Podaci.push("Adresa: " + adresa);
	}
	if(!regGrad.test(grad))
	{
		Greske.push("Greska - Grad!");
	}
	else
	{
		Podaci.push("Grad: " + grad);
	}
	if(!regPostanskiBroj.test(postanskiBroj))
	{
		Greske.push("Greska - Postanski Broj!");
	}
	else
	{
		Podaci.push("Postanski Broj: " + postanskiBroj);
	}
	if(!regEmailAdresa.test(emailAdresa))
	{
		Greske.push("Greska - Email Adresa!");
	}
	else
	{
		Podaci.push("Email Adresa: " + emailAdresa);
	}
	if(!regSifra.test(sifra))
	{
		Greske.push("Greska - Sifra!");
	}
	else
	{
		Podaci.push("Sifra: " + sifra);
	}
	
	if(polIzbor =="Izaberite")
	{
		Greske.push("Izaberite Pol")
	}
	else
	{
		Podaci.push("POL: " + Pol.options[Pol.selectedIndex].text);
	}
	if(anketaIzbor == "")
	{
		Greske.push("Niste nam odgovorili na Anketu");
	}
	else
	{
		Podaci.push("Anketa: " + anketaIzbor);
	}	
	
	//ISPIS
	var rezultat ="<h1>OBAVESTENJE</h1>"
	rezultat += "<ul>";
	if(Greske.length != 0)
	{
		for(var i = 0; i < Greske.length; i++)
		{	
			rezultat += "<li style='color:#ff0000;'>" + Greske[i] + "</li>";
		}
	}
	else
	{
		for(var i = 0; i < Podaci.length; i++)
		{
			rezultat += "<li style='color:#808080;'>" + Podaci[i] + "</li>";
		}
	}
	
	rezultat += "</ul>";
	
	document.getElementById("div-levo").style.display = "block";
	document.getElementById("div-levo").innerHTML = rezultat;
}


































