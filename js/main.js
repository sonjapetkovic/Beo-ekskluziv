$(document).ready(function(){
   
    
    //HEADER ANIMATING//
    
    function animateHeader(){
        
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 50){
            $('header').addClass('header-active  py-lg-2').removeClass('py-lg-4');
        }else{
             $('header').removeClass('header-active  py-lg-2').addClass('py-lg-4');
        }
        
    }
  
  //ANIMATION//
    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 50) {
                var animacija = $(this).attr('data-animation');
                var delay = $(this).attr('data-delay');
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
                
            }
        });
    }
    
    
    animateHeader();
    animation();
    $(window).scroll(function(){
        
        animateHeader();
        animation();
    });
    
    //EASY SCROLL//
    
   $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    });
  
  //COUNTER UP//
  
   $('.counter-up').counterUp({
                delay: 10,
                time: 1000
            });
        
       
        
        //animate togler
        $('.navbar-toggler').click(function(){
            $(this).toggleClass('active');
        });
    

        
        //DOCUMENT READY END// 
});


