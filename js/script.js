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

	$(document).on('keypress', '.error', function() {
		$(this).removeClass("error");
        $(".validate").removeClass("line-error")
        $(".error-text").addClass("hide");
    })


	// Маска ввода
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')

	$('.validate_form button').on('click', function(event){
        event.preventDefault();      
        
        $(this).closest('form').find('input:not([type=submit]),textarea').each(function(i, elem) {            
            if($(this).attr('name') == 'phone' && $(this).hasClass('required')) {
                if (!$(this).inputmask("isComplete"))
                {
                	$(this).addClass("error");
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