
$("#indi").on("click", function(){
	$(".box3").hide()
	$(".box").show()
	$(".box2").hide()
	$("#par0").html("<p>" + para[0] + "</p>")
});
 $("#amer").on("click", function(){
	$(".box3").hide()
	$(".box").hide()
	$(".box2").show()
	$("#par1").html("<p>" + para[1] + "</p>")
});
$("#dub").on("click", function(){
	$(".box3").show()
	$(".box").hide()
	$(".box2").hide()
	$("#par2").html("<p>" + para[2] + "</p>")
 
});
$("#tog").on("click", function(){
	$(".box3").show()
	$(".box").show()
	$(".box2").show()
	$("#par0").html("<p>" + para[0] + "</p>")
	$("#par1").html("<p>" + para[1] + "</p>")
	$("#par2").html("<p>" + para[2] + "</p>")
});



var para = ["Taj Mahal An immense mausoleum of white marble built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.", "Times Square is a section of Manhattan, New York City. It is a major center for tourism, show business and commerce. The square is at the meeting point of Broadway, 7th Avenue and 42nd street. It is named for the New York Times which formerly had its main building there. "
, " In a city that is full of awe striking buildings, Dubai Marina stands out as the home to some of Dubai newest and most fascinating buildings and attractions where visitors can relax in comfort and luxury along the waterfront, Indulgent, glamorous, and progressive are words that describe Dubai. This United Arab Emirates city is a luxury travel destination for leisure and business travellers. Dubai combines a modern metropolis with a timeless sensibility and Arabian flair."]

var obj = {
	Location1:"Taj Mahal, Agar",
	Location2:"Times square, NewYork",
	Location3:"Marina, Dubai"
};

$( "#inputA" ).on( "blur", function() {
    alert( "Please select a place!" );
  
});
$('#og').click(function() {

   $('.down1').html('<p>' + obj.Location1 + '</p>');
   $('.down2').html('<p>' + obj.Location2 + '</p>');
   $('.down3').html('<p>' + obj.Location3 + '</p>');
})

function displayPlaces() {
  var places = $( "#inputA" ).val();
$( "p" ).html(displayPlaces)
}






















