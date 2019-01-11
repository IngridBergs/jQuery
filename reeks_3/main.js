//Oefening 1

//Bouw een html-pagina met een knop en een tekstveld waarin het aantal klikken op de knop wordt weergegeven.
//hoe bereken je aantal klikken op de knop , aantal counts ?
//inspiratie op deze pagina
//https://stackoverflow.com/questions/23543015/jquery-how-to-show-number-of-clicks
//Ik geraak even niet verder ...


/*var count=0;
$( "#button1" ).click(function(){
    count++;
    $(this).text(count);
    $("#text1").val(count);


});*/


//Oefening 2

//Bouw een html pagina met een "+" knop, een "-" knop en een tekstveld waarin het aantal
// staat die verhoogd of verlaagd wordt volgens de aangeklikte knoppen.


//+ knop
/*
var count=0;
$( "#plus" ).click(function(){
    count++;
    //$(this).text(count);
    $("#text2").val(count);
});


//- knop

var count=0;
$( "#minus" ).click(function(){
    count--;
    //$(this).text(count);
    $("#text2").val(count);
});
*/



//Oefening 3

/*Bouw een html pagina met een knop en een tekstveld. Het doel is om een getal tussen 0 en 100 te vinden.
Voor elk antwoord antwoordt de pagina:

    meer
    minder
    juist

Wanneer het antwoord is gevonden, krijgen we het aantal tests dat we hebben nodig gehad te zien via een alert.*/

//Genereer een random getal tussen 0 en 100
/*var randomNumber = Math.floor(Math.random() * 101);


//click higher
var count=0;
$( "#button2" ).click(function(){
    count++;
    $("#text3").val(count);
});

//Vraag getal aan user
var guessedNumber = "";

//Pagina geeft telkens boodschap door
//more ,less of correct!
var message = "";


if(guessedNumber > randomNumber){ message="should be less"; }
else if(guessedNumber < randomNumber){ mesasage="should be more"; }
else (guessedNumber == randomNumber){ alert("aantal pogingen + " + count);}*/


















//Oefening 4

/*Bouw een html pagina met 5 knoppen en een rechthoek. Elke knop veroorzaakt een actie op de rechthoek.

    Knop 1: verhoogt de hoogte met 10px, als deze groter is dan 100px, wordt de hoogte gereset naar 10px.
    Knop 2: verandert de rechthoek in groen
    Knop 3: reset de oorspronkelijke kleuren
    Knop 4: Verwijdert de rechthoek
    Knop 5: verschijnt weer de rechthoek*/


//Knop 1: verhoogt de hoogte met 10px, als deze groter is dan 100px, wordt de hoogte gereset naar 10px.

    var count = 0;
    $( "#but_rh_1" ).click(function(){
        count++;
        var multHeight = count*10;
        if (multHeight >= 100){
            count = 1;
        }

        $("#text4").val("Aantal clicks :" + count + "Verhoog de hoogte met :" + multHeight + "px");


        //count vermenigvuldigen met 10px
        //$("#rectangle").css("height" , count + "px");
    });


    /*$( "#but_rh_1" ).click(function() {

        $("#rectangle").css("height" , "px");
    });*/



//Knop 2: verandert de rechthoek in groen


$( "#but_rh_2" ).click(function(){
    $("#rectangle").css("background-color" , "green");
});


//Knop 3: reset de oorspronkelijke kleuren


$( "#but_rh_3" ).click(function(){
    $("#rectangle").css("background-color" , "blue");
});


//Knop 4: reset de oorspronkelijke kleuren


$( "#but_rh_4" ).click(function(){
    $("#rectangle").hide();
});

//Knop 5: verschijnt weer de rechthoek

//https://stackoverflow.com/questions/6880477/opposite-to-jquery-remove

$( "#but_rh_5" ).click(function(){
    $("#rectangle").show();
});





//Oefening 5

/*Bouw een html pagina met een vierkant. Wanneer een richtingstoets wordt ingedrukt (pijltjes toetsen),
beweegt het vierkantje 10px in de juiste richting.

BONUS: Wanneer het blok de ene kant van de pagina bereikt, moet het aan de andere kant weer verschijnen.*/


//Up: 38
//Down: 40
//Right: 39
//Left: 37




//https://stackoverflow.com/questions/19347269/jquery-keypress-arrow-keys/43775948

$(document).keydown(function(e) {
switch(e.which) {
    case 37:// arrow left

    $( "#square" ).css("left" , "10%");
    break;

    case 38: //arrow up

    $( "#square" ).css("top" ,  "10%")
    break;

    case 39: //arrow right

    $( "#square" ).css("right" , "10%");
    break;

    case 40: //arrow down

    $( "#square" ).css ("bottom" , "10%");
    break;

    default: return;
}
e.preventDefault();

});
