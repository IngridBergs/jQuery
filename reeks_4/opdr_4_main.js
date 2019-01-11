/*Oefening 3 :

Maak een formulier aan waarin naam, voornaam, geboortedatum, geboorteplaats,
 werk en bedrijf worden aangevraagd. Maak een "Genereer" knop om een korte
  presentatie zin te maken.

Voorbeeld: Als de ingevoerde gegevens zijn: Lesley Forn, 11/11/1987,
Amsterdam, Coach, Genk dan wordt de presentatie zin: Lesley Forn,
Geboren op 11/11/1987 in Amsterdam, momenteel een Coach in Genk.*/



jQuery(document).ready(function($) {

    $( "#btn_genereer" ).click(function(event) {
            event.preventDefault(event);
            /*$("#naam").val(); // naam
            $("#voornaam").val(); //voornaam
            $("#geboortedatum").val(); //geboortedatum
            $("#geboorteplaats").val(); //geboorteplaats
            $("#werk").val();//werk
            $("#bedrijf").val();//bedrijf*/


            var result =  $("#voornaam").val() + " " + $("#naam").val() + " , Geboren op " + $("#geboortedatum").val() + " in " + $("#geboorteplaats").val()
             + ", momenteel een " + $("#werk").val() + " in " + $("#bedrijf").val() + " .";

            //$("#message").val() = $("#voornaam").val() + " " + $("#naam").val() + " , Geboren op " + $("#geboortedatum").val() + " in " + $("#geboorteplaats").val()
            // + ", momenteel een " + $("#werk").val() + " in " + $("#bedrijf").val() + " .";


            console.log(result);






    });



    }); //sluit document ready
