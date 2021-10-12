$(document).ready(function(){
	

	$('.accordion .item .head').click(function (e) {
		e.preventDefault()

		const $item = $(this).closest('.item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})

	$(document).on('change', '.error', function() {
        $(this).removeClass('error');
        if($(this).attr("name")!="agree")
        {
        	$(this).next().hide();
        }
    })


	// Маска ввода
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')

	$('.validate_form button').on('click', function(event){
        event.preventDefault();      
        
        $(this).closest('form').find('input:not([type=submit]),textarea').each(function(i, elem) {            
            if($(this).attr('name') == 'phone' && $(this).hasClass('required')) {
                if (!$(this).inputmask("isComplete"))
                {
                    $(".validate").addClass("line-error")
                    $(".error-text").removeClass("hide");
                }
                else
                {
                	$(".validate_form").hide();
                	$('.application-accepted').removeClass("hide");
                }
            } 
        })   
    });


});