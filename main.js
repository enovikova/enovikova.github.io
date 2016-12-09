$(function(){

    $("body").removeClass("locked");

    var resizeHandler = function(){
        $(window).scroll(function(){
            if($(window).width() > 1180) {
                var scrollTop = $(window).scrollTop();
                console.log(scrollTop);
                if(scrollTop < 370) {
                    $("h2").css({
                        "position": "fixed",
                        "top": 176
                    });
                    $("header").css({
                        "position": "fixed",
                        "top": 0
                    })
                    $(".bio").css({
                        "margin-top": $(".bio").offset().top
                    });

                } else {
                    $("h2").css({
                        "position": "fixed",
                        "top": 370-scrollTop+176
                    });
                    $("header").css({
                        "position": "fixed",
                        "top": 370-scrollTop
                    })
                }
            } else {
                $("h2").css({
                    "top": 0,
                    "position": relative
                });
                $("header").css({
                    "top": 0,
                    "position": relative
                });
                $(".bio").css({
                    "margin-top": 0
                });
            }
        });
    };

    $(window).resize(resizeHandler);
    resizeHandler();

    $("a.disabled").on("click", function(e){
        e.preventDefault();
    })
})