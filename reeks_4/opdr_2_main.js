jQuery(document).ready(function($) {



    /*Oefening 2 :

    Vraag aan de hand van een formulier naar het salaris, het geslacht en het aantal kinderen van een persoon.

    Bereken het salaris door de volgende kosten in mindering te brengen:

        Uitgaven: 18%;
        Verzekering: 7%;
        Bijdragen: 5%;

    Het is mogelijk om onder bepaalde voorwaarden kortingen te krijgen op de totale kosten:

        Als de werknemer een vrouw is, krijgt ze 2% korting.
        Indien de werknemer 3 kinderen ten laste heeft, krijgt hij 1% korting.
        Als de werknemer 4 kinderen ten laste heeft, krijgt hij 2% korting.*/


        //example
                //salary              10k/20k/30K
                //gender              F/M
                //amountChildren      0/1/2/3/4/5

        //$('#message')= "";
        $("#submit").click(function(event){
            //alert($("#salary").val());
            event.preventDefault(event);
            //vergeet event niet als parameter mee te geven !!!
            /*$('#message').val("Result: testje");

            var salary = $("#salary").val();
            var gender = $("#gender").val();
            var amountChildren = $("#amountChildren").val();

            $('#message').val(" Salary:" + salary + " Gender:" + gender + " amountChildren :" + amountChildren);*/


            var salary = $("#salary").val();
            salary = salary - (0.3*salary);
            console.log(salary);
            //hoe value uit option van selectbox halen


                /*$('#gender').on('change',function(){
                var optionGender = $("#gender option:selected").text();
                alert("Selected Option Gender: "+ optionGender);
                });

                $('#amountChildren').on('change',function(){
                var optionChildren = $("#amountChildren option:selected").text();
                alert("Selected Option Children: "+ optionChildren);
            });*/


            //check kortingen

            var gender = $("#gender option:selected").text();
            if(gender == "female"){
                console.log("2% korting!");
            }else {
                console.log("male dus geen korting!");
            }

            var amountChildren = $("#amountChildren option:selected").text();
            if(amountChildren == 3){
                console.log("3 kinderen dus 1% korting");
            }
            else if(amountChildren >= 4){
                console.log("4 of meer kinderen dus 2% korting");
            }
            else{
                console.log("0 kinderen geen korting");
            }

                //dus we hebben, var salary, var optionGender , var optionChildren

                $('#message').val(" Salary:" + salary + " Gender:" + $("#gender option:selected").text() + " amountChildren :" + $("#amountChildren option:selected").text());

                //console.log(" Salary:" + salary + " Gender:" + $("#gender option:selected").text() + " amountChildren :" + $("#amountChildren option:selected").text());

                //check kortingen





        });
        //alle aftrek


            // uitgaven             outcome 18%
            // verzekering          assurance 7%
            // bijdragen            contributes 5%

            // dus in totaal gaat er 30% van het salaris af
        /*let salary = $("#salary").val();
        salary = salary - (0.3*salary);*/


        //Reductions



        //F 2%
        //mountChildren 3 1%
        //amountChildren 4 2%

        /*if ($("#gender").val() === "F")
        {
            salary = salary + (0.02*salary);

        }

        else if( $("#amountChildren").val() === 3){
            salary = salary + (0.01*salary);
        }

        else ( $("#amountChildren").val() === 4){
            salary = salary + (0.02*salary);
        }*/



}); //sluit document ready
