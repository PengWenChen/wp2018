//settings for slider
var width = 150;
var width_2 = 250; 
var width_bg = 1300;
var animationSpeed = 1000;
var pause = 3000;
var currentSlide_1 = 1;
var currentSlide_2 = 1;
var currentSlide_bg = 1;

//cache DOM elements
var $slider = $('#slider');
var $slideContainer = $('.slides', $slider);
var $slides = $('.slide', $slider);

var $slider_2 = $('#slider_2');
var $slideContainer_2 = $('.slides_2', $slider_2);
var $slides_2 = $('.slide_2', $slider_2);

var $slider_bg = $('#slider_bg');
var $slideContainer_bg = $('.slides_bg', $slider_bg);
var $slides_bg = $('.slide_bg', $slider_bg);
var $w=$('.word3').text;

$('.arrow').click( function(){
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
        ++currentSlide_1;
        
        $('#li_'+currentSlide_1).css('color','orangered');
        if (currentSlide_1 === $slides.length) {
            currentSlide_1 = 1;
            $('#li_2').css('color','white');
            $('#li_3').css('color','white');
            $('#li_4').css('color','white');
            $slideContainer.css('margin-left', 0);
        }
    });

    $slideContainer_2.animate({'margin-left': '-='+width_2}, animationSpeed, function() {
        if (++currentSlide_2 === $slides_2.length) {
            currentSlide_2 = 1;
            $slideContainer_2.css('margin-left', 0);
        }
    });

    $slideContainer_bg.animate({'margin-left': '-='+width_bg}, animationSpeed, function() {
        if (++currentSlide_bg === $slides_bg.length) {
            currentSlide_bg = 1;
            $slideContainer_bg.css('margin-left', 0);
        }
    });
    var c=currentSlide_bg+2;
    if(currentSlide_bg==3){
        c=1;
    }else if(currentSlide_bg==4){
        c=2;
    }
    var $w=$('.pic1.word'+c)
    if(c!=1){
        $('#arise').text($w.text());        
    }else{
        $('#arise').text('desk&chair');  
    }



});


