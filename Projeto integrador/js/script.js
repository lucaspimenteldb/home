
$(document).ready(function() {
// primeiro botão para próximo do conceito
    $( "#botao" ).click(function() {
        $( "#conceito" ).fadeOut( "slow" );
        $( "body > div > div > div:nth-child(2)").fadeIn( "slow" );
        $( "#ideiaprincipal").addClass( "hide" );
        $( "body > div > div > div:nth-child(2)").removeClass( "hide" );
    });
// segundo para anterior do conceito
    $( "#butleft" ).click(function() {
        $( "body > div > div > div:nth-child(2)").fadeOut( "slow" );
        $( "body > div > div > div:nth-child(2)").addClass( "hide" );
        $( "#conceito" ).fadeIn( "slow" );
        $( "#ideiaprincipal").removeClass( "hide" );

    });

    $('#equipebut').click(function() {
        $('html, body').animate({
            scrollTop: $("#equipe").offset().top-51
        }, 500);
    });

    $('#appbut').click(function() {
        $('html, body').animate({
            scrollTop: $("#telas").offset().top-51
        }, 500);
    });

    $('#ideiabut').click(function() {
        $('html, body').animate({
            scrollTop: $("#conceito").offset().top
        }, 500);
    });

});
//$( "#conceito" ).fadeOut( "slow" );
// $( ".conceito1" ).attr( "id", "conceito12" )
