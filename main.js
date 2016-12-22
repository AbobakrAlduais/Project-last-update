var restAr1={name:"Sufra Restaurant",address:"Amman, Rainbow Street",tel:"+962 6 461 1468",type:"Arabic"}
var restAr2=MakeRest("Hashem","Amman,Al-Amir Mohammed St Downtown","+962 6 463 6440","Arabic")
var restAr3=MakeRest("Tawaheen al-Hawa","Amman,Wasfi al-Tal Rd","+962 6 534 9986","Arabic")
var restAr4=MakeRest("Al-Quds Restaurant","Amman,Downtown","4630168","Arabic")
var restAr5=MakeRest("Bab al-Yemen","Amman, University Street","+962 6 534 0834","Arabic")
var arabic = [restAr1,restAr2,restAr3,restAr4,restAr5];
/////
var restAsian1=MakeRest("Oishi","Amman,Taj Mall‬ | Prince Hashim Bin Al Hussein 693","+962 7 9779 0999","Asian");
var restAsian2=MakeRest("China Town","Amman,Queen Noor Street","+962 6 569 6511","Asian")
var restAsian3=MakeRest("Ishi Noodles and Rice","Amman, Ali Nasuh Al Tahir 62‬","+962 6 585 2234","Asian");
var restAsian4=MakeRest("Islamic Chinese Food","Amman,  Swelieh","+962 6 569 6555","Asian");
var restAsian5=MakeRest("Yoshi","Amman, Methaqal Al Fayez Street","+962 6 464 0903","Asian");
var asian=[restAsian1,restAsian2,restAsian3,restAsian4,restAsian5];
///

var restWestern1=MakeRest("Brisket","Amman, Shmisani, Next to Abella Superstores","+962 7 9950 6020","Western");
var restWestern2=MakeRest("Chestnut Restaurant & Pub","Amman, Salma Bin Khalal Street ","+962 7 7500 0075","Western");
var restWestern3=MakeRest("Blue Fig","Amman, Prince Hashem bin al-Hussein St, Abdoun","5928800","Western");
var restWestern4=MakeRest("Fatty Dab's Burger Shack","Amman, Abdoun | Next to Abdoun Mall","+962 0 9950 6020","Western");
var restWestern5=MakeRest("Firefly Burger","Amman, Rainbow St","+962 6 585 1134","Western");
var western=[restWestern1,restWestern2,restWestern3,restWestern4,restWestern5];


function MakeRest(name,address,tel,type){
	return{
		name:name,
		address:address,
		tel:tel,
		type:type
	}
}


function appentxt(){
    var name = $("#name").val();
    var com= $("#Comment").val();
    $("#nt").append( "Name :").css("font-size","22px")
    $("#nt").append( name).css("font-size","20px")
    $("#comm").append( "Commment :").css("font-size","20px")
    $("#comm").append( com).css("font-size","22px")
}
function displayinfo(obj){
    $('#a1').append("<p>" + obj['address']+"</p>" ).css("font-weight","bold");
    $('#a1').append("<p>" + obj['tel']+"</p>" ).css("font-size","22px");
}










$("#head").css("color","ghostwhite");
$("#wilcome").css("color","ghostwhite");
$("#1").css({ width: '300px', 'padding-top': '30px', 'padding-bottom': '30px' });
$("#1").css("background-color","darkgreen");
$("#2").css("background-color","Maroon");

$("#2").css({ width: '300px', 'padding-top': '30px', 'padding-bottom': '30px' });
$("#3").css({ width: '300px', 'padding-top': '30px', 'padding-bottom': '30px' });
$("#1").css("font-size","28px")
$("#2").css("font-size","28px")
$("#3").css("font-size","28px")
$("#head").css("font-size","70px")
$(".caret").css({ width: '10px'});
$("#dis").css("font-size","70px");
$("#Yoshi").attr("width","400");








