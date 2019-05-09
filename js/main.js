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
  if($('.counter').length > 0 ){
     $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        }
        
         //FORM VALIDATION//
         
      //Form validation first//
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
                            
                            email:{
                                required:true,
                                email:true
                            }


                        },
                        messages: {
                            
                            email:{
                               required:"the *Email fild is required!" ,
                               email:"Please enter valid email address"
                            }

                        },
                        errorElement: 'p',
                        errorPlacement: function (error, element) {
                            error.appendTo($(element).closest('.form-group').find('.error-msg'));
                        }

                    });
                });
           
            //Form Validation firs end//
            
                  //FORM VALIDATION second start//
         
      $(function () {
                    $(".contact-form").validate({
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
                            email:{
                                required:true,
                                email:true
                            },
                            message:{
                                required:true
                            }
                           
                        },
                        messages: {
                            name: {
                                required: "The *Name field is required!"
                                
                            },
                            email:{
                               required:"The *Email fild is required!" ,
                               email:"Please enter valid email address"
                            },
                            message:{
                                required:"The message fild is required!"
                            }

                        },
                        errorElement: 'p',
                        errorPlacement: function (error, element) {
                            error.appendTo($(element).closest('.form-group').find('.error-msg'));
                        }

                    });
                });
           
            //Form Validation end//

    
            
  
    
    

        
        //DOCUMENT READY END// 
});


