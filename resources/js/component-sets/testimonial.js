import $ from 'jquery';

window.$ = window.jQuery = $;

require("slick-carousel/slick/slick");
require("slick-carousel/slick/slick.css");

$(function () {
    var time = 5;
    var $bar,
        $slick,
        isPause,
        tick,
        percentTime;

    $slick = $('.slick-testimonials')
    $slick.slick({
        // dots          : true,
        arrows         : true,
        infinite      : true,
        adaptiveHeight: true,
        autoplay      : false,
        // autoplaySpeed : time*1000
    })

    $bar = $('.slick-testimonials + .slider-progress .progress');

    $slick.on({
        mouseenter: function() {
            isPause = true;
        },
        mouseleave: function() {
            isPause = false;
        }
    });

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if(isPause === false) {
            percentTime += 1 / (time+0.1);
            $bar.css({
                width: percentTime+"%"
            });
            if(percentTime >= 100)
            {
                $slick.slick('slickNext');
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $bar.css({
            width: 0+'%'
        });
        clearTimeout(tick);
    }
    startProgressbar();
});
