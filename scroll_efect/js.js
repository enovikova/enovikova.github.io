var main = function() {

  $(window).scroll(function(){
      if ($(window).width() > 1026) {
         if ($(this).scrollTop() > 560) {
            $('.heading').addClass('relative');
            $('.subheading').addClass('relative');
            $('.block_two').addClass('scroll');
            
        } else {
                $('.heading').removeClass('relative');
                $('.subheading').removeClass('relative');
                $('.block_two').removeClass('scroll');
                
        };
        if ($(this).scrollTop() > 750) {
            $('.header').addClass('small_header');
        } else {
            $('.header').removeClass('small_header');
        }
      } else {
          $('.heading').addClass('mob');
            $('.subheading').addClass('mob');
            $('.block_two').addClass('mob');
      }
        
  });
}

$(document).ready(main);

            