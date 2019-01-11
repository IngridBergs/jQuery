//Wanneer de gebruiker op een veld gefocused, stelt u de rand ervan in op "1px solid green".
//Wanneer het veld niet meer scherp is, zet de rand op "1px solid red".


//focus en focusout
//https://api.jquery.com/focus/
//https://api.jquery.com/focusout/


$( "input" ).focus(function() {
  $("input").css("border" , "1px solid green");
});

$( "input" ).focusout(function() {
  $("input").css("border" , "1px solid red");
});
