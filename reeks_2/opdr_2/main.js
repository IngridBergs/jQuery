//Met een dubbelklik, verander de breedte van de afbeelding naar 500px;

// <img src="image.jpg" id="image" />

$("image").dblclick(function(){
  //ik dacht eerst dat het zoiets in de trend zou moeten zijn
  //$("image").css("width" , 500px);
  //opzoekwerk https://www.tutorialspoint.com/How-to-set-width-and-height-of-an-element-using-jQuery

    $("image").width(500);
});
