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
        $('.header-bottom').toggleClass('toggled');
        $('.content').toggleClass('toggled');   
      },100)
    } );
    $( '.header-menu-close' ).click( function () {
      setTimeout(function(){
        $('.header-bottom').toggleClass('toggled');
        $('.content').toggleClass('toggled');
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

$(function()
{
    function after_form_submitted(data) 
    {
        if(data.result == 'success')
        {
            $('form.reused_form').hide();
            $('form.reused_form-second').hide();
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
      $('.reused_form-second').submit(function(e)
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
                url: 'contact.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json' 
            });        
        
      });	
});
