$(document).ready(function() {


$("#indi").click(function(){
	$(".imgAme").hide()
	$(".imgindi").show()
	$(".imgDub").hide()
});
 $("#amer").click(function(){
	$(".imgindi").hide()
	$(".imgAme").show()
	$(".imgDub").hide()
});
 $("#Dub").click(function(){
	$(".imgindi").hide()
	$(".imgAme").hide()
	$(".imgDub").show()
});
$("#tog").click(function(){
	$(".imgindi").show()
	$(".imgAme").show()
	$(".imgDub").show()
})



function displayPlaces() {
  var places = $( "#inputA" ).val();
$( "p" ).html(singleValues)
}
$( "select" ).change( displayPlaces );
displayPlaces();




// Taj Mahal. An immense mausoleum of white marble,
// built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, 
//the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.

//Indulgent, glamorous, and progressive are words that describe Dubai. This United Arab Emirates city is a luxury travel destination for leisure and business travellers. Dubai combines a modern metropolis with a timeless sensibility and Arabian flair.
// The motto on the Great Seal of the United States sums up the country. It means "out of many, one." Not only that, but the motto is in Latin, a language that not one American ever spoke natively! That's America. The United States is made up of countless parts, most of them from other places. Some are good, some not so good, but all of them are part of what makes up the country. These words represent that.



































});