//Wanneer je op een kleurknop klikt, verander je de kleur van de tekst van de div.


//<div class="color green" id="green"></div>
//<div class="color red" id="red"></div>
//<div class="color blue" id="blue"></div>


$( ".green" ).click(function() {
    $("#text").css("color" , "green");
});

$( ".red" ).click(function() {
    $("#text").css("color" , "red");
});
$( ".blue" ).click(function() {
    $("#text").css("color" , "blue");
});
