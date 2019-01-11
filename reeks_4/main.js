//Oefening 1 :

//Maak een lijst met drie elementen (Rock, Paper, Scissors). Voeg een SPEEL button toe.
 //Wanneer er op SPEEL word gedrukt, kies de computer een element willekeurig uit (Rock, Paper of Scissors).
 //Vergelijk het met het door de speler gekozen element om te zien wie er gewonnen heeft tussen de mens en de machine.

//Bonus: Voeg een overwinning en nederlaag teller toe en geef het percentage van de overwinning tegen de computer weer.
//STAPPEN

/* Zit voor pc en sluit je ogen, doe alsof je het game al speelt
Stel de juiste vragen
stap 1 : Pc moet je mij een vraag stellen
stap 2 : Gebruik 3 knoppen
stap 3: Zet deze in een variabele om keuze op te slaan
stap 4: invoer vergelijken met keuze die pc voor ons maakte (random number)
stap 5:  PC random number :

0 -> Rock
1 -> Paper
2 -> Scissors

stap 6: Pc en user gebruiken zelfde array !!

0 1 2
R P S

//uitslag bepalen

/*  S > P (Scissors beats Paper)    2 > 1
    P > R (Paper beats Rock)        1 > 0
    R > S (Rock beats Scissors)     0 > 2
    maw we spelen een nummer spelen

    1 tov 1  : gelijk spel
    1 tov 2 :  win
    1 tov 3 : verloren

stap 7: 2 variabelen :  nl die van PC en die van USER
stap 8: Reset , speel game opnieuw
*/

//ask user for input
//dit stuk werkt alvast!

//via prompt
//var choiceUser = prompt("Please give your choise : R/P/S or 0/1/2");
//$('#inputUser').val(choiceUser);

//via het klikken van de button

jQuery(document).ready(function($) {
	//do jQuery stuff when DOM is ready



    $("#btn_Paper").on('click', function(){
        $('#input').val(0);
    });
    $("#btn_Scissors").on('click', function(){
        $('#input').val(1);
    });
    $("#btn_Rock").on('click', function(){
        $('#input').val(2);
    });

//genereer een random getal tussen o en 2

//var numberRandom = Math.floor(Math.random() * 3);
//console.log("Random getal is :" + numberRandom);


//wanneer op de PLAY button wordt geklikt, genereer dan het random number
    $("#btn_Play").on('click', function(){
        var numberRandom = Math.floor(Math.random() * 3);
        $('#random').val("Randomnumber :" + numberRandom);
        console.log(numberRandom);

        if($('#input').val() == numberRandom)
        {
            //console.log ("Result: both values are the same, no winner!");
            $('#message').val("Result: both values are the same, no winner!");
        }
        else if($('#input').val() > numberRandom)
        {
            //console.log ("Result: larger, you win");
            $('#message').val("Result: larger, you win");
        }
        else
        {
            //console.log ("Result: smaller ,you lose");
            $('#message').val("Result: smaller, you lose");
        }
    });


    $("#btn_Reset").on('click', function(){
        numberRandom = "";
        $('#message').val() = "";

    });

//vergelijken van de 2 waardes
//$('#inputUser').val(0); numberRandom


//vergeet niet alle code in document ready te zetten
//jQuery(document).ready(function($) {
	//do jQuery stuff when DOM is ready
//});

}); //sluit document ready
