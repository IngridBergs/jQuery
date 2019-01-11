/*Oefening 3 :

Maak een formulier aan waarin om de naam, voornaam, e-mailadres
en telefoonnummer van de gebruiker wordt gevraagd.

Controleer of het e-mailadres inderdaad een e-mailadres is,
 controleer of het telefoonnummer alleen cijfers bevat en of
  de naam en voornaam alleen letters of streepjes bevatten.*/


jQuery(document).ready(function($) {

$("#submit").click(function(){

    var naam = $("#naam").val();
    var voornaam = $("#voornaam").val();
    var email = $("#email").val();
    var telefoon = $("#telefoon").val();


//reguliere expressies

//cheat sheet http://www.cbs.dtu.dk/courses/27610/regular-expressions-cheat-sheet-v2.pdf

//example zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

/*var paragraph = 'The quick brown fox jumped over the lazy dog. It barked.';
var regex = /[A-Z]/g;
var found = paragraph.match(regex);*/


//match
//A String method that executes a search for a match in a string.
// It returns an array of information or null on a mismatch.


console.log(found);

//CHECK NAAM EN VOORNAAM

    var numbers = /\d/; // \d digit , \D digit

    if(!(naam.match(numbers)==null)){
        alert("naam mag geen getal bevatten");
        return null;
    };

    if(!(voornaam.match(numbers)==null)){
        alert("Voornaam mag geen getal bevatten");
        return null;

    };


// CHECK EMAIL
    //\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})
    //reg exp email

    var checkEmail = (\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6});

    if(!(email.includes("@"))){
        alert("geen email");
        return null;
    }
//andere mogelijke oplossing

    if(!(email.match(checkEmail)==null)){
        alert("geen email");
        return null;
    };

// CHECK TELEFOON

var checkTelefoon = /^[0-9]*$/   //$ end of line
//do a search for the numbers that are NOT 0 to 9 in a string
//The [^0-9] expression is used to find any character that is NOT a digit.

    if(!(telefoon.match(checkTelefoon))){
        alert("Telefoon is enkel cijfers");
        return null;
    };


});

    }); //sluit document ready
