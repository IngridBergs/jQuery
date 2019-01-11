//Wanneer de muis over een gekleurde knop beweegt, kleur de tekst.
//De tekst moet weer zwart worden als de muis de knop verlaat.

//      <div class="color green" id="green"></div>
//      <div class="color red" id="red"></div>
//      <div class="color blue" id="blue"></div>

$( ".green" ).mouseover(function() {
    $(".green").css("color" , "green");
});

$( ".red" ).mouseover(function() {
    $(".red").css("color" , "red");
});

$( ".blue" ).mouseover(function() {
    $(".blue").css("color" , "blue");
});


$( ".green" ).mouseout(function() {
    $(".green").css("color" , "black");
});

$( ".red" ).mouseout(function() {
    $(".red").css("color" , "black");
});

$( ".blue" ).mouseout(function() {
    $(".blue").css("color" , "black");
});
