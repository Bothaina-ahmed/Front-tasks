/**
 selector.action()

 */
$(document).ready(function(){
    $('.show').click(function(){
        $('p').show();
    });
    $('.hide').click(function(){
        $('p').hide();
    });
    $('.toggle').click(function(){
        $('p').toggle();
    });

    // Fading Effect
    $('.div1').hide();
    $('#fadeIn').dblclick(function(){
        $('.div1').fadeIn(3000);
    });
    $('#fadeOut').click(function(){
        $('.div2').fadeOut(4000);
    });
    $('#fadeToggle').mouseenter(function(){
        $('div').fadeToggle(2000);
    });

    $('.slide').click(function(){
        $('.content').slideToggle(5000);
    });
    $('.title').focus(function(){
        $(this).css('font-size' , '2rem');
    });
    $('#instructor').focus(function(){
        $(this).css('background-color' , 'grey');
    });
    $('#instructor').blur(function(){
        $(this).css('background-color' , 'white');
    });
    
    $('input').focus(function(){
        $(this).css('color' , 'green');
    });

    $('input').blur(function(){
        $(this).css('color' , 'orange');
    });
    $('.desc').focus(function(){
        $(this).css({
            'color' : 'yellow',
            'background-color':'black',
            'font-size':'2rem'
        });
    });
    $('.desc').blur(function(){
        $(this).css({
            'color' : 'black',
            'background-color':'white',
            'font-size':'1rem'
        });
    });
    $('.btu').focus(function(){
        $(this).css({
            'color' : 'yellow',
            'background-color':'black',
            'font-size':'2rem'
        });
    });
  
});