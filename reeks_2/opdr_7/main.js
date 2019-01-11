//Samenvatting van de reeksen 1 en 2. De instructies zijn te vinden in het HTML-bestand.

/*Changes to the article

    Click here to enlarge the font (120%)
    Click here to decrease the font size (80%)
    Click here to bold or normalize the green words
    Click here to underline or normalize the words in red
    Fly over here to replace the logo with another image
    Display the URL of links in a tooltip when hovering over links
    Click here to add "Chapter 1:" before the 1st title h2
    and "Chapter 2:" before the 2nd title h2*/


    /*<div id="modifications">
        <h2>Changes to the article</h2>
        <ol id="instructions">
            <li>Click here to enlarge the font (120%)</li>
            <li>Click here to decrease the font size (80%)</li>
            <li>Click here to bold or normalize the green words</li>
            <li>Click here to underline or normalize the words in red</li>
            <li>Fly over here to replace the logo with another image</li>
            <li>Display the URL of links in a tooltip when hovering over links</li>
            <li>Click here to add "Chapter 1:" before the 1st title h2 <br> and "Chapter 2:" before the 2nd title h2</li>
        </ol>
    </div>*/

    //$("p:first") 	Selects the first <p> element

//Click here to enlarge the font (120%)

    $( "#task_1" ).click(function() {
        $("body").css("font-size" , "120%");
    });



//Click here to decrease the font size (80%)

    $( "#task_2" ).click(function() {
        $("body").css("font-size" , "80%");
    });


//Click here to bold or normalize the green words

    $( "#task_3" ).click(function() {
        $(".green").css("font-weight" , "bold");
    });


//Click here to underline or normalize the words in red
//text-decoration: underline;
 //text-decoration-color: red;

    $( "#task_4" ).click(function() {
        $(".red").css("text-decoration" , "underline");
        $(".red").css("text-decoration-color" , "red");
    });



//Fly over here to replace the logo with another image

    $( "#task_5" ).click(function() {
        //<img src="images/jquery-logo.png" />
         $('#content img').attr('src','images/rose.jpg');
    });


    /*$('.black-button').on({
         'click': function(){
             $('#change-image').attr('src','/wp-content/uploads/2018/09/black.jpg');
         }
     });*/

//???
//Display the URL of links in a tooltip when hovering over links

// inspiratie : https://www.telerik.com/forums/adding-url-link-in-a-tool-tip


 /* $("button").click(function(){
    $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
});*/


    $( "li" ).hover(function() {
        $("li").attr("href", "http");
    });



//Click here to add "Chapter 1:" before the 1st title h2 <br> and "Chapter 2:" before the 2nd title h2
//niet zeker of dit correct is ?
// inpspiratie $( "p" ).append( "<strong>Hello</strong>" );
//The append() method inserts specified content at the end of the selected elements.

    $( "#task_7" ).click(function() {
        $( "#content" ).append( "Chapter 1:" );
        $( "#modifications" ).append( "Chapter 2:" );
    });
