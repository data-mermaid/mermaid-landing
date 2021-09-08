import $ from 'jquery';

window.$ = window.jQuery = $;

require("slick-carousel/slick/slick");
require("slick-carousel/slick/slick.css");

$(function () {
    var time = 50000;
    var $bar,
        $slick,
        isPause,
        tick,
        percentTime;

    $slick = $('.slick-testimonials')
    $slick.slick({
        // dots          : true,
        arrows        : true,
        infinite      : true,
        adaptiveHeight: false,
        autoplay      : false,
        // autoplaySpeed : time*1000
        responsive: [
            {
                breakpoint: 767,
                settings  : {
                    dots: true,
                    //     slidesToShow: 2,
                    //     slidesToScroll: 1,
                }
            },
        ],
    })

    $bar = $('.slick-testimonials + .slider-progress .progress');

    $slick.on({
        mouseenter: function () {
            isPause = true;
        },
        mouseleave: function () {
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
        if (isPause === false) {
            percentTime += 1 / (time + 0.1);
            $bar.css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $slick.slick('slickNext');
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $bar.css({
            width: 0 + '%'
        });
        clearTimeout(tick);
    }

    startProgressbar();
});
