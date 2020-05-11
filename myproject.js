
$("#indi").on("click", function(){
	$(".box3").hide()
	$(".box").show()
	$(".box2").hide()
});
 $("#amer").on("click", function(){
	$(".box3").hide()
	$(".box").hide()
	$(".box2").show()
});
$("#dub").on("click", function(){
	$(".box3").show()
	$(".box").hide()
	$(".box2").hide()
});
$("#tog").on("click", function(){
	$(".box3").show()
	$(".box").show()
	$(".box2").show()
});



var para = ["Taj Mahal An immense mausoleum of white marble built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.", "The motto on the Great Seal of the United States sums up the country. It means out of many, one. Not only that, but the motto is in Latin, a language that not one American ever spoke natively! That's America. The United States is made up of countless parts, most of them from other places. "
, "Indulgent, glamorous, and progressive are words that describe Dubai. This United Arab Emirates city is a luxury travel destination for leisure and business travellers. Dubai combines a modern metropolis with a timeless sensibility and Arabian flair."]
 for(i = 0 ;i < para.length;i++){
                $('.par').append('<p>'+ para[i]+'</p>');
            }







 


































