$(document).ready(function(){
    $('#menu-cortina').css('right','-290px');
    $('#cerrar').hide();

    $('#abrir').click(function(){
        $('#menu-cortina').animate({
            right:0
        },0,'easeOutExpo');
        $('#abrir').hide();
        $('#cerrar').show();
        event.preventDefault();
    });

    $('#cerrar').click(function(){
        $('#menu-cortina').animate({
            right: -290
        },0,'easeOutExpo');
        $('#abrir').show();
        $('#cerrar').hide();
        event.preventDefault();
    });
});