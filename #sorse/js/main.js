$(function(){

    var stepNow = 0;
    var maxStep = 0;
    var allStep = 6;
    var btnPrev = $('.btn-prev');
    var btnNext = $('.btn-next');

    $(".tel").inputmask("+38 (999) 999-99-99");

    function progresPlus(){
        let discount;
        if(stepNow < 4){
            discount = (stepNow + 1) * 2
        }
        else{
            discount = stepNow * 2 + 1
        }
        if(discount > 10){
            discount = 10;
        }
        var w = (100 / allStep) * (stepNow + 1)
        $('.counter-block .counter b').text(discount);
        $('.line-progress').width(w+'%')
        $('.you-progress__counter b').text(Math.round(w)+'%');
    }

    btnPrev.click(function(){
        console.log(stepNow);
        if(stepNow == 0){
            btnPrev.addClass('disabled');
        }
        stepNow -= 1;
        btnNext.removeClass('disabled');
        progresPlus();
        $('.steps').find('.active').removeClass('active').slideUp('slow').prev().addClass('active').slideDown('slow');
    });
    btnNext.click(function(){
        progresPlus();
        stepNow += 1;
        btnPrev.removeClass('disabled');
        if(stepNow == maxStep){
            btnNext.addClass('disabled');
        }
        $('.steps').find('.active').slideUp('slow').removeClass('active').next().addClass('active').slideDown('slow');
    });
    $('.quiz-page__content .btn-yellow').click(function() {
        $('.quiz-modal').fadeToggle('slow');
    });

    $('.radio-image, .radio-input').click(function() {
        let step = $(this).parents('.step');
        stepNow = step.index();
        if(step.hasClass('last')){
            $('.quiz-modal__begin').fadeOut('slow').addClass('poa').next().fadeIn('slow');
        }
        else{
            if(!step.hasClass('success')){
                maxStep = step.index();
            }
            step.addClass('success').removeClass('active').slideUp('slow').next().addClass('active').slideDown('slow');
        }

        if(stepNow == maxStep){
            btnNext.addClass('disabled');
        }
        btnPrev.removeClass('disabled');
        
        progresPlus()
    });

    $('.select-type__item').click(function() {
        let el = $('.select-type')
        let img = $(this).find('img').attr('src');
        let txt = $(this).attr('data-val');
        let formB = $('.end-form')
        el.slideToggle('slow');
        formB.slideToggle('slow').find('.end-form__img').attr('src', img);
        formB.find('.type-phone').attr('value', txt);
        formB.find('.soc-name').text(txt);
    });
    $('.sel-other__title').click(function() {
        $('.select-type').slideToggle('slow');
        $(this).parents('.end-form').slideToggle('slow');
    });


    
    $('form').submit(function(event){
        data_form = $(this).serialize();
        $.ajax({
            url: "send.php",
            type: "POST",
            data: data_form,
            dataType: "html",
            success: funcS
        });
        successSend();
        return false;
    });

    function successSend(){
        $('.quiz-page, .quiz-modal').fadeOut('slow');
        $('.popup-success').fadeToggle('slow');
    }



    // console.log('success')
});



/*

    var  wheihht=96;
    $(window).scroll(function(){
        var bo = $(this).scrollTop();
        if ( bo >= wheihht) {$('nav').addClass('scr_nav')};
            if ( bo < wheihht) {$('nav').removeClass('scr_nav')};
    })
    $("nav li a").click(function(){
        var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top-20}, 1300);
            return false;
    }); 

*/