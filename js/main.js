$(document).ready(function () {


    //HEADER ANIMATING//

    function animateHeader() {

        var scrollTop = $(window).scrollTop();
        if (scrollTop > 50) {
            $('header').addClass('header-active  py-lg-2').removeClass('py-lg-4');
        } else {
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
    $(window).scroll(function () {

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
    
//hamburger animate
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
    });
    


//Form validation//
    $(function () {
        $(".subscribe-form").validate({
            highlight: function (element) {
                $(element).closest('.form-group').addClass("has-danger");
                $(element).addClass("form-control-danger");
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
                $(element).removeClass('form-control-danger').addClass('form-control-success');
            },
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                'newsletter[]': {
                    required: true
                }


            },
            messages: {
                name: {
                    required: " *Polje ime je obavezno!"
                },
                email: {
                    required: 'Polje *Email je obavezno',
                    email: 'Molimo Vas unesite Vasu Email adresu!'
                },
                message: {
                    required: 'Polje *Poruka je obavezno!'
                }


            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-msg'));
            }

        });
    });
    







    //DOCUMENT READY END// 
});


