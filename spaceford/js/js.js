var main = function () {
    // курсор
    $('.evaluation_positive').awesomeCursor('thumbs-o-down');
    $('.evaluation_negatie').awesomeCursor('thumbs-o-up');

    //   сворачивание 
    $('.tipe1').click(function () {
        $('.container').hide();
        $('.userinfo').hide();
    });

    $('.tipe2').click(function () {
        $('.container').animate({
            width: '1'
        }, 600);
        $('.usercontent_menu').hide();
        $('.usercontent').hide();
        $('.buttons_wrap').addClass('small');
    });
    $('.tipe3').click(function () {
        $('.container').animate({
            width: '50%'
        }, 600);
        $('.usercontent_menu').show();
        $('.usercontent').show();
        $('.buttons_wrap').removeClass('small');
    });

    $('.btn_slide').click(function () {
        $('.container').show();
         $('.userinfo').animate({
            left: '-100%'
        }, 600);
    });
    

    // carousel
    $('.owl-carousel').owlCarousel({
        
        loop:true,
        dots:false,
        margin: 12,
        items: 3,
        navText: '<>',
        responsive: {
            0: {
                nav:false
            },
            1200: {
               nav:true
            }
        }
    });

    // tabs    
    $(".usercontent_menu li a").click(function(event) {
        event.preventDefault();        
        $(this).parents(".usercontent_menu").find('a').removeClass("active");
        $(this).addClass("active");
        var tab = $(this).attr("href");
        $(".usercontent_tab").not(tab).removeClass("active");
        $(tab).addClass("active");
    }); 
        
}

$(document).ready(main);