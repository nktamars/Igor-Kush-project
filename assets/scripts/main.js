$(document).ready(function(){
    $('.header-lang').click(function(e){
        e.preventDefault();
        $(".langs").fadeToggle('fast', 'linear').toggleClass('active');
    });
    $(document).click(function(e) {
        $('.header-lang')
          .not($('.header-lang').has($(e.target)))
          .children().children('.langs')
          .removeClass('active');
      });
      
    $('.lang-select-item').click(function(e){
        event.stopPropagation();
    });
  	$( '.header-menu' ).click( function () {
      setTimeout(function(){
       $('.header-canvas').show();
      },100)
    } );
    $( '.header-menu-close' ).click( function () {
      setTimeout(function(){
        $('.header-canvas').hide();
      },100)
    } );

        // on focus
        $(".contact-form-field input, .contact-form-field textarea").focus(function() {
            $(this).siblings('label').addClass('has-value');
        })
        // blur input fields on unfocus + if has no value
        .blur(function() {
          var text_val = $(this).val();
          if(text_val === "") {
            $(this).siblings('label').removeClass('has-value');
          }
        });
});
$(document).ready(function(){
    $('.jumbo-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
      $('.reviews-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
      $( '.jumbo-button' ).click(function(e){
        $( '.jumbo-popup' ).show();
    });
    $( '.jumbo-popup-close' ).click(function(e){
        $( '.jumbo-popup' ).hide();
    });
    $( '.news-more' ).click(function(e){
        e.preventDefault();
        $( '.news-info-hide' ).css('display','flex');
    });
    ///////////////////SMOOOTH//////////////
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr('tabindex', '-1');
          $target.focus();
        };
      });
    }
  }
});

  });
$(function()
{
    function after_form_submitted(data) 
    {
        if(data.result == 'success')
        {
            $('form.reused_form').hide();
            $('.jumbo-form input, .jumbo-form button, .jumbo-form p, .jumbo-form textarea').hide();
            $('.success_message').show();
            $('.error_message').hide();
            $('.contact-form-text').hide();
        }
        else
        {
            $('.error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('.error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('.success_message').hide();
            $('.error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

	$('.reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' ); 
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });
        

                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json' 
            });        
        
      });	
      $('.jumbo-form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' ); 
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });
        

                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json' 
            });        
        
      });		
});
